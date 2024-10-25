import { Canvas } from '@react-three/fiber';
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {calculateSizes} from "../constants/index.js";
import {useMediaQuery} from "react-responsive";
import Target from "../components/Target.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import {Suspense} from "react";
import {Link} from "react-router-dom";

const Hero = () => {

    const isSmall =  useMediaQuery({ maxWidth: 440 });
    const isMobile =  useMediaQuery({ maxWidth: 767 });
    const isTablet =  useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="text-center font-generalsans font-medium text-white"
                   style={{fontSize: 'clamp(1rem, 2.5vw, 2rem)'}}>
                    Hi I am Karan<span className='waving-hand'>👋🏻</span>
                </p>
                <p className="hero_tag text-gray_gradient">Empowering Ideas with Code</p>
            </div>

            <div className="w-full h-auto absolute inset-0">

            <Canvas style={{ width: '100%', height: '100%' }}>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={isMobile ? [0, 0, 20] : [0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[0.1, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <Link to="/contact" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full px-4 py-2 sm:min-w-96" />
                </Link>
            </div>

        </section>
    );
};

export default Hero;
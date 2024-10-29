import { useState } from "react";
import { Link } from 'react-router-dom';

const NavItems = () => {
    return (
        <ul className="nav-ul">
            <li className="nav-li"><Link to="/">Home</Link></li>
            <li className="nav-li"><Link to="/about">About</Link></li>
            <li className="nav-li"><Link to="/projects">Projects</Link></li>
            {/*<li className="nav-li"><Link to="/clients">Clients</Link></li>*/}
            <li className="nav-li"><Link to="/experience">Experience</Link></li>
            <li className="nav-li"><Link to="/contact">Contact</Link></li>
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
    const closeMenu = () => setIsOpen(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="w-full mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="hover:text-white transition-colors">
                        <img
                            src="/assets/Logo.png"
                            alt="Karan's Logo"
                            className="max-h-10 w-auto"
                        />
                    </a>
                    <button onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle Menu">
                        <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                             alt="toggle" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} `}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu}/>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

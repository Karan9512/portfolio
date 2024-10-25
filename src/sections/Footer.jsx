const Footer = () => {
    return (
        <footer className="c-space pt-5 pb-5 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-5">

            <div className="text-gray-400 flex gap-2">
                <a className="hover:text-white transition-colors">Terms & Conditions</a>
                <p>|</p>
                <a className="hover:text-white transition-colors">Privacy Policy</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
                <a href="https://github.com/Karan9512" target="_blank" rel="noopener noreferrer" aria-label="Github" className="social-icon hover:scale-110 transition-transform">
                    <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/Karan-Chile/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon hover:scale-110 transition-transform">
                    <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>

            </div>

            {/* Copyright Notice */}
            <p className="text-gray-400">© 2024 Karan Chile. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

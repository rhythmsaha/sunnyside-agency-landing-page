const Header = () => {
    return (
        <header
            className={`absolute top-0 flex justify-between w-full p-8 items-center z-10 transition-all duration-500 `}
        >
            <img
                src="/images/logo.svg"
                alt="logo"
                className="object-contain h-8"
            />

            <nav className="hidden nav lg:flex items-center space-x-8 font-Barlow text-white ">
                <span>About</span>
                <span>Services</span>
                <span>Projects</span>
                <span className="font-Fraunces uppercase bg-white rounded-full text-black py-4 px-6 hover:bg-opacity-25 hover:text-white transition-all duration-150 text-base">
                    Contact
                </span>
            </nav>
        </header>
    );
};

export default Header;

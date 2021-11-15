const Sidebar = () => {
    return (
        <div className="fixed bg-white top-24 left-2/4 -translate-x-2/4 w-[88%] p-10 flex justify-center">
            <div className="triangle"></div>

            <nav className="flex flex-col items-center space-y-8 font-Barlow text-gray-600 text-lg">
                <span>About</span>
                <span>Services</span>
                <span>Projects</span>
                <span className="font-Fraunces text-black bg-yellow-300 rounded-full uppercase text-base px-8 py-3">
                    Contact
                </span>
            </nav>
        </div>
    );
};

export default Sidebar;

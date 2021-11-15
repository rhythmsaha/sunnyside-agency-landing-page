import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
    const [sidebarToggled, setSidebarToggled] = useState(false);
    return (
        <header
            className={`absolute top-0 flex justify-between w-full px-4 py-8 items-center z-10 transition-all duration-500 `}
        >
            <img
                src="/images/logo.svg"
                alt="logo"
                className="object-contain h-5 lg:h-8"
            />

            <nav className="hidden nav lg:flex items-center space-x-8 font-Barlow text-white ">
                <span>About</span>
                <span>Services</span>
                <span>Projects</span>
                <span className="font-Fraunces uppercase bg-white rounded-full text-black py-4 px-6 hover:bg-opacity-25 hover:text-white transition-all duration-150 text-base">
                    Contact
                </span>
            </nav>

            <span
                className="mr-2 lg:hidden"
                onClick={() => setSidebarToggled((prev) => !prev)}
            >
                <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
                        fill="#FFF"
                        fill-rule="evenodd"
                    />
                </svg>
            </span>
            {sidebarToggled && <Sidebar />}
        </header>
    );
};

export default Header;

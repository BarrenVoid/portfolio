import React from "react";
import { useState } from "react";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
        <div id="navbar" className="flex item-center justify-between fixed bg-[#252525] w-full p-6">
            <h1><a>tony_le.jsx</a></h1>
            <nav>
                <div className="MOBILE-MENU flex sm:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 p-6"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>

                        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                            <li><a href="#">// about</a></li>
                            <li><a href="#">// stack</a></li>
                            <li><a href="#">// projects</a></li>
                            <li><a href="#">// contact</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="DESKTOP-MENU">
                    <ul className="hidden space-x-8 sm:flex">
                        <li><a href="#">// about</a></li>
                        <li><a href="#">// stack</a></li>
                        <li><a href="#">// projects</a></li>
                        <li><a href="#">// contact</a></li>
                    </ul>
                </div>
            </nav>
            <style>{`
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: #212731;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default NavBar
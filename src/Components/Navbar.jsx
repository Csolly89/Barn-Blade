import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import NavLink from './NavLink';
import NavOverlay from './NavOverlay'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const navLinks = [
        {
            title: "About us",
            path: "/About",
        },
        {
            title: "Newsletter",
            path: "/Blog",
        },
        {
            title: "Products",
            path: "/Products",
        },
    
    ]

    return (
        <nav className="fixed z-10 bg-primary w-full h-[2em]">
            <div className='flex flex-wrap'>
                {/* hidden menu navbar for smallscreens */}
                <div className="mobile-menu block md:hidden lg:hidden">
                    {!navbarOpen
                        ? (<button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5" /></button>)
                        : (<button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5" /></button>)
                    }
                </div>
                {/* main navbar links */}
                <div className="">
                    <ul className="flex flex-row">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <NavOverlay links={navLinks} /> : null}
        </nav>
    );
}

export default Navbar
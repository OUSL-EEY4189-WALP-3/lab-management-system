'use client'

import { useState } from 'react'
import Link from 'next/link';
import { FiHome } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";


export default function Header() {

    const [isOpen, setOpen] = useState(false);

    return (
        <header className=''>
            <nav>
                <div>
                    <img 
                    src='/logo.png'
                    alt='logo'
                    width={200}
                    height={60}
                    />
                </div>

                {/* Lager screen menu */}
                <div>
                    <ul>
                        <li>
                            <Link href="#">
                                <FiHome />Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                About
                            </Link>
                        </li>
                    </ul>     
                </div>

                <div>
                    <div>
                        <button >
                            <MdMailOutline />Contact Us
                        </button>
                        <button>
                            Login
                        </button>
                    </div>
                    {/* Smaller screeen navbar show/hide buttons. These buttons should hide in larger screens */}
                    <div>
                        {isOpen ? (
                            <button onClick={() => setOpen(false)} ><IoIosCloseCircleOutline/></button>
                        ) : (
                            <button onClick={() => setOpen(true)} ><IoMenu /></button>                  
                        )}
                    </div>
                </div>

                {/* Mobile screen menu */}
                <div >
                    <ul>
                        <li >
                            <Link href="#">
                                Home
                            </Link>
                        </li>
                        <li >
                            <Link href="#">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                About
                            </Link>
                        </li>
                    </ul>     
                </div>
            </nav> 
        </header>
    ); 
}



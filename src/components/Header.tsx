"use client";

import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { SessionProvider, useSession } from "next-auth/react";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" href="/">
                        <img
                            src="/logo.png"
                            alt="logo"
                            width={200}
                            height={60}
                        />
                    </Link>

                    {/* Toggler for mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarRightContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-3">
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex align-items-center"
                                    href="/"
                                >
                                    <FiHome className="me-1" /> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Right-side buttons */}
                        <div className="d-flex gap-3 ms-3">
                            <Link href="/login" className="btn btn-login">
                                Login
                            </Link>
                            <Link href="/signup" className="btn btn-signup">
                                SignUp
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

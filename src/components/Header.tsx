"use client";

import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { RiAccountCircle2Line } from "react-icons/ri";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Header() {
    const { data: session } = useSession();

    const pathname = usePathname();
    if(pathname.startsWith('/patient' ) || pathname.startsWith('/admin')) return null;

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img src="/logo.png" alt="logo" height={50} />
                    </Link>

                    {/* Mobile toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarSupportedContent"
                    >
                        {/* CENTER NAV LINKS */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-3 fs-5">
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex justify-content-center align-items-center gap-2"
                                    href="/"
                                >
                                    <FiHome className="" /> Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>

            
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                            {session ? (
                                <>
                                    <Link href="/dashboard"
                                        className="px-2 py-1 d-flex justify-content-center align-items-center gap-2"
                                        style={{
                                            border: "1px solid #d6cece",
                                            borderRadius: 20,
                                            backgroundColor:"#eaeaea"
                                        }}
                                    >
                                        <RiAccountCircle2Line className="fs-2" />
                                        <div className="vr"></div> {session.user.name}
                                    </Link>

                                    <button
                                        onClick={() => signOut({ callbackUrl: "/login"})}
                                        className="btn btn-danger"
                                        style={{ borderRadius: 20 }}
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="btn btn-login"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/signup"
                                        className="btn btn-signup"
                                    >
                                        SignUp
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

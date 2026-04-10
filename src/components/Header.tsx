"use client";

import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { RiAccountCircle2Line } from "react-icons/ri";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { LuLogOut } from "react-icons/lu";
import { PiUserListLight } from "react-icons/pi";

export default function Header() {
    const { data: session } = useSession();

    const pathname = usePathname();
    if (pathname.startsWith("/patient") || pathname.startsWith("/admin"))
        return null;

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
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarSupportedContent"
                    >
                        {/* CENTER NAV LINKS */}
                        <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row gap-3 fs-5 text-start text-lg-center">
                            {" "}
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex align-items-center gap-2"
                                    href="/"
                                >
                                    <FiHome /> Home
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
                                    <Link
                                        href="/dashboard"
                                        className="px-3 py-1 d-flex justify-content-center align-items-center gap-2 border border-primary rounded-pill text-muted"
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        <PiUserListLight />
                                        <div className="vr"></div>{" "}
                                        {session.user.name}
                                    </Link>

                                    <button
                                        onClick={() =>
                                            signOut({ callbackUrl: "/login" })
                                        }
                                        className="btn btn-danger py-1 px-3 d-flex align-items-center gap-2 rounded-pill"
                                    >
                                        Logout
                                        <LuLogOut />
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

"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";

import { PiUserListLight } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";


export default function PatientDashboard() {
    const { data: session, status } = useSession();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    async function fetchUser(id: string) {
        const response = await fetch(`/api/user/${id}`);
        if (!response.ok) {
            return;
        }
        const data = await response.json();
        if (!data) {
            return;
        }
        setName(data.name);
        setAge(data.age);
        setContact(data.contact);
        setEmail(data.email);
    }

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
        if (session?.user?.id) {
            fetchUser(session.user.id);
        }
    }, [session]);

    return (
        <div className="container p-0">
            <div
                className="px-4 py-2 mb-4 mt-2 d-flex justify-content-between align-items-center"
                style={{ borderBottom: "1px solid #d6cece" }}
            >
                <h2>Dashboard</h2>
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <Link
                        href="/"
                        className="px-3 py-1 d-flex justify-content-center align-items-center gap-2 border border-success rounded-pill text-muted"
                    >
                        <FiHome />
                        Home
                    </Link>
                    <div className="px-3 py-1 d-flex justify-content-center align-items-center gap-2 border border-primary rounded-pill text-muted">
                        <PiUserListLight />
                        <div className="vr bg-primary"></div> {name}
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="btn btn-danger py-1 px-3 d-flex align-items-center gap-2"
                        style={{ borderRadius: 20 }}
                    >
                        Logout
                        <LuLogOut />
                    </button>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div
                    className="card border border-muted border-2 shadow-sm p-4"
                    style={{
                        borderRadius: "20px",
                        width: "100%",
                        maxWidth: "700px",
                    }}
                >
                    <div className="text-center mb-4">
                        <img
                            src="/male.png"
                            alt="profile"
                            className="rounded-circle mb-3"
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: "cover",
                                border: "4px solid #f1f1f1",
                            }}
                        />
                        <h4 className="fw-bold mb-0">{name}</h4>
                        <small className="text-muted">Patient</small>
                    </div>
                    <div className="row text-center">
                        <div className="col-6 mb-3">
                            <div className="bg-light p-2 rounded-4 border border-muted">
                                <small className="text-muted d-block">
                                    Age
                                </small>
                                <p className="fs-5">{age}</p>
                            </div>
                        </div>
                        <div className="col-6 mb-3">
                            <div className="bg-light p-2 rounded-4 border border-muted">
                                <small className="text-muted d-block">
                                    Contact
                                </small>
                                <p className="fs-5">{contact}</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bg-light p-2 rounded-4 border border-muted">
                                <small className="text-muted d-block">
                                    Email
                                </small>
                                <p className="fs-5">{email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 gap-2 flex-wrap">
                        <Link
                            href="/patient/settings"
                            className="d-flex align-items-center justify-content-center gap-2 btn btn-outline-primary rounded-pill px-3 flex-fill"
                        >
                            <CiEdit />
                            Edit Profile
                        </Link>

                        <Link
                            href="/patient/book-test"
                            className="d-flex align-items-center justify-content-center gap-2 btn btn-primary rounded-pill px-3 flex-fill"
                        >
                            <CiBookmarkPlus />
                            Book Test
                        </Link>

                        <Link
                            href="/patient/reports"
                            className="d-flex align-items-center justify-content-center gap-2 btn btn-outline-dark rounded-pill px-3 flex-fill"
                        >
                            <HiOutlineDocumentReport />
                            Reports
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

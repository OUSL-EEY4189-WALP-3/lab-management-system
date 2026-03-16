"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { RiAccountCircle2Line } from "react-icons/ri";
import { useEffect, useState } from "react";

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
                        className="px-2 py-1 d-flex justify-content-center align-items-center gap-2"
                        style={{
                            border: "1px solid #d6cece",
                            borderRadius: 20,
                        }}
                    >
                        Home
                    </Link>
                    <div
                        className="px-2 py-1 d-flex justify-content-center align-items-center gap-2"
                        style={{
                            border: "1px solid #d6cece",
                            borderRadius: 20,
                        }}
                    >
                        <RiAccountCircle2Line className="fs-2" />{" "}
                        <div className="vr"></div> {name}
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="btn btn-danger py-2 px-4"
                        style={{ borderRadius: 20 }}
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div
                className="d-flex justify-content-center align-items-center"
                style={{ marginTop: 100 }}
            >
                <div className="card">
                    <div className="card-header text-center">
                        Patient Profile
                    </div>
                    <div className="card-body">
                        <div className="d-flex gap-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Name</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    disabled
                                ></input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Age</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={age}
                                    disabled
                                ></input>
                            </div>
                        </div>
                        <div className="d-flex gap-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    Contact
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={contact}
                                    disabled
                                ></input>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Email</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={email}
                                    disabled
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <Link href={"/patient/settings"}>Edit Profile</Link>
                        <div className="vr"></div>
                        <Link href={"/patient/book-test"}>Book Test</Link>
                        <div className="vr"></div>
                        <Link href={"/patient/reports"}>View Reports</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

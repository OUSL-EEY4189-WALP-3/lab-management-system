"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { RiAccountCircle2Line } from "react-icons/ri";
import { LuBadgeCheck } from "react-icons/lu";
import { LuFileClock } from "react-icons/lu";
import { VscSync } from "react-icons/vsc";
import { LiaUserCircle } from "react-icons/lia";
import { PiUserListLight } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";

import Link from "next/link";

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const [result, setResult] = useState<any>(null);
    const [name, setName] = useState("");
    const router = useRouter();

    async function fetchResults() {
        const response = await fetch("/api/dashboard");
        const data = await response.json();
        setResult(data);
    }

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
    }

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
        if (session?.user?.id) {
            fetchUser(session.user.id);
        }
    }, [session]);

    useEffect(() => {
        fetchResults();
    }, []);

    const total =
        result?.pendingCount + result?.ongoingCount + result?.completedCount;
    const percentage = (result?.completedCount / total) * 100;

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
                    <div
                        className="px-3 py-1 d-flex justify-content-center align-items-center gap-2 border border-primary rounded-pill text-muted"
                    >
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

            <div className="mx-4 my-8">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div
                            className="card border-0 shadow-sm  border-admin-green"
                            style={{ backgroundColor: "#10B981" }}
                        >
                            <div className="card-body d-flex justify-content-between">
                                <div>
                                    <h3 className="fw-bold text-white mb-0 fs-1">
                                        {result?.completedCount}
                                    </h3>
                                    <small className="text-white fs-5">
                                        Completed 
                                    </small>
                                </div>
                                <LuBadgeCheck size={70} color="white" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{ backgroundColor: "#F59E0B" }}
                        >
                            <div className="card-body d-flex justify-content-between">
                                <div>
                                    <h3 className="fw-bold text-white mb-0 fs-1 ">
                                        {result?.pendingCount}
                                    </h3>
                                    <small className="text-white fs-5">
                                        Pending
                                    </small>
                                </div>

                                <LuFileClock size={70} color="white" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{ backgroundColor: "#3B82F6" }}
                        >
                            <div className="card-body d-flex justify-content-between">
                                <div>
                                    <h3 className="fw-bold text-white mb-0 fs-1">
                                        {result?.ongoingCount}
                                    </h3>
                                    <small className="text-white fs-5">
                                        Ongoing
                                    </small>
                                </div>
                                <VscSync size={70} color="white"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-4 my-4">
                <div className="card" style={{ backgroundColor: "#ffffff" }}>
                    <div className="card-body px-4">
                        <h5 className="card-title">Progress</h5>
                        <div
                            className="progress my-4"
                            area-valuenow={percentage || ""}
                            area-valuemin="0"
                            area-valuemax="100"
                        >
                            <div
                                className="progress-bar bg-success "
                                style={{ width: `${percentage}%` }}
                            >
                                {Math.round(percentage)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

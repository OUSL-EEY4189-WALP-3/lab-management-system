"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { RiAccountCircle2Line } from "react-icons/ri";

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

            <div className="mx-4 my-8">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card border-0 shadow-sm h-200 border-start border-4 border-admin-green">
                            <div className="card-body">
                                <small className="text-muted">
                                    Completed tests
                                </small>
                                <h3 className="fw-bold text-admin-green mb-0">
                                    {result?.completedCount}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <small className="text-muted">
                                    Pending Tests
                                </small>
                                <h3 className="fw-bold text-warning mb-0">
                                    {result?.pendingCount}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <small className="text-muted">
                                    Ongoing Tests
                                </small>
                                <h3 className="fw-bold text-info mb-0">
                                    {result?.ongoingCount}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-4 my-4">
                <div className="card" style={{ backgroundColor: "#fafafa" }}>
                    <div className="card-body px-4">
                        <h5 className="card-title">Progress</h5>
                        <div
                            className="progress my-4"
                            area-valuenow={percentage}
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

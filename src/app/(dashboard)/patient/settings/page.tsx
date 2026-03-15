"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PatientSettings() {
    const { data: session, status } = useSession();
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    async function handleEditUser(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();

        if (password != confirmPass) {
            setError("Pasword does not match");
            return;
        }

        if (!name || !age || !contact || !email) {
            setError("All fields required");
            return;
        }

        try {
            const actualUserId = session?.user?.id;
            const response = await fetch(`/api/user/${actualUserId}`, {
                method: "PUT",
                body: JSON.stringify({
                    name,
                    age,
                    contact,
                    email,
                    password,
                }),
            });
            if (response.ok) {
                setError("Profile updated");
            }
        } catch (error) {
            console.log("Error while update user: ", error);
        }
    }

    async function fetchUser(id: string) {
        const response = await fetch(`/api/user/${id}`);
        if (!response.ok) {
            setError("Server error");
            return;
        }
        const data = await response.json();
        if (!data) {
            setError("User no found");
            return;
        }
        setName(data.name);
        setAge(data.age);
        setContact(data.contact);
        setEmail(data.email);
    }

    useEffect(() => {
        if (session?.user?.id) {
            fetchUser(session.user.id);
        }
    }, [session, error]);

    return (
        <div className="container p-0">
             <div className="px-4 py-2 mb-4 mt-2" style={{borderBottom: "1px solid #d6cece"}}>
                <h2>Bookings</h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className="card" style={{width: 500}}>
                    <div className="card-header text-center">Update Profile</div>
                    <div className="card-body">
                        <form onSubmit={handleEditUser}>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="number"
                                    className="form-control mb-3"
                                    id="age"
                                    placeholder="Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                ></input>
                                <label htmlFor="age" className="form-label">
                                    Age
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="contact"
                                    placeholder="Contact"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                ></input>
                                <label htmlFor="contact" className="form-label">
                                    Contact
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                ></input>
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    New password
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    id="confirmPassword"
                                    placeholder="Confirm password"
                                    value={confirmPass}
                                    onChange={(e) =>
                                        setConfirmPass(e.target.value)
                                    }
                                ></input>
                                <label
                                    htmlFor="ConfirmPassword"
                                    className="form-label"
                                >
                                    Confirm password
                                </label>
                            </div>
                            <label className="mt-3">{error}</label>
                            <hr></hr>
                            <div className="d-flex gap-2 mt-3 justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

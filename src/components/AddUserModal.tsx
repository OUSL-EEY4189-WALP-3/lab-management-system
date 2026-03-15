"use client";

import { useState } from "react";

type Props = {
    show: boolean;
    onClose: () => void;
};

export default function AddUserModal({ show, onClose }: Props) {
    if (!show) return null;

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    async function handleAddUser(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();

        try {
            if (!name || !age || !contact || !email || !password || !role) {
                setError("All fields required");
                return;
            }

            const response = await fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    age,
                    contact,
                    email,
                    password,
                    role,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                onClose();
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.log("Error during add test: ", error);
        }
    }

    return (
        <div className="container">
            <div className="modal fade show d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New User</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleAddUser}>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="name"
                                        placeholder="Name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    ></input>
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="number"
                                        className="form-control mb-3"
                                        id="age"
                                        placeholder="Age"
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
                                        onChange={(e) =>
                                            setContact(e.target.value)
                                        }
                                    ></input>
                                    <label
                                        htmlFor="contact"
                                        className="form-label"
                                    >
                                        Contact
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control mb-3"
                                        id="email"
                                        placeholder="Email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    ></input>
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control mb-3"
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    ></input>
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <select
                                        className="form-select mb-3"
                                        id="role"
                                        value={role}
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                    >
                                        <option disabled value="">
                                            Select role...
                                        </option>
                                        <option value="patient">Patient</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <label
                                        htmlFor="specimenType"
                                        className="form-label"
                                    >
                                        Role
                                    </label>
                                </div>
                                <label className="mt-3">{error}</label>
                                <hr></hr>
                                <div className="d-flex gap-2 mt-3 justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Add User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

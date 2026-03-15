"use client";

import { useEffect, useState } from "react";

type Props = {
    show: boolean;
    onClose: () => void;
    id: string;
};

export default function EditUserModal({ show, onClose, id }: Props) {
    if (!show) return null;

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    async function handleEditUser(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();

        if (!name || !age || !contact || !email || !role) {
            setError("All fields required");
            return;
        }

        try {
            const response = await fetch(`/api/user/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    name,
                    age,
                    contact,
                    email,
                    password,
                    role,
                }),
            });
            if (response.ok) {
                onClose();
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
        setPassword("");
        setRole(data.role);
    }

    useEffect(() => {
        if (show && id) {
            fetchUser(id);
        }
    }, [id]);

    return (
        <div className="container">
            <div className="modal fade show d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit User</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleEditUser}>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="name"
                                        placeholder="Name"
                                        value={name}
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
                                        value={email}
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
                                '
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
                                        Update User
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

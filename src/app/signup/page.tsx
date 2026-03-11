"use client";
import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    function handleReset() {
        setName("");
        setAge("");
        setContact("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
        setError("");
    }

    async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!name || !age || !contact || !email || !password || !confirmPass) {
            setError("All fields required");
            return;
        }

        if (password != confirmPass) {
            setError("Password and confirm password mismatch.");
            return;
        }
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({ name, age, contact, email, password }),
            });
            
            const data = await response.json();

            if (response.ok) {
                handleReset();
            } 
            else {
                setError(data.message);
                console.log(data.message);
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div
                className="card shadow p-4"
                style={{ width: "100%", maxWidth: "500px" }}
            >
                <h2 className="text-center mb-4">Sign Up</h2>

                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            className="form-control"
                            placeholder="Enter your name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={age}
                            className="form-control"
                            placeholder="Enter age"
                            required
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={contact}
                            className="form-control"
                            placeholder="07X XXX XXXX"
                            required
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            className="form-control"
                            placeholder="Enter email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            className="form-control"
                            placeholder="Enter password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPass}
                            className="form-control"
                            placeholder="Re-enter password"
                            required
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                    </div>
                    <p>{error}</p>

                    <button type="submit" className="btn btn-success w-100">
                        Create Account
                    </button>

                    <p className="text-center mt-3 mb-0">
                        Already have an account?{" "}
                        <a href="/login" className="text-decoration-none">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

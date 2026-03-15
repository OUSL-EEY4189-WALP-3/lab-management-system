"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookTest() {
    const { data: session, status } = useSession();

    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [testId, setTestId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [note, setNote] = useState("");
    const [tests, setTests] = useState<any[]>([]);
    const [error, setError] = useState("");

    if (session && !userId && !userName) {
        setUserId(session.user.userId);
        setUserName(session.user.name);
    }

    async function handleBook(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();
        if (!testId || !date || !time) {
            setError("Fill all the required fields");
            return;
        }
        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                body: JSON.stringify({
                    userId,
                    userName,
                    testId,
                    date,
                    time,
                    note,
                }),
            });
            if (response.ok) {
                setTestId("");
                setDate("");
                setTime("");
                setNote("");
                setError("Booked the test. Check report section.");
            }
        } catch (error) {
            console.log("Error while booking: ", error);
            setError("Server error");
            return;
        }
    }

    async function fetchTest() {
        try {
            const response = await fetch("/api/test");
            const data = await response.json();
            setTests(data);
        } catch (error) {
            console.log("Error fetching tests: ", error);
        }
    }

    function handleReset() {
        setTestId("");
        setDate("");
        setTime("");
        setNote("");
    }

    useEffect(() => {
        fetchTest();
    }, []);

    return (
        <div className="container p-0">
            <div
                className="px-4 py-2 mb-4 mt-2"
                style={{ borderBottom: "1px solid #d6cece" }}
            >
                <h2>Bookings</h2>
            </div>
            <div className="d-flex mx-4  justify-content-evenly" style={{paddingTop: 60}}>
                <div className="card" style={{ width: 500 }}>
                    <div className="card-header text-center">Book Test</div>
                    <div className="card-body">
                        <form onSubmit={handleBook}>
                            <div className="form-floating">
                                <select
                                    className="form-select mb-3"
                                    id="testType"
                                    value={testId}
                                    onChange={(e) => setTestId(e.target.value)}
                                >
                                    <option disabled value="">
                                        Select test...
                                    </option>
                                    {tests.map((test) => (
                                        <option
                                            key={test.testId}
                                            value={test.testId}
                                        >
                                            {test.testName}
                                        </option>
                                    ))}
                                </select>
                                <label
                                    htmlFor="testType"
                                    className="form-label"
                                >
                                    Test Type
                                </label>
                            </div>

                            <div className="form-floating">
                                <input
                                    type="date"
                                    className="form-control mb-3"
                                    id="date"
                                    placeholder="Appointment date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                ></input>
                                <label htmlFor="date" className="form-label">
                                    Appintment Date
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="time"
                                    className="form-control mb-3"
                                    id="time"
                                    placeholder="Appointment time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                ></input>
                                <label htmlFor="time" className="form-label">
                                    Appintment Time
                                </label>
                            </div>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    id="note"
                                    placeholder="Additional note"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                ></textarea>
                                <label htmlFor="note" className="form-label">
                                    Additional note (optional)
                                </label>
                            </div>
                            <label className="mt-3">{error}</label>
                            <div className="d-flex gap-2 mt-3 justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card" style={{ width: 400 }}>
                    <div
                        className="card-header text-center"
                        style={{ backgroundColor: "#fff3b0" }}
                    >
                        Instructions
                    </div>
                    <div
                        className="card-body px-4"
                        style={{ backgroundColor: "#fff9db" }}
                    >
                        <ol>
                            <li>Select the test type</li>
                            <hr></hr>
                            <li>Select the desired date</li>
                            <hr></hr>
                            <li>Select the time</li>
                            <hr></hr>
                            <li>Add a note (optional)</li>
                            <hr></hr>
                            <li>Click the "Book Now" button</li>
                            <hr></hr>
                            <li>
                                Go to the Reports section to track progress and
                                download your report
                            </li>
                        </ol>
                    </div>
                    <div className="card-footer text-center">
                        <Link href={"/patient/reports"}>View Reports</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

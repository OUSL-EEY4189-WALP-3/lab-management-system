"use client";

import { useEffect, useState } from "react";

type Props = {
    show: boolean;
    onClose: () => void;
    id: string;
};

export default function UpdateBooking({ show, onClose, id }: Props) {
    if (!show) return null;
    const [bookingId, setBookingId] = useState("");
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [testId, setTestId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [note, setNote] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const [tests, setTests] = useState<any[]>([]);

    async function handleUpdate(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`/api/booking/${id}`, {
                method: "PUT",
                body: JSON.stringify({ status }),
            });

            if (!response) {
                setError("Server error");
                return;
            }
            if (response) {
                onClose();
            }
        } catch (error) {
            setError("Error while updating status");
        }
    }

    async function fetchBooking(id: string) {
        try {
            const response = await fetch(`/api/booking/${id}`);
            if (!response) {
                setError("Server error");
                return;
            }
            const data = await response.json();
            if (!data) {
                setError("No booking found");
                return;
            }
            setBookingId(data.bookingId);
            setUserId(data.userId);
            setUserName(data.userName);
            setTestId(data.testId);
            setDate(data.date);
            setTime(data.time);
            setNote(data.note);
            setStatus(data.status);
        } catch (error) {
            console.log("Error while fetching Booking: ", error);
        }
    }

    async function fetchTest() {
        try {
            const response = await fetch("/api/test");
            const data = await response.json();
            setTests(data);
        } catch (error) {
            console.log("Error while fetching test", error);
        }
    }

    useEffect(() => {
        if (show && id) {
            fetchBooking(id);
            fetchTest();
        }
    }, [show, id]);

    return (
        <div className="container">
            <div className="modal fade show d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Booking {bookingId}</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        {userId}
                                    </span>

                                    <div className="form-floating">
                                        <input
                                            disabled
                                            type="text"
                                            className="form-control"
                                            id="patientName"
                                            placeholder="Patient Name"
                                            value={userName}
                                        />

                                        <label htmlFor="patientName">
                                            Patient Name
                                        </label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        {testId}
                                    </span>

                                    <div className="form-floating">
                                        <input
                                            disabled
                                            type="text"
                                            className="form-control"
                                            id="testName"
                                            placeholder="Test Name"
                                            value={
                                                tests.find(
                                                    (test) =>
                                                        test.testId === testId,
                                                )?.testName || testId
                                            }
                                        />
                                        <label htmlFor="testName">
                                            Test Name
                                        </label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="form-floating">
                                        <input
                                            disabled
                                            type="text"
                                            className="form-control"
                                            id="date"
                                            placeholder="Date"
                                            value={date}
                                        />
                                        <label htmlFor="date">Date</label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            disabled
                                            type="text"
                                            className="form-control"
                                            id="time"
                                            placeholder="Time"
                                            value={time}
                                        />
                                        <label htmlFor="time">Time</label>
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <textarea
                                        disabled
                                        className="form-control mb-3"
                                        id="note"
                                        placeholder="Note"
                                        value={note}
                                    />

                                    <label htmlFor="note">Note</label>
                                </div>
                                <div className="form-floating">
                                    <select
                                        className="form-select mb-3"
                                        id="status"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="ongoing">Ongoing</option>
                                        <option value="completed">
                                            Completed
                                        </option>
                                        <option value="cancelled">
                                            Cancel
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="status"
                                        className="form-label"
                                    >
                                        Status
                                    </label>
                                </div>

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
                                        Update Booking
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

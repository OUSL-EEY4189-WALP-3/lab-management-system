"use client";

import { useEffect, useState } from "react";
import { UpdateBooking } from "@/components";

import { BiSolidEdit } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { CiBookmarkCheck } from "react-icons/ci";

export default function Booking() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [tests, setTests] = useState<any[]>([]);
    const [selectedId, setSelectedId] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    async function fetchBookings() {
        try {
            const response = await fetch("/api/booking");
            const data = await response.json();
            setBookings(data);
        } catch (error) {
            console.log("Error while fetching: ", error);
        }
    }

    async function fetchTests() {
        try {
            const response = await fetch("/api/test");
            const data = await response.json();
            setTests(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpload(id: string) {
        if (!file) return;

        const formData = new FormData();
        formData.append("report", file);
        formData.append("bookingId", id);

        await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });
        alert("Report Uploaded");
    }

    useEffect(() => {
        fetchBookings();
        fetchTests();
    }, [showUpdateModal]);

    return (
        <div className="container p-0">
            <div className="px-4 py-2 mb-4 mt-2" style={{borderBottom: "1px solid #d6cece"}}>
                <h2>Bookings</h2>
            </div>
            <div className="card m-4">
                <div className="card-header">
                    <CiBookmarkCheck className="m-2" />
                    Booking Details
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-radius">
                        <thead className="text-center" style={{fontSize: "14px"}}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Test</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {bookings.map((booking) => (
                                <tr key={booking._id} style={{fontSize: "16px"}}>
                                    <td>{booking.bookingId}</td>
                                    <td>{booking.userName}</td>
                                    <td>
                                        {
                                            tests.find(
                                                (test) =>
                                                    test.testId ===
                                                    booking.testId,
                                            )?.testName
                                        }
                                    </td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>{booking.status}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                setShowUpdateModal(true);
                                                setSelectedId(booking._id);
                                            }}
                                            id={booking._id}
                                            className="btn btn-primary d-flex align-items-center py-1 px-3 gap-2"
                                        >
                                            <BiSolidEdit />
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <div className="input-group">

                                            <input
                                            className="form-control"
                                                type="file"
                                                accept="application/pdf"
                                                onChange={(e) =>
                                                    setFile(
                                                        e.target.files?.[0] ||
                                                            null,
                                                    )
                                                }
                                            ></input>
                                            <button
                                                onClick={() => {
                                                    setSelectedId(booking._id);
                                                    handleUpload(booking._id);
                                                }}
                                                className="btn btn-secondary d-flex align-items-center py-1 px-3 gap-2"
                                            >
                                                <FiUpload />
                                                Upload
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <UpdateBooking
                show={showUpdateModal}
                onClose={() => setShowUpdateModal(false)}
                id={selectedId}
            />
        </div>
    );
}

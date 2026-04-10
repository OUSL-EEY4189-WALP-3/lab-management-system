"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { FiDownload } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";

export default function Reports() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [tests, setTests] = useState<any[]>([]);

    async function fetchBookings() {
        const response = await fetch("/api/booking/user");
        const data = await response.json();
        setBookings(data);
    }

    async function fetchTests() {
        const response = await fetch("/api/test/");
        const data = await response.json();
        setTests(data);
    }

    useEffect(() => {
        fetchBookings();
        fetchTests();
    }, []);

    return (
        <div className="container p-0">
            <div
                className="px-4 py-2 mb-4 mt-2"
                style={{ borderBottom: "1px solid #d6cece" }}
            >
                <h2>Reports</h2>
            </div>
            <div className="card m-4">
                <div className="card-header d-flex align-items-center gap-2">
                    <IoDocumentOutline /> Report details
                </div>
                <div className="card-body">
                    <table className="table border-secondary table-radius table-hover">
                        <thead className="text-center" style={{fontSize: "14px"}}>
                            <tr>
                                <th>ID</th>
                                <th>Test</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th> 
                                <th>Action</th> 
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {bookings.map((booking) => (
                                <tr key={booking._id} style={{fontSize: "16px"}}>
                                    <td>{booking.bookingId}</td>
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
                                        {booking.reportUrl ? (
                                            <Link
                                                href={booking.reportUrl}
                                                target="_blank"
                                                className="btn btn-success d-flex justify-content-center align-items-center gap-2 py-1 px-2 rounded-pill"
                                            >
                                                <FiDownload />
                                                Download
                                            </Link>
                                        ) : (
                                            <span className="text-muted">
                                                Not Available
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

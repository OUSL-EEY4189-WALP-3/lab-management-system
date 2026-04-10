"use client";

import { useEffect, useState } from "react";
import { UpdateBooking } from "@/components";

import { BiSolidEdit } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { RxFileText } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { PiClockCountdownBold } from "react-icons/pi";
import { RiAttachment2 } from "react-icons/ri";

export default function Booking() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [tests, setTests] = useState<any[]>([]);
    const [selectedId, setSelectedId] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [activeId, setActiveId] = useState(0);
    const [fileId, setFileId] = useState("");

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
            <div
                className="px-4 py-2 mb-4 mt-2"
                style={{ borderBottom: "1px solid #d6cece" }}
            >
                <h2>Bookings</h2>
            </div>
            <div className="card m-4">
                <div className="card-header">
                    <CiBookmarkCheck className="m-2" />
                    Booking Details
                </div>
                <div className="card-body">
                    <table className="table border-secondary table-radius table-hover">
                        <thead
                            className="text-center"
                            style={{ fontSize: "14px" }}
                        >
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Test</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>View / Update</th>
                                <th>Upload / Edit</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {bookings.map((booking, index) => (
                                <tr key={index} style={{ fontSize: "16px" }}>
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
                                    <td>
                                        <p
                                            className={`d-flex align-items-center justify-content-center gap-2 border border-secondary rounded-4  py-1`}
                                        >
                                            {booking.status == "completed" ? (
                                                <FaCircleCheck
                                                    color="green"
                                                    size={16}
                                                />
                                            ) : (
                                                <PiClockCountdownBold
                                                    color="orange"
                                                    size={16}
                                                />
                                            )}
                                            {booking.status}
                                        </p>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                setShowUpdateModal(true);
                                                setSelectedId(booking._id);
                                            }}
                                            id={booking._id}
                                            className="btn d-flex align-items-center py-1 px-3 gap-2 border border-success rounded-pill"
                                            style={{
                                                color: "#248342",
                                                width: "fit-content",
                                            }}
                                        >
                                            <CiEdit size={20} color="green" />
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        {booking.reportUrl &&
                                        booking._id != activeId ? (
                                            <div className="d-flex justify-content-center align-items-center gap-3 ">
                                                <div className="d-flex justify-content-center align-items-center gap-3 border border-success rounded-pill px-4 py-1">
                                                    <FaCircleCheck color="green" />
                                                    Report Uploaded
                                                </div>
                                                <button
                                                    className="border-0 bg-transparent"
                                                    onClick={() =>
                                                        setActiveId(booking._id)
                                                    }
                                                >
                                                    <CiEdit size={24} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="d-flex gap-2 align-items-center justify-content-center">
                                                <label
                                                    htmlFor="file"
                                                    className="d-flex align-items-center gap-2 border px-3 py-1 rounded-pill border-secondary"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    {file &&
                                                    booking._id == fileId ? (
                                                        <div className="d-flex align-items-center gap-2">
                                                            <FaCheck color="green" />
                                                            Selected
                                                        </div>
                                                    ) : (
                                                        <div className="d-flex align-items-center gap-2">
                                                            <RiAttachment2
                                                                size={20}
                                                            />
                                                            Choose
                                                        </div>
                                                    )}
                                                </label>
                                                <input
                                                    className=""
                                                    style={{ display: "none" }}
                                                    id="file"
                                                    type="file"
                                                    accept="application/pdf"
                                                    onChange={(e) => {
                                                        setFile(
                                                            e.target
                                                                .files?.[0] ||
                                                                null,
                                                        );
                                                        setFileId(booking._id);
                                                    }}
                                                ></input>
                                                <button
                                                    onClick={() => {
                                                        setSelectedId(
                                                            booking._id,
                                                        );
                                                        handleUpload(
                                                            booking._id,
                                                        );
                                                    }}
                                                    className="btn btn-secondary d-flex align-items-center py-1 px-3 gap-2 rounded-pill"
                                                >
                                                    <FiUpload />
                                                    Upload
                                                </button>
                                            </div>
                                        )}
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

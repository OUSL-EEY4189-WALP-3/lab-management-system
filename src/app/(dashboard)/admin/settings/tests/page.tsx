"use client";

import { AddTestModal } from "@/components";
import { EditTestModal } from "@/components";
import { useState, useEffect } from "react";

import { FaPlus } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import { GrTest } from "react-icons/gr";

export default function TestManagement() {
    const [showAddModel, setAddShowModel] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [tests, setTests] = useState<any[]>([]);
    const [selectedId, setSelectedId] = useState("");

    async function fetchData() {
        const response = await fetch("/api/test");
        const data = await response.json();
        setTests(data);
    }

    useEffect(() => {
        fetchData();
    }, [showAddModel, showEditModal]);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 align-items-center">
                        <GrTest />
                        Test Managment
                    </div>

                    <button
                        onClick={() => setAddShowModel(true)}
                        className="btn btn-primary d-flex gap-2 align-items-center"
                    >
                        <FaPlus className="mr-3" />
                        Add New Test
                    </button>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-radius">
                        <thead
                            className="text-center"
                            style={{ fontSize: "14px" }}
                        >
                            <tr>
                                <th>Test ID</th>
                                <th>Test Name</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {tests.map((test) => (
                                <tr key={test._id} style={{ fontSize: "16px" }}>
                                    <td>{test.testId}</td>
                                    <td>{test.testName}</td>
                                    <td>{test.specimenType}</td>
                                    <td>
                                        {test.status ? "Active" : "Inactive"}
                                    </td>
                                    <td>{test.price}</td>
                                    <td className="d-flex justify-content-center">
                                        <button
                                            onClick={() => {
                                                setShowEditModal(true);
                                                setSelectedId(test._id);
                                            }}
                                            id={test._id}
                                            className="btn btn-primary d-flex align-items-center py-1 px-3 gap-2"
                                        >
                                            <BiSolidEdit />
                                            Edit Test
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <AddTestModal
                show={showAddModel}
                onClose={() => setAddShowModel(false)}
            />

            <EditTestModal
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                id={selectedId}
            />
        </div>
    );
}

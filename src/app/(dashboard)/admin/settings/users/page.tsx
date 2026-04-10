"use client";

import { useEffect, useState } from "react";
import { AddUserModal, EditUserModal } from "@/components";

import { FaPlus } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

export default function UserManagement() {
    const [showAddUserModel, setShowAddUserModel] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [users, setUsers] = useState<any[]>([]);
    const [selectedId, setSelectedId] = useState("");

    async function fetchUsers() {
        const response = await fetch("/api/user");
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, [showAddUserModel, showEditUserModal]);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        {" "}
                        <CiUser />
                        User Managemt
                    </div>
                    <button
                        onClick={() => setShowAddUserModel(true)}
                        className="btn btn-primary d-flex gap-2 align-items-center"
                    >
                        <FaPlus className="mr-3" />
                        Add New User
                    </button>
                </div>
                <div className="card-body">
                    <table className="table border-secondary table-radius table-hover">
                        <thead
                            className="text-center"
                            style={{ fontSize: "14px" }}
                        >
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {users.map((user) => (
                                <tr key={user._id} style={{ fontSize: "16px" }}>
                                    <td>{user.userId}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.contact}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className="d-flex justify-content-center">
                                        <button
                                            onClick={() => {
                                                setShowEditUserModal(true);
                                                setSelectedId(user._id);
                                            }}
                                            id={user._id}
                                            className="btn d-flex align-items-center py-1 px-3 gap-2 border border-success rounded-pill"
                                        >
                                            <CiEdit />
                                            Edit User
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <AddUserModal
                show={showAddUserModel}
                onClose={() => setShowAddUserModel(false)}
            />

            <EditUserModal
                show={showEditUserModal}
                onClose={() => setShowEditUserModal(false)}
                id={selectedId}
            />
        </div>
    );
}

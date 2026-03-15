"use client";

import { useEffect, useState } from "react";

type Props = {
    show: boolean;
    onClose: () => void;
    id: string;
};

export default function EditTestModel({ show, onClose, id }: Props) {
    if (!show) return null;

    const [testName, setTestName] = useState("");
    const [specimenType, setSpecimenType] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState(true);
    const [error, setError] = useState("");

    async function handleEdit(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();

        if (!testName || !specimenType || !price) {
            setError("All fields required");
            return;
        }

        try {
            const response = await fetch(`/api/test/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    testName,
                    specimenType,
                    status,
                    price,
                }),
            });
            const data = await response.json();

            if (!response.ok) {
                console.log("Server not work");
                return;
            }
            if (response.ok) {
                onClose();
            }
        } catch(error) {
            console.log("Error while update test: ", error);
        }
    }

    async function fetchTest(id: string) {
        const response = await fetch(`/api/test/${id}`);
        if (!response.ok) {
            console.log("server error");
            return;
        }
        const data = await response.json();
        if (!data) {
            setError("Test not found");
            return;
        }
        setTestName(data.testName);
        setSpecimenType(data.specimenType);
        setPrice(data.price);
        setStatus(data.status);
    }

    useEffect(() => {
        if (show && id) {
            fetchTest(id);
        }
    }, [id]);

    return (
        <div className="container">
            <div className="modal fade show d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Test</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleEdit}>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="testName"
                                        placeholder="Test name"
                                        value={testName}
                                        onChange={(e) =>
                                            setTestName(e.target.value)
                                        }
                                    ></input>
                                    <label
                                        htmlFor="testName"
                                        className="form-label"
                                    >
                                        Test Name
                                    </label>
                                </div>

                                <div className="form-floating">
                                    <select
                                        className="form-select mb-3"
                                        id="specimenType"
                                        value={specimenType}
                                        onChange={(e) =>
                                            setSpecimenType(e.target.value)
                                        }
                                    >
                                        <option value="Blood">Blood</option>
                                        <option value="Urine">Urine</option>
                                        <option value="Stool">Stool</option>
                                        <option value="Saliva">Saliva</option>
                                        <option value="Tissue">Tissue</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label
                                        htmlFor="category"
                                        className="form-label"
                                    >
                                        Specimen Type
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            Rs:
                                        </span>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="price"
                                            placeholder="Price"
                                            value={price}
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-check form-switch mt-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={status}
                                        onChange={(e) =>
                                            setStatus(e.target.checked)
                                        }
                                        id="status"
                                    ></input>
                                    <label
                                        htmlFor="status"
                                        className="form-label"
                                    >
                                        Active
                                    </label>
                                </div>
                                <label className="mt-3 form-label">
                                    {error}
                                </label>
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
                                        Update Test
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

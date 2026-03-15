"use client";

import { useState } from "react";

type Props = {
    show: boolean;
    onClose: () => void;
};

export default function EditTestModel({ show, onClose }: Props) {
    if (!show) return null;

    const [testName, setTestName] = useState("");
    const [specimenType, setSpecimenType] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");

    async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!testName || !specimenType || !price) {
            setError("All fields required");
            return;
        }
        try {
            const response = await fetch("/api/test", {
                method: "POST",
                body: JSON.stringify({ testName, specimenType, price }),
            });
            const data = await response.json();

            if (response.ok) {
                onClose();
            } else {
                setError(data.message);
                console.log(data.message);
            }
        } catch (error) {
            console.log("Error during add test: ", error);
        }
    }
    return (
        <div className="container">
            <div className="modal fade show d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Test</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleAdd}>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="testName"
                                        placeholder="Test name"
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
                                        <option disabled value="">Select specimen...</option>
                                        <option value="Blood">Blood</option>
                                        <option value="Urine">Urine</option>
                                        <option value="Stool">Stool</option>
                                        <option value="Saliva">Saliva</option>
                                        <option value="Tissue">Tissue</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label
                                        htmlFor="specimenType"
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
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                        ></input>
                                    </div>
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
                                        Add Test
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

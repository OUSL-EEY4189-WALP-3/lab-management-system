export default function Booking() {
    return(
        <div>
            <div>
                <p>M.A. Wijesinghe</p>
                <button>Logout</button>
            </div>
            <h1>Bookings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Test type</th>
                        <th>Patient name</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Upload</th>     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Blood Suger</td>
                        <td>M.A. Wijesinghe</td>
                        <td>2026/01/20</td>
                        <td>
                            <select>
                                <option value="unpaid">Unpaid</option>
                                <option value="paid">Paid</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option value="pending">Pending</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="completed">Completed</option>
                            </select>
                        </td>
                        <td><button>Upload</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


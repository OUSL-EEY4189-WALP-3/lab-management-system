export default function Reports() {
    return(
        <div>
            <div>
                <p>M.A. Wijesinghe</p>
                <button>Logout</button>
            </div>
            <h1>Reports</h1>
            <table>
                <thead>
                    <tr>
                        <th>Test type</th>
                        <th>Date</th>
                        <th>Checked by</th>
                        <th>Download</th>     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Blood Suger</td>
                        <td>2026/01/20</td>
                        <td>Sirimath</td>
                        <td><button>Download</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
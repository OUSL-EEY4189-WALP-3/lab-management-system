export default function Users() {
    return(
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Blood type</th>
                        <th>Edit</th>     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001</td>
                        <td>M.A. Wijesinghe</td>
                        <td>0777123456</td>
                        <td>malith@gmail.com</td>
                        <td>A+</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>    
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
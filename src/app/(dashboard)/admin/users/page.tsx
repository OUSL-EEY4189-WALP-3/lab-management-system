export default function Users() {
  const users = [
    {
      id: 1001,
      name: "M.A. Wijesinghe",
      contact: "0777123456",
      email: "malith@gmail.com",
      bloodType: "A+",
    },
    {
      id: 1002,
      name: "John Doe",
      contact: "0777000111",
      email: "john@example.com",
      bloodType: "B+",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold">Users</h1>

      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr className="text-muted">
              <th>User ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Blood type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white rounded-pill shadow-sm mb-2 align-middle"
                style={{ transition: "all 0.2s", cursor: "pointer" }}
              >
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.contact}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.bloodType}</td>
                <td className="py-3 px-4 d-flex gap-2">
                  <button className="btn btn-primary btn-sm rounded-pill px-4 shadow-sm">
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm rounded-pill px-4 shadow-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default function Booking() {
  const bookings = [
    {
      testType: "Full Blood Count",
      patientName: "M.A. Wijesinghe",
      date: "2026/01/20",
      payment: "unpaid",
      status: "pending",
      image: "/test1.jpg",
    },
    {
      testType: "Urine Test",
      patientName: "John Doe",
      date: "2026/01/22",
      payment: "paid",
      status: "completed",
      image: "/test2.jpg",
    },
  ];

  const statusColor = (status:String) => {
    switch (status) {
      case "pending":
        return "bg-gradient-warning text-dark";
      case "ongoing":
        return "bg-gradient-info text-dark";
      case "completed":
        return "bg-gradient-success text-white";
      default:
        return "bg-secondary text-white";
    }
  };



  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="h5 mb-0">M.A. Wijesinghe</p>
        <button className="btn btn-danger">Logout</button>
      </div>

      <h1 className="mb-4">Bookings</h1>

      {/* Booking Cards */}
      <div className="row g-4">
        {bookings.map((booking, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={booking.image}
                className="card-img-top"
                alt={booking.testType}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{booking.testType}</h5>
                <p className="mb-1"><strong>Patient:</strong> {booking.patientName}</p>
                <p className="mb-3"><strong>Date:</strong> {booking.date}</p>

                <div className="mb-2">
                  <label className="form-label mb-1">Payment</label>
                  <select
                    className="form-select form-select-sm"
                    defaultValue={booking.payment}
                  >
                    <option value="unpaid">Unpaid</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label mb-1">Status</label>
                  <span
                    className={`badge ${statusColor(booking.status)} rounded-pill`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>

                <button className="btn btn-primary mt-auto">Upload</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

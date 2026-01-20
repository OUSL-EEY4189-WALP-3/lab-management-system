export default function BookTest() {
  const tests = [
    {
      id: 1,
      name: "Full Blood Count",
      image: "/test1.jpg", // place this in public/
      price: 500,
      startDate: "2026-09-15",
      endDate: "2026-09-17",
      duration: 2,
    },
    {
      id: 2,
      name: "Urine Test",
      image: "/test2.jpg",
      price: 300,
      startDate: "2026-09-18",
      endDate: "2026-09-19",
      duration: 1,
    },
  ];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="h5 mb-0">M.A. Wijesinghe</p>
        <button className="btn btn-danger rounded-pill px-4">Logout</button>
      </div>

      <h1 className="mb-4">Test Booking</h1>

      <div className="row g-4">
        {tests.map((test) => (
          <div key={test.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 rounded-4 shadow-sm overflow-hidden position-relative">
              {/* Price Badge */}
              <span className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-success text-white rounded-pill fw-bold">
                Rs {test.price}
              </span>

              {/* Test Image */}
              <img
                src={test.image}
                className="card-img-top"
                alt={test.name}
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{test.name}</h5>

                <p className="mb-1">
                  <strong>
                    {new Date(test.startDate).toLocaleDateString()} -{" "}
                    {new Date(test.endDate).toLocaleDateString()}
                  </strong>
                </p>
                <p className="mb-3">{test.duration} Day{test.duration > 1 ? "s" : ""}</p>

                <p className="fw-semibold">Total Payment Rs {test.price}</p>
                <button
                    type="submit"
                    style={{
                        borderRadius: "12px",
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                    >
                    Book now
                    </button>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
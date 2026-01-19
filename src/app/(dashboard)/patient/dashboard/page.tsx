export default function PatientDashboard() {
  return (
    <div className="h-100">

      {/* Top Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
        <h4 className="fw-bold mb-0 text-primary">Patient Dashboard</h4>
      <small className="text-muted"> Welcome back, M.A. Wijesinghe
      </small>
      </div>


        <button className="btn btn-outline-danger btn-sm">
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row align-items-center">

            {/* Avatar */}
            <div className="col-md-3 text-center mb-3 mb-md-0">
              <img
                src="/user2.jpg"  
                alt="profile-image"
                className="rounded-circle img-fluid"
                style={{
                  width: "130px",
                  height: "130px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Details */}
            <div className="col-md-9">
              <div className="row">

                <div className="col-md-6 mb-3">
                  <small className="text-muted">Full Name</small>
                  <p className="fw-semibold mb-0">M.A. Wijesinghe</p>
                </div>

                <div className="col-md-6 mb-3">
                  <small className="text-muted">Age</small>
                  <p className="fw-semibold mb-0">24</p>
                </div>

                <div className="col-md-6 mb-3">
                  <small className="text-muted">Gender</small>
                  <p className="fw-semibold mb-0">Male</p>
                </div>

                <div className="col-md-6 mb-3">
                  <small className="text-muted">Contact</small>
                  <p className="fw-semibold mb-0">077XXXXXXX</p>
                </div>

                <div className="col-md-6 mb-3">
                  <small className="text-muted">Email</small>
                  <p className="fw-semibold mb-0">example@email.com</p>
                </div>

                <div className="col-md-6 mb-3">
                  <small className="text-muted">Blood Type</small>
                  <p className="fw-semibold mb-0">O+</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

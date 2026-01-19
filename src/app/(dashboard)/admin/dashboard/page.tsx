export default function AdminDashboard() {
  return (
    <div className="h-100">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-0 text-admin-green">
            Admin Dashboard
          </h4>
          <small className="text-muted">
            System overview and test statistics
          </small>
        </div>
      </div>

      {/* Stats */}
      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100 border-start border-4 border-admin-green">
            <div className="card-body">
              <small className="text-muted">Total Tests</small>
              <h3 className="fw-bold text-admin-green mb-0">200</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Pending Tests</small>
              <h3 className="fw-bold text-warning mb-0">5</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Ongoing Tests</small>
              <h3 className="fw-bold text-info mb-0">3</h3>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

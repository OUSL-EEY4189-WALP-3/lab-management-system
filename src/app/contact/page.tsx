export default function Contact() {
  return (
    <section className="py-5">
      <div className="container d-flex justify-content-center">

        <div className="card shadow-lg border-0" style={{ maxWidth: "900px" }}>
          <div className="row g-0 align-items-center">

            <div className="col-md-5">
              <img
                src="/contact.jpg"
                className="img-fluid rounded-start h-100 object-fit-cover"
                alt="Allied Diagnostics Lab"
              />
            </div>

            <div className="col-md-7">
              <div className="card-body p-4">

                <h3 className="fw-bold mb-3">Allied Diagnostics</h3>
                <p className="text-muted mb-4">
                  Medical Laboratory Services – Deniyaya, Sri Lanka
                </p>

                <div className="mb-3">
                  <strong>Email</strong>
                  <p className="mb-0">info@allieddiagnostics.lk</p>
                </div>

                <div className="mb-3">
                  <strong>Phone</strong>
                  <p className="mb-0">+94 777 123 456</p>
                </div>

                <div className="mb-0">
                  <strong>Location</strong>
                  <p className="mb-0">Deniyaya, Sri Lanka</p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
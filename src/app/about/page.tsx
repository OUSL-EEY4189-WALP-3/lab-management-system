export default function About() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center gx-4">
                    <div className="col-md-5">
                        <div className="ms-md-2 ms-lg-5">
                            <img
                                className="img-fluid rounded-3"
                                src="/labtest.jpg"
                                alt="Allied Diagnostics Laboratory"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-1">
                        <div className="ms-md-2 ms-lg-5">
                            <span className="text-muted">Our Story</span>

                            <h2 className="display-5 fw-bold">
                                About Allied Diagnostics
                            </h2>

                            <p className="lead">
                                Allied Diagnostics is a trusted medical
                                laboratory located in Deniyaya, Sri Lanka. We
                                are dedicated to providing accurate, reliable,
                                and timely diagnostic testing services to
                                support patients and healthcare professionals.
                            </p>

                            <p className="lead">
                                Our laboratory uses modern diagnostic technology
                                and follows strict quality standards to ensure
                                dependable results. Our experienced Medical
                                Laboratory Technologists (MLTs) and healthcare
                                staff work together to deliver professional
                                service while prioritizing patient care and
                                confidentiality.
                            </p>

                            <p className="lead mb-0">
                                At Allied Diagnostics, our mission is to make
                                laboratory testing convenient and accessible for
                                the Deniyaya community while maintaining the
                                highest standards of medical accuracy and
                                service excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

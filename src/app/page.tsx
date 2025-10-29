'use client';

import ImageSlider from "@/components/ImageSlider";
import { TiDocumentText } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { GrTest } from "react-icons/gr";

export default function Home() {
  const tests = [
    { title: 'Full Blood Count Test', image: '/test1.jpg' },
    { title: 'Blood Sugar Test', image: '/test2.jpg' },
    { title: 'Urine Test', image: '/test3.jpg' }
  ];

  return (
    <main>
      {/* Slider Banner */}
      <ImageSlider />

      {/* Description Section */}
      <section className="description-section">
        <img src='/logo.png' alt="logo" width={200} />
        <p>
          At Allied Diagnostics, we are committed to delivering accurate, reliable 
          and timely diagnostic services to support better healthcare outcomes. 
          Equipped with modern technology and a team of qualified professionals, 
          our laboratory ensures the highest standards in testing and reporting.
        </p>
      </section>

      {/* Stats  */}
      <section className="stats-banner">
        <div className="stats-container">
          <div className="stat-item">
            <TiDocumentText size={36} className="stat-icon" />
            <h2>10000+</h2>
            <p>Reports</p>
          </div>
          <div className="stat-item">
            <IoPeople size={36} className="stat-icon" />
            <h2>1000+</h2>
            <p>Patients</p>
          </div>
          <div className="stat-item">
            <GrTest size={36} className="stat-icon" />
            <h2>20+</h2>
            <p>Tests</p>
          </div>
        </div>
      </section>

      {/* Most Picked Tests Section */}
      <section className="tests-section">
      <div className="cards-wrapper">
        <h3>Most Picked Tests</h3>
        <div className="row justify-content-center align-items-stretch">
          {/* Left side: Big card */}
          <div className="col-md-6 mb-3 d-flex justify-content-center">
            <div className="card big-card text-center">
              <img src="/test1.jpg" className="card-img-top" alt="Big Test" />
              <div className="card-body">
                <h3 className="card-title">Big Card</h3>
                <p className="card-text">
                  This is the big card content. You can add images, text, or anything here.
                </p>
              </div>
            </div>
          </div>

              {/* Right side: 4 small cards in 2x2 grid with images */}
              <div className="col-md-4">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="card small-card">
                      <img src="/test1.jpg" className="card-img-top" alt="Test 1" />
                      <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">Some quick example text.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card small-card">
                      <img src="/test2.jpg" className="card-img-top" alt="Test 2" />
                      <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">Some quick example text.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card small-card">
                      <img src="/test3.jpg" className="card-img-top" alt="Test 3" />
                      <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">Some quick example text.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card small-card">
                      <img src="/test4.jpg" className="card-img-top" alt="Test 4" />
                      <div className="card-body">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">Some quick example text.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </main>
  );
}

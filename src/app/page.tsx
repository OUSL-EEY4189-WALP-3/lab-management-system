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
                <h3 className="card-title">Full Blood Count</h3>
                <p className="card-text">
                  checks red and white blood cells, platelets, and hemoglobin to assess overall health.
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
                        <h5 className="card-title">COVID-19 PCR Test</h5>
                        <p className="card-text">Detects the presence of the coronavirus using a precise lab method.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card small-card">
                      <img src="/test2.jpg" className="card-img-top" alt="Test 2" />
                      <div className="card-body">
                        <h5 className="card-title">Liver Function Test</h5>
                        <p className="card-text">Measures liver enzymes and proteins to assess liver health.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card small-card">
                      <img src="/test3.jpg" className="card-img-top" alt="Test 3" />
                      <div className="card-body">
                        <h5 className="card-title">HIV Test</h5>
                        <p className="card-text">Screens for the HIV virus to ensure early detection and treatment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card small-card">
                      <img src="/test4.jpg" className="card-img-top" alt="Test 4" />
                      <div className="card-body">
                        <h5 className="card-title">Pregnancy Test</h5>
                        <p className="card-text">Detects the hormone hCG to confirm pregnancy accurately.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* User Reviews Section */}
        <section className="reviews-section">
          <div className="reviews-wrapper">
            <h3 className="section-title">What Our Users Say</h3>
            <div className="row g-4 justify-content-center">
              {/* Review 1 */}
              <div className="col-md-4">
                <div className="card review-card text-center p-3">
                  <img src="/user1.jpeg" alt="User 1" className="review-avatar mx-auto" />
                  <div className="card-body">
                    <h5 className="card-title">Anjali Perera</h5>
                    <p className="card-text">"Excellent service! The tests were fast and accurate. Highly recommended!"</p>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="col-md-4">
                <div className="card review-card text-center p-3">
                  <img src="/user2.jpg" alt="User 2" className="review-avatar mx-auto" />
                  <div className="card-body">
                    <h5 className="card-title">Ravindu Silva</h5>
                    <p className="card-text">"The staff was friendly and professional. Great experience overall!"</p>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="col-md-4">
                <div className="card review-card text-center p-3">
                  <img src="/user3.png" alt="User 3" className="review-avatar mx-auto" />
                  <div className="card-body">
                    <h5 className="card-title">Nadeesha Fernando</h5>
                    <p className="card-text">"Quick results and easy booking system. Definitely will use again!"</p>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    </main>
  );
}

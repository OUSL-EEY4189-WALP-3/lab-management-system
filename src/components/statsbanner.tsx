'use client';

import { FiFileText, FiUser, FiActivity } from "react-icons/fi";

export default function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="stats-container">
        <div className="stat-item">
          <FiFileText size={36} className="stat-icon" />
          <h2>1000+</h2>
          <p>Reports</p>
        </div>
        <div className="stat-item">
          <FiUser size={36} className="stat-icon" />
          <h2>100+</h2>
          <p>Patients</p>
        </div>
        <div className="stat-item">
          <FiActivity size={36} className="stat-icon" />
          <h2>50+</h2>
          <p>Tests</p>
        </div>
      </div>
    </section>
  );
}

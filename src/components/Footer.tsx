"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();
      if(pathname.startsWith('/patient' ) || pathname.startsWith('/admin')) return null;
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <img src="/logo.png" width={180} alt="Allied Diagnostics Logo" />
          <p className="footer-tagline">Keeping Your Health in Perfect Sync</p>
          <address className="footer-address">
            <p><MdEmail className="footer-icon" /> info@allieddiagnostics.lk</p>
            <p><BsFillTelephoneFill className="footer-icon" /> +94 777 123 456</p>
            <p><FaLocationDot className="footer-icon" /> Deniyaya</p>
          </address>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <p className="footer-cta">Book an appointment now</p>
          <Link href="/patient/book-test" className="footer-btn">Book Now</Link>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

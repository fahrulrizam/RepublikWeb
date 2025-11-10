import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// Hapus semua impor yang menyebabkan error

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        {/* ... sisa kode Footer Anda ... */}
        <Row className="mb-4">
          <Col md={4}>
            <h5>Republikweb</h5>
            <p>
              Agensi digital terdepan yang menyediakan program magang berkualitas untuk mengembangkan talenta digital Indonesia.
            </p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {[
                ["Tentang", "/tentang"],
                ["Posisi", "/posisi"],
                ["Galeri", "/galeri"],
                ["Testimoni", "/testimoni"],
                ["FAQ", "/faq"],
                ["Kontak", "/kontak"],
                ["Blog", "/blog"],
                ["Portfolio", "/portfolio"]
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="rw-footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4}>
            <h5>Kontak</h5>
            <p>Email: info@republikweb.com</p>
            <p>WhatsApp: +62 812-3456-7890</p>
            <p>Alamat: Jl. Digital Street No. 123, Jakarta Selatan</p>
            <p>Jam Operasional: Senin - Jumat: 09:00 - 17:00 WIB</p>
          </Col>
        </Row>

        <hr />
        <p className="text-center mb-1">© 2025 Republikweb. All rights reserved.</p>
        <div className="text-center">
          <Link to="/privacy-policy" className="rw-footer-link mx-2">Privacy Policy</Link> |
          <Link to="/terms" className="rw-footer-link mx-2">Terms of Service</Link> |
          <Link to="/cookie-policy" className="rw-footer-link mx-2">Cookie Policy</Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center text-center text-white" style={{ background: "linear-gradient(135deg, #0d47a1, #1976d2)", minHeight: "100vh" }}>
      <Container>
        <h1 className="fw-bold display-4">
          Bangun Karier Digitalmu <br /> <span style={{ color: "#ff7b00" }}>Bersama Republikweb!</span>
        </h1>
        <p className="lead mt-3">
          Bergabunglah dengan program magang terbaik untuk mahasiswa dan fresh graduate. <br />
          Kembangkan skill digital Anda bersama tim profesional dalam proyek nyata.
        </p>
        <Button size="lg" className="mt-4 px-4 py-2 fw-semibold" style={{ backgroundColor: "#ff7b00", border: "none" }}>
          Daftar Sekarang 🚀
        </Button>
      </Container>
    </section>
  );
}

export default Hero;

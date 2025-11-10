import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CookiePolicy() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="p-4 p-md-5 shadow-lg border-0 rounded-4">
            <h1 className="fw-bold text-primary mb-3">Kebijakan Cookie</h1>
            <p className="text-secondary mb-4">
              Bagaimana <span className="text-blue fw-semibold">Republikweb</span> menggunakan cookie dan teknologi pelacakan untuk memberikan pengalaman terbaik bagi pengguna kami.
            </p>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">1. Apa itu Cookie?</h5>
              <p>
                Cookie adalah file kecil yang disimpan di perangkat Anda yang berfungsi untuk menyimpan pengaturan, preferensi, serta membantu analitik penggunaan situs.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">2. Jenis Cookie yang Digunakan</h5>
              <ul>
                <li>
                  <strong>Esensial:</strong> Diperlukan agar situs berfungsi dengan benar, seperti otentikasi dan keamanan.
                </li>
                <li>
                  <strong>Analitik:</strong> Membantu kami memahami bagaimana pengunjung menggunakan situs (misalnya melalui Google Analytics).
                </li>
                <li>
                  <strong>Fungsional:</strong> Mengingat preferensi Anda, seperti bahasa dan lokasi.
                </li>
                <li>
                  <strong>Pemasaran:</strong> Digunakan untuk menampilkan iklan yang relevan berdasarkan minat Anda.
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">3. Mengelola Cookie</h5>
              <p>
                Anda dapat menonaktifkan cookie melalui pengaturan browser Anda. Namun, perlu diingat bahwa beberapa fitur situs mungkin tidak berfungsi secara optimal jika cookie dinonaktifkan.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">4. Cookie Pihak Ketiga</h5>
              <p>
                Kami dapat menggunakan layanan pihak ketiga seperti alat analitik dan platform iklan yang juga menempatkan cookie mereka sendiri.
                Silakan periksa kebijakan privasi masing-masing pihak untuk informasi lebih lanjut.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">5. Perubahan Kebijakan</h5>
              <p>
                Kami dapat memperbarui kebijakan cookie ini dari waktu ke waktu. Versi terbaru akan selalu dipublikasikan di situs
                <span className="fw-semibold text-blue"> Republikweb</span>.
              </p>
            </section>
          </Card>
        </Col>
      </Row>

      {/* Animasi dan Style */}
     <style jsx>{`
        .text-blue {
          color: #2563eb; /* Biru utama Republikweb */
        }
        .card {
          background-color: #ffffff;
          border-top: 5px solid #2563eb;
        }
        p {
          color: #444;
          line-height: 1.6;
        }
        h5 {
          margin-bottom: 0.6rem;
        }
        ul {
          padding-left: 1.2rem;
        }
        ul li {
          margin-bottom: 0.5rem;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
            
        }
          .text-gradient {
          background: linear-gradient(90deg, #2563eb, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </Container>
  );
}

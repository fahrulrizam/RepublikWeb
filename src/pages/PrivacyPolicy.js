import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function PrivacyPolicy() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="p-4 p-md-5 shadow-lg border-0 rounded-4">
            <h1 className="fw-bold text-primary mb-3">
              Kebijakan Privasi
            </h1>
            <p className="text-secondary mb-4">
              <strong>Tanggal Efektif:</strong> 31 Oktober 2025
            </p>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">1. Perkenalan</h5>
              <p>
                <span className="text-blue fw-semibold">Republikweb</span>{" "}
                menghormati privasi setiap pengguna. Kebijakan ini menjelaskan
                bagaimana kami mengumpulkan, menggunakan, menyimpan, dan
                melindungi data pribadi Anda saat menggunakan layanan kami.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">2. Informasi yang Kami Kumpulkan</h5>
              <ul>
                <li>
                  <strong>Data yang Anda berikan langsung:</strong> nama, email,
                  WhatsApp, institusi, jurusan, posisi, link CV, dan file yang diunggah.
                </li>
                <li>
                  <strong>Data teknis & penggunaan:</strong> alamat IP, jenis
                  perangkat, browser, halaman yang dikunjungi, serta log server.
                </li>
                <li>
                  <strong>Cookie & teknologi serupa:</strong> digunakan untuk
                  preferensi dan analitik.
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">3. Tujuan Penggunaan Data</h5>
              <p>
                Data digunakan untuk memproses pendaftaran magang, komunikasi
                terkait program, peningkatan kualitas layanan, serta analitik
                internal <span className="text-blue">Republikweb</span>.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">4. Dasar Hukum Pemrosesan</h5>
              <p>
                Pemrosesan data didasarkan pada:
                <ul>
                  <li>Persetujuan pengguna;</li>
                  <li>Pelaksanaan kontrak atau layanan;</li>
                  <li>Kepatuhan terhadap hukum yang berlaku;</li>
                  <li>Kepentingan sah <span className="text-blue">Republikweb</span>.</li>
                </ul>
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">5. Penerima & Transfer Data</h5>
              <p>
                Data dapat dibagikan kepada tim internal dan penyedia layanan
                pihak ketiga seperti hosting, email, dan analitik. Jika data
                ditransfer ke luar negeri, hal tersebut dilakukan dengan
                perlindungan sesuai hukum yang berlaku.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">6. Retensi Data</h5>
              <p>
                Kami menyimpan data selama diperlukan untuk tujuan yang dijelaskan
                atau sebagaimana diwajibkan oleh hukum.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">7. Hak Anda</h5>
              <p>
                Anda memiliki hak untuk:
                <ul>
                  <li>Mengakses data pribadi Anda;</li>
                  <li>Memperbaiki atau memperbarui data yang salah;</li>
                  <li>Meminta penghapusan data;</li>
                  <li>Membatasi atau menolak pemrosesan data;</li>
                  <li>Menarik persetujuan kapan pun.</li>
                </ul>
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">8. Keamanan Data</h5>
              <p>
                Kami menerapkan langkah teknis dan organisasi yang memadai untuk
                melindungi data pribadi dari akses tidak sah, kehilangan, atau
                penyalahgunaan. Namun, tidak ada sistem yang 100% aman.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">9. Kontak</h5>
              <p>
                Untuk pertanyaan seputar data pribadi Anda, silakan hubungi kami di:{" "}
                <a href="mailto:info@republikweb.com" className="text-blue text-decoration-none">
                  info@republikweb.com
                </a>
              </p>
            </section>
          </Card>
        </Col>
      </Row>

      {/* Gaya Warna dan Animasi */}
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
          line-height: 1.7;
        }
        h5 {
          margin-bottom: 0.6rem;
        }
        ul {
          padding-left: 1.2rem;
          margin-top: 0.5rem;
        }
        ul li {
          margin-bottom: 0.5rem;
        }
        a:hover {
          text-decoration: underline;
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

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function TermsOfService() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="p-4 p-md-5 shadow-lg border-0 rounded-4">
            <h1 className="fw-bold text-primary mb-3">
              Ketentuan Layanan (Terms of Service)
            </h1>
            <p className="text-secondary mb-4">
              Harap baca dengan saksama sebelum menggunakan layanan dari{" "}
              <span className="text-blue fw-semibold">Republikweb</span>.
            </p>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">1. Layanan</h5>
              <p>
                <span className="fw-semibold text-blue">Republikweb</span>{" "}
                menyediakan layanan informasi, pendaftaran program magang,
                mentoring, serta solusi digital seperti pembuatan website,
                aplikasi, dan layanan SEO.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">2. Akun & Keamanan</h5>
              <p>
                Pengguna bertanggung jawab penuh atas kerahasiaan data akun,
                termasuk kata sandi dan aktivitas yang terjadi dalam akun
                tersebut. <span className="text-blue">Republikweb</span> tidak
                bertanggung jawab atas penyalahgunaan akun akibat kelalaian
                pengguna.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">3. Kewajiban Pengguna</h5>
              <p>
                Pengguna dilarang mengunggah konten yang bersifat ilegal,
                menyesatkan, atau merugikan pihak lain. Segala bentuk pelanggaran
                dapat menyebabkan penghentian layanan secara permanen.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">4. Kepemilikan Konten</h5>
              <p>
                Seluruh materi dan konten milik{" "}
                <span className="text-blue fw-semibold">Republikweb</span>{" "}
                dilindungi oleh hak cipta. Konten yang Anda unggah tetap menjadi
                milik Anda, namun Anda memberikan izin kepada Republikweb untuk
                menggunakannya dalam rangka penyediaan layanan.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">5. Pembatasan Tanggung Jawab</h5>
              <p>
                Layanan diberikan <em>"sebagaimana adanya"</em>.{" "}
                <span className="text-blue">Republikweb</span> tidak menjamin
                kelancaran tanpa gangguan dan tidak bertanggung jawab atas
                kerugian langsung maupun tidak langsung yang mungkin timbul
                akibat penggunaan layanan.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">6. Pengakhiran</h5>
              <p>
                <span className="text-blue">Republikweb</span> berhak
                menangguhkan atau menghentikan layanan kepada pengguna yang
                melanggar ketentuan tanpa pemberitahuan sebelumnya.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">7. Ganti Rugi</h5>
              <p>
                Pengguna setuju untuk memberikan ganti rugi kepada{" "}
                <span className="text-blue">Republikweb</span> atas klaim,
                tuntutan, atau kerugian yang muncul akibat pelanggaran terhadap
                ketentuan layanan ini.
              </p>
            </section>

            <section className="mt-4">
              <h5 className="fw-bold text-blue">8. Hukum yang Berlaku</h5>
              <p>
                Ketentuan layanan ini diatur oleh hukum Republik Indonesia dan
                setiap sengketa akan diselesaikan sesuai dengan yurisdiksi hukum
                Indonesia.
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

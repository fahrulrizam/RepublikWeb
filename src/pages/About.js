import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./About.css"; // pastikan file ini ada di folder yang sama

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Container className="my-5 about-section-container" ref={ref}>
      {/* Header */}
      <div className={`text-center mb-5 fade-in ${inView ? "in-view" : ""}`}>
        <h1 className="fw-bold text-gradient mb-3">Tentang Republikweb</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
          Republikweb adalah agensi digital yang berfokus pada pengembangan teknologi, inovasi kreatif,
          dan pembinaan talenta muda Indonesia. Kami percaya bahwa masa depan bangsa dimulai dari generasi
          yang siap bersaing di dunia digital.
        </p>
      </div>
      <hr />

      {/* Siapa Kami */}
      <Row className={`align-items-center mb-5 py-4 fade-in ${inView ? "in-view" : ""}`}>
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Tim Republikweb bekerja sama"
            fluid
            rounded
            className="shadow-lg about-img"
          />
        </Col>
        <Col md={6}>
          <h3 className="fw-semibold mb-3 text-primary">Siapa Kami?</h3>
          <p>
            <strong>Republikweb</strong> adalah tim profesional muda yang bergerak di bidang pengembangan website,
            aplikasi, serta strategi digital marketing. Kami membantu pelaku usaha, instansi pendidikan, dan
            startup untuk bertransformasi secara digital.
          </p>
          <p>
            Melalui program pelatihan dan magang, kami juga membangun ekosistem pembelajaran agar generasi muda
            dapat memperoleh pengalaman industri nyata — bukan sekadar teori. Visi kami sederhana: mencetak
            talenta digital yang siap kerja dan siap bersaing secara global.
          </p>
        </Col>
      </Row>
      <hr />

      {/* Visi & Misi */}
      <Row className={`py-4 fade-in ${inView ? "in-view" : ""}`}>
        <Col md={6} className="mb-4">
          <div className="info-box shadow-sm rounded-4 p-4 h-100">
            <h4 className="fw-bold text-primary mb-3">Visi Kami</h4>
            <p>
              Menjadi pusat pengembangan ekosistem digital terbaik di Indonesia yang mendukung pertumbuhan
              ekonomi kreatif, inovasi teknologi, dan peningkatan kualitas sumber daya manusia.
            </p>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="info-box shadow-sm rounded-4 p-4 h-100">
            <h4 className="fw-bold text-primary mb-3">Misi Kami</h4>
            <ul className="mb-0">
              <li>Mendorong transformasi digital bagi bisnis lokal dan nasional.</li>
              <li>Menyediakan program magang dan pelatihan berbasis praktik industri.</li>
              <li>Membangun komunitas kreatif yang kolaboratif dan berdaya saing global.</li>
              <li>Meningkatkan literasi teknologi di kalangan muda Indonesia.</li>
            </ul>
          </div>
        </Col>
      </Row>
      <hr />

      {/* Program Magang */}
      <div className={`mt-5 py-4 fade-in ${inView ? "in-view" : ""}`}>
        <h3 className="fw-bold text-gradient mb-4 text-center">
          Program Magang Republikweb 🎓
        </h3>
        <p>
          Program magang kami dirancang untuk memberikan pengalaman nyata dalam dunia digital.
          Peserta tidak hanya belajar teori, tetapi juga terlibat langsung dalam proyek klien
          bersama tim profesional. Dengan sistem mentoring intensif, peserta akan mengasah
          keterampilan teknis dan soft skill yang dibutuhkan di dunia kerja.
        </p>

        <ul className="list-program">
          <li><strong>Web Developer:</strong> Membangun aplikasi menggunakan React, Laravel, dan Node.js.</li>
          <li><strong>Content Creator:</strong> Membuat konten kreatif dan strategi media sosial.</li>
          <li><strong>Video Editor:</strong> Menghasilkan konten visual profesional untuk kampanye digital.</li>
          <li><strong>Digital Marketing:</strong> Belajar SEO, Google Ads, dan analisis performa kampanye.</li>
          <li><strong>UI/UX Designer:</strong> Mendesain pengalaman pengguna yang menarik dan intuitif.</li>
        </ul>

        <p className="mt-4">
          Setiap peserta akan mendapatkan <strong>sertifikat resmi</strong> dan portofolio kerja nyata yang dapat digunakan
          sebagai modal karier. Kami berkomitmen membantu mereka melangkah lebih dekat ke dunia profesional.
        </p>
      </div>
      <hr />

      {/* Nilai Inti */}
      <div className={`mt-5 py-4 fade-in ${inView ? "in-view" : ""}`}>
        <h3 className="fw-bold text-gradient mb-3 text-center">Nilai Inti Kami ✨</h3>
        <Row className="mt-4">
          {[
            {
              title: "Inovasi",
              text: "Kami selalu terbuka terhadap ide baru dan berani mencoba hal berbeda untuk hasil yang lebih baik.",
            },
            {
              title: "Kolaborasi",
              text: "Kami percaya kerja tim dan komunikasi terbuka adalah kunci keberhasilan setiap proyek.",
            },
            {
              title: "Profesionalisme",
              text: "Kami menjunjung tinggi integritas, komitmen, dan tanggung jawab terhadap setiap pekerjaan.",
            },
          ].map((val, i) => (
            <Col md={4} key={i} className="text-center mb-4">
              <div className="value-card p-4 bg-light rounded-4 shadow-sm h-100">
                <h5 className="fw-bold text-primary mb-2">{val.title}</h5>
                <p className="text-muted">{val.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <hr />

      {/* CTA */}
      <div className={`text-center mt-5 py-4 fade-in ${inView ? "in-view" : ""}`}>
        <h4 className="fw-bold mb-3">Bergabung dan Berkembang Bersama Kami! 🚀</h4>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "700px" }}>
          Apakah kamu siap membangun masa depan digitalmu? Republikweb membuka pintu bagi mereka
          yang ingin belajar, berkarya, dan berkontribusi dalam industri digital Indonesia.
        </p>
        <Button href="/daftar" variant="primary" className="btn-lg px-4 rounded-pill shadow-sm cta-button">
          Daftar Sekarang
        </Button>
      </div>
    </Container>
  );
}

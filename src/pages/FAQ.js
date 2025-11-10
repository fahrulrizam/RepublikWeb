import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { BsQuestionCircle } from "react-icons/bs";

function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const faqs = [
    {
      q: "Apakah program magang ini benar-benar gratis?",
      a: "Ya! Program magang di Republikweb 100% GRATIS. Tidak ada biaya pendaftaran atau biaya lainnya. Anda juga akan menerima sertifikat resmi setelah menyelesaikan program.",
    },
    {
      q: "Berapa lama durasi program magang?",
      a: "Durasi program adalah 3 bulan. Selama periode ini, peserta akan terlibat dalam proyek nyata dan dibimbing langsung oleh mentor profesional.",
    },
    {
      q: "Apakah bisa mengikuti magang sambil kuliah?",
      a: "Bisa! Jadwal magang fleksibel dan dapat disesuaikan dengan jadwal kuliah peserta.",
    },
    {
      q: "Apa saja yang akan dipelajari selama magang?",
      a: "Tergantung posisi yang Anda pilih. Kami menggunakan teknologi terkini dan metode pembelajaran berbasis proyek.",
    },
    {
      q: "Apakah ada peluang kerja setelah magang selesai?",
      a: "Peserta dengan performa terbaik berpeluang direkrut menjadi tim Republikweb atau direkomendasikan ke mitra kami.",
    },
    {
      q: "Bagaimana sistem kerja selama magang?",
      a: "Anda akan bekerja secara kolaboratif dalam tim, mengikuti proyek nyata, dan mendapatkan mentoring langsung.",
    },
    {
      q: "Bagaimana proses seleksinya?",
      a: "Seleksi terdiri dari: 1) Review CV & aplikasi, 2) Interview online, 3) Tes skill (untuk posisi teknis). Hasil akan diinformasikan melalui email atau WhatsApp.",
    },
  ];

  return (
    <Container className="py-5" ref={ref}>
      {}
      <div
        className={`text-center mb-5 fade-section ${inView ? "visible" : ""}`}
      >
        <h1 className="fw-bold text-gradient mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-muted lead">
          Temukan jawaban atas pertanyaan umum tentang program magang kami.
        </p>
      </div>

      {}
      <Accordion
        className={`faq-accordion fade-section ${inView ? "visible" : ""}`}
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="shadow-sm rounded-4 mb-3 border-0 overflow-hidden"
          >
            <Accordion.Header>
              <BsQuestionCircle className="me-2 text-primary fs-5" />
              <span>{faq.q}</span>
            </Accordion.Header>
            <Accordion.Body className="text-muted">{faq.a}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* 🔹 Custom Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #1d4ed8, #0ea5e9, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .faq-accordion .accordion-button {
          border-radius: 1rem !important;
          font-weight: 600;
          color: #1e293b;
          padding: 1rem 1.2rem;
          background-color: #ffffff;
          transition: all 0.3s ease;
        }

        .faq-accordion .accordion-button:hover {
          background-color: #f0f7ff;
          color: #0ea5e9;
        }

        .faq-accordion .accordion-button:not(.collapsed) {
          color: #0ea5e9;
          background: linear-gradient(
            90deg,
            rgba(14, 165, 233, 0.08),
            rgba(59, 130, 246, 0.08)
          );
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.05);
        }

        .faq-accordion .accordion-body {
          font-size: 0.96rem;
          line-height: 1.7;
          padding: 1.2rem 1.5rem;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
        }

        /* 🔹 Fade-in animation */
        .fade-section {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* 🔹 Responsiveness */
        @media (max-width: 768px) {
          .faq-accordion .accordion-button {
            font-size: 0.95rem;
            padding: 0.9rem 1rem;
          }
          .faq-accordion .accordion-body {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default FAQ;

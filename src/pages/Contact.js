import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const contactItems = [
    {
      icon: <FaEnvelope className="icon-anim text-primary mb-3" size={40} />,
      title: 'Email',
      text: 'info@republikweb.com',
      link: 'mailto:info@republikweb.com',
    },
    {
      icon: <FaWhatsapp className="icon-anim text-success mb-3" size={40} />,
      title: 'WhatsApp',
      text: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890',
    },
    {
      icon: <FaMapMarkerAlt className="icon-anim text-danger mb-3" size={40} />,
      title: 'Alamat',
      text: 'Jl. Digital Street No. 123, Jakarta Selatan',
      link: 'https://www.google.com/maps?q=Jl.+Digital+Street+No.+123,+Jakarta+Selatan',
    },
    {
      icon: <FaClock className="icon-anim text-warning mb-3" size={40} />,
      title: 'Jam Operasional',
      text: 'Senin - Jumat: 09:00 - 17:00 WIB',
    },
  ];

  return (
    <Container className="py-5" ref={ref}>
      {}
      <h1
        className={`text-center mb-4 fw-bold text-gradient fade-in ${
          inView ? 'in-view' : ''
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        Hubungi Kami
      </h1>

      <p
        className={`text-center mb-5 text-muted fade-in ${
          inView ? 'in-view' : ''
        }`}
        style={{ animationDelay: '0.3s' }}
      >
        Ada pertanyaan? Jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda!
      </p>

      {}
      <Row className="text-center g-4 mb-5">
        {contactItems.map((item, i) => (
          <Col md={6} lg={3} key={i}>
            <a
              href={item.link || '#'}
              target={item.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card
                className={`p-4 shadow-lg border-0 rounded-4 fade-in hover-card h-100 ${
                  inView ? 'in-view' : ''
                }`}
                style={{
                  animationDelay: `${0.4 + i * 0.15}s`,
                }}
              >
                <div>{item.icon}</div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted">{item.text}</p>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {}
      <div
        className={`text-center p-5 rounded-4 fade-in join-section ${
          inView ? 'in-view' : ''
        }`}
        style={{ animationDelay: '1.2s' }}
      >
        <h2 className="fw-bold mb-3">Siap Memulai Perjalanan Karir Digital Anda?</h2>
        <p className="mb-4">
          Bergabunglah dengan program magang terbaik dan kembangkan skill digital Anda bersama
          tim profesional Republikweb.
        </p>
        <Link to="/daftar">
          <Button className="fw-semibold px-5 py-3 rounded-pill text-white btn-cta">
            Daftar Sekarang
          </Button>
        </Link>
      </div>

      {/* Style */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #2563eb, #0ea5e9, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Fade-in + Staggered Animation */
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.9s ease forwards;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .in-view {
          opacity: 1;
        }

        .hover-card {
          background: linear-gradient(145deg, #ffffff, #f9fafb);
          transition: all 0.4s ease;
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }

        .icon-anim {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .hover-card:hover .icon-anim {
          transform: scale(1.2) rotate(8deg);
        }

        .join-section {
          background: linear-gradient(135deg, #2563eb, #3b82f6, #f59e0b);
          color: white;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        .join-section:hover {
          transform: scale(1.02);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.2);
        }

        .btn-cta {
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          border: none;
          color: white;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .btn-cta:hover {
          transform: scale(1.08);
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </Container>
  );
}

export default Contact;

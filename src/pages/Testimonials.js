import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaPenFancy, FaBullhorn, FaPaintBrush, FaSearch } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      icon: <FaCode size={40} color="#1d4ed8" />,
      name: 'Ximon',
      role: 'Programmer Intern',
      text: 'Magang di Republikweb membuka wawasan saya tentang dunia web development. Mentornya sangat suportif dan proyeknya nyata!',
    },
    {
      icon: <FaPenFancy size={40} color="#1d4ed8" />,
      name: 'Brian',
      role: 'Content Creator Intern',
      text: 'Saya belajar banyak tentang content strategy dan copywriting. Tim yang solid dan suasana kerja menyenangkan!',
    },
    {
      icon: <FaBullhorn size={40} color="#1d4ed8" />,
      name: 'Hairi',
      role: 'Digital Marketing Intern',
      text: 'Pengalaman langsung mengelola campaign digital membuat saya lebih percaya diri menghadapi dunia kerja.',
    },
    {
      icon: <FaPaintBrush size={40} color="#1d4ed8" />,
      name: 'Udin',
      role: 'UI/UX Designer Intern',
      text: 'Belajar mendesain interface yang user-friendly dengan Figma dan bimbingan mentor yang luar biasa.',
    },
    {
      icon: <FaSearch size={40} color="#1d4ed8" />,
      name: 'Anton',
      role: 'SEO Specialist Intern',
      text: 'Saya memahami cara kerja SEO dan berhasil meningkatkan ranking website secara signifikan!',
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container className="py-5" ref={ref}>
      <h1
        className={`text-center mb-3 fw-bold text-gradient section-title fade-in ${
          inView ? 'in-view' : ''
        }`}
      >
        Testimoni Peserta
      </h1>
      <p
        className={`text-center mb-5 text-muted section-subtitle fade-in ${
          inView ? 'in-view' : ''
        }`}
      >
        Cerita nyata dari peserta yang telah magang di Republikweb.
      </p>

      <Row className="g-4">
        {testimonials.map((item, index) => (
          <Col md={6} lg={4} key={index}>
            <Card
              className={`border-0 shadow-sm text-center p-4 rounded-4 fade-in hover-card ${
                inView ? 'in-view' : ''
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="icon-circle mb-3">{item.icon}</div>
              <Card.Body>
                <Card.Text className="text-muted fst-italic mb-4">
                  “{item.text}”
                </Card.Text>
                <h5 className="fw-bold text-primary">{item.name}</h5>
                <p className="text-muted mb-0">{item.role}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        /* Animasi Fade-in */
        .fade-in {
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.8s ease-out;
        }
        .fade-in.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover effect */
        .hover-card {
          transition: all 0.35s ease;
          background: #fff;
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        /* Ikon bundar */
        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          margin: 0 auto;
          border-radius: 50%;
          background: rgba(29, 78, 216, 0.1);
          transition: transform 0.4s ease;
        }
        .hover-card:hover .icon-circle {
          transform: scale(1.1) rotate(8deg);
        }

        /* Judul & teks */
        .section-title {
          font-size: 2.2rem;
          letter-spacing: 0.5px;
        }
        .section-subtitle {
          font-size: 1rem;
        }

        /* Warna gradasi teks */
        .text-gradient {
          background: linear-gradient(90deg, #1d4ed8, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.8rem;
          }
          .icon-circle {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </Container>
  );
}

export default Testimonials;

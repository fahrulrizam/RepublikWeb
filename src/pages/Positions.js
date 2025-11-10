import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function Positions() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const positions = [
    {
      title: 'Programmer',
      icon: 'bi-code-slash',
      desc: 'Bergabunglah dengan tim development kami dan kembangkan keterampilan programming Anda menggunakan teknologi modern seperti React, Node.js, dan database management.',
      requirements: [
        'Mahasiswa/i aktif jurusan IT/Computer Science atau SMK RPL',
        'Memahami dasar HTML/CSS/JavaScript',
        'Passion dalam coding dan problem solving',
      ],
    },
    {
      title: 'Content Creator',
      icon: 'bi-pencil-square',
      desc: 'Tuangkan kreativitas Anda dalam membuat konten digital menarik. Pelajari content planning, copywriting, dan strategi sosial media modern.',
      requirements: [
        'Kreatif dan update dengan tren digital',
        'Memiliki kemampuan menulis yang baik',
        'Familiar dengan social media platforms',
      ],
    },
    {
      title: 'Video Editor',
      icon: 'bi-camera-video',
      desc: 'Wujudkan ide kreatif menjadi video memukau menggunakan tools profesional seperti Premiere dan After Effects.',
      requirements: [
        'Mahasiswa/i atau fresh graduate',
        'Menguasai software editing video',
      ],
    },
    {
      title: 'Digital Marketing',
      icon: 'bi-graph-up',
      desc: 'Pelajari strategi digital marketing: social media ads, campaign analytics, dan peningkatan brand awareness.',
      requirements: [
        'Tertarik dengan digital marketing',
        'Memahami dasar social media management',
        'Analytical thinking dan data-driven',
      ],
    },
    {
      title: 'SEO Specialist',
      icon: 'bi-search',
      desc: 'Pelajari teknik optimasi mesin pencari, keyword research, dan analisis data untuk meningkatkan ranking website.',
      requirements: [
        'Memahami dasar SEO dan cara kerja search engine',
        'Analytical dan detail oriented',
        'Familiar dengan Google Analytics/Search Console',
      ],
    },
    {
      title: 'UI/UX Designer',
      icon: 'bi-palette',
      desc: 'Rancang pengalaman digital yang intuitif dan menarik menggunakan tools seperti Figma dan Adobe XD.',
      requirements: [
        'Mahasiswa/i jurusan Design/IT atau terkait',
        'Menguasai Figma atau Adobe XD',
        'Memahami prinsip dasar UI/UX',
      ],
    },
  ];

  return (
    <Container className="py-5" ref={ref}>
      {/* Header */}
      <div className="text-center mb-5">
        <h1
          className={`fw-bold text-gradient mb-3 fade-in ${
            inView ? 'in-view' : ''
          }`}
        >
          Posisi yang Tersedia
        </h1>
        <p
          className={`lead text-muted mx-auto fade-in ${
            inView ? 'in-view' : ''
          }`}
          style={{ maxWidth: '700px' }}
        >
          Temukan posisi magang sesuai minat dan keahlian Anda. Dapatkan pengalaman dunia kerja nyata bersama tim profesional Republikweb.
        </p>
      </div>

      {/* Cards */}
      <Row className="g-4">
        {positions.map((pos, index) => (
          <Col lg={6} key={index}>
            <Card
              className={`border-0 shadow-sm rounded-4 p-4 fade-in position-card ${
                inView ? 'in-view' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="d-flex align-items-center mb-3">
                <div
                  className="icon-circle me-3 d-flex align-items-center justify-content-center"
                >
                  <i className={`bi ${pos.icon}`}></i>
                </div>
                <Card.Title className="fw-semibold fs-5 mb-0">
                  {pos.title}
                </Card.Title>
              </div>

              <Card.Text className="text-muted mb-4">{pos.desc}</Card.Text>

              <h6 className="fw-semibold mb-2 text-primary">Persyaratan:</h6>
              <ul className="text-muted mb-4">
                {pos.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>

              <Button
                as={Link}
                to={`/daftar?posisi=${encodeURIComponent(pos.title)}`}
                className="w-100 py-2 rounded-pill fw-semibold text-white btn-gradient shadow-sm"
              >
                Apply Now
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Styling */}
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

        /* Card */
        .position-card {
          background: #fff;
          transition: all 0.35s ease;
        }
        .position-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.12);
        }

        /* Ikon */
        .icon-circle {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          color: #fff;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        .position-card:hover .icon-circle {
          transform: scale(1.1) rotate(5deg);
        }

        /* Tombol */
        .btn-gradient {
          background: linear-gradient(90deg, #2563eb, #0ea5e9);
          border: none;
          transition: all 0.3s ease;
        }
        .btn-gradient:hover {
          background: linear-gradient(90deg, #1e3a8a, #0369a1);
          transform: scale(1.03);
        }

        /* Text Gradient */
        .text-gradient {
          background: linear-gradient(90deg, #1d4ed8, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        ul {
          padding-left: 1.2rem;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .icon-circle {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default Positions;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

function Portfolio() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTag, setActiveTag] = useState('All');

  const projects = [
    {
      title: 'Website E-Commerce',
      desc: 'Platform toko online modern dengan React dan Node.js, dilengkapi sistem pembayaran dan manajemen produk otomatis.',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'TailwindCSS'],
    },
    {
      title: 'Aplikasi Mobile Marketing',
      desc: 'Aplikasi kampanye digital marketing interaktif berbasis React Native dan Firebase.',
      img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'Analytics'],
    },
    {
      title: 'Dashboard Analytics',
      desc: 'Dashboard visualisasi data SEO dan performa website menggunakan Vue.js dan D3.js.',
      img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'D3.js', 'API'],
    },
    {
      title: 'Company Profile Website',
      desc: 'Website profil perusahaan yang elegan dan responsif menggunakan Next.js dan TailwindCSS.',
      img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'TailwindCSS', 'UI/UX'],
    },
    {
      title: 'Landing Page Kampanye Digital',
      desc: 'Halaman kampanye digital dengan konversi tinggi dan desain UX yang menarik.',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      tags: ['UI/UX', 'Marketing', 'SEO'],
    },
  ];

  // Ambil semua tags unik
  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];

  // Filter projek berdasarkan tag aktif
  const filteredProjects =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <Container className="py-5" ref={ref}>
      {/* Header */}
      <div className={`text-center fade-section ${inView ? 'visible' : ''}`}>
        <h1 className="fw-bold text-gradient mb-3">Portofolio Kami</h1>
        <p className="lead text-muted mb-4">
          Inilah karya digital terbaik hasil kolaborasi tim kami dengan berbagai klien dari industri modern.
        </p>
      </div>

      {/* Filter Bar */}
      <div
        className={`d-flex flex-wrap justify-content-center gap-2 mb-5 fade-section ${
          inView ? 'visible' : ''
        }`}
      >
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={activeTag === tag ? 'primary' : 'outline-primary'}
            className="rounded-pill px-4 fw-semibold"
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Grid Project */}
      <Row className="g-4">
        {filteredProjects.map((project, index) => (
          <Col md={6} lg={4} key={index}>
            <Card
              className={`shadow-lg border-0 h-100 rounded-4 portfolio-card fade-up ${
                inView ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="portfolio-img-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="portfolio-img"
                  onError={(e) =>
                    (e.target.src =
                      'https://via.placeholder.com/600x400?text=Image+Unavailable')
                  }
                />
              </div>

              <Card.Body className="p-4 d-flex flex-column">
                <Card.Title className="fw-semibold text-primary mb-2">
                  {project.title}
                </Card.Title>
                <Card.Text className="text-muted flex-grow-1 mb-3">
                  {project.desc}
                </Card.Text>

                <div className="mb-3">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      bg="light"
                      text="dark"
                      className="me-2 mb-1 border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="primary"
                  className="rounded-pill fw-semibold w-100 mt-auto"
                  onClick={() => setSelectedProject(project)}
                >
                  Detail Proyek
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal Detail */}
      {selectedProject && (
        <div
          className="modal-overlay fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content rounded-4 shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="light"
              className="position-absolute top-0 end-0 m-3 fw-bold fs-4"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </Button>

            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-100 rounded-3 mb-4"
              style={{ maxHeight: '320px', objectFit: 'cover' }}
            />

            <h2 className="fw-bold text-primary mb-3">
              {selectedProject.title}
            </h2>
            <p className="text-muted">{selectedProject.desc}</p>

            <div className="mt-3">
              {selectedProject.tags.map((tag, i) => (
                <Badge
                  key={i}
                  bg="light"
                  text="dark"
                  className="me-2 mb-1 border"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .portfolio-img-wrapper {
          height: 230px;
          overflow: hidden;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }

        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover .portfolio-img {
          transform: scale(1.08);
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        /* Fade Animations */
        .fade-up {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .text-gradient {
          background: linear-gradient(90deg, #1d4ed8, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          animation: fadeInOverlay 0.3s ease forwards;
          backdrop-filter: blur(8px);
        }

        .modal-content {
          background: #fff;
          max-width: 720px;
          width: 90%;
          position: relative;
          animation: fadeInUp 0.4s ease forwards;
        }

        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
      `}</style>
    </Container>
  );
}

export default Portfolio;

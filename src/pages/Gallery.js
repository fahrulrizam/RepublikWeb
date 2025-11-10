import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      title: 'Team Meeting',
      desc: 'Weekly team sync untuk diskusi project dan knowledge sharing.',
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      title: 'Workspace',
      desc: 'Ruang kerja yang nyaman dan kondusif untuk produktivitas.',
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      title: 'Team Building',
      desc: 'Kegiatan team building untuk mempererat hubungan antar tim.',
    },
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      title: 'Learning Session',
      desc: 'Sesi training dan mentoring bersama developer profesional.',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <Container className="py-5" ref={ref}>
      <h1
        className={`text-center mb-4 fw-bold text-gradient fade-in ${
          inView ? 'in-view' : ''
        }`}
      >
        Galeri Kegiatan
      </h1>
      <p
        className={`text-center lead mb-5 fade-in delay-1 ${
          inView ? 'in-view' : ''
        }`}
      >
        Lihat momen berkesan dari kegiatan dan aktivitas peserta magang di
        Republikweb.
      </p>

      <Row className="g-4">
        {images.map((image, index) => (
          <Col md={6} lg={3} key={index}>
            <Card
              className={`shadow-lg border-0 rounded-4 overflow-hidden fade-in delay-${index + 2} ${
                inView ? 'in-view' : ''
              }`}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-img"
                  onError={(e) =>
                    (e.target.src =
                      'https://via.placeholder.com/600x400?text=No+Image')
                  }
                />
              </div>
              <Card.Body className="p-4">
                <Card.Title className="text-primary fw-semibold mb-2">
                  {image.title}
                </Card.Title>
                <Card.Text className="text-muted">{image.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        /* Wrapper untuk menjaga rasio gambar */
        .gallery-img-wrapper {
          height: 220px;
          overflow: hidden;
          background-color: #f8fafc;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease, filter 0.4s ease;
        }

        /* Efek hover */
        .fade-in.in-view:hover .gallery-img {
          transform: scale(1.08);
          filter: brightness(1.1);
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(14, 165, 233, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* Animasi masuk */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 {
          transition-delay: 0.2s;
        }
        .delay-2 {
          transition-delay: 0.4s;
        }
        .delay-3 {
          transition-delay: 0.6s;
        }
        .delay-4 {
          transition-delay: 0.8s;
        }
        .delay-5 {
          transition-delay: 1s;
        }

        /* Warna teks gradien */
        .text-gradient {
          background: linear-gradient(90deg, #1d4ed8, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Responsivitas tambahan */
        @media (max-width: 768px) {
          .gallery-img-wrapper {
            height: 180px;
          }
          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default Gallery;

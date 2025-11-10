import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const { ref, inView } = useInView({ triggerOnce: true });

  const articles = [
    {
      title: 'Pengenalan React untuk Pemula',
      category: 'Coding',
      content:
        'React adalah library JavaScript untuk membangun UI interaktif. Dalam artikel ini, kita akan membahas dasar-dasar React, komponen, state, dan props. Cocok untuk pemula yang ingin memulai karir di web development.',
      img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Strategi SEO Modern',
      category: 'Marketing',
      content:
        'SEO melibatkan optimasi konten dan teknis untuk meningkatkan ranking di mesin pencari. Pelajari keyword research, on-page SEO, dan penggunaan tools seperti Google Analytics.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Desain UI/UX yang Efektif',
      category: 'Design',
      content:
        'UI/UX fokus pada pengalaman user yang intuitif. Artikel ini membahas prinsip desain, wireframing, prototyping, dan tools seperti Figma untuk menciptakan interface yang user-friendly.',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Membangun Portofolio Digital yang Menarik',
      category: 'Career',
      content:
        'Portofolio digital penting untuk menunjukkan kemampuan dan proyek yang sudah kamu kerjakan. Pelajari cara menulis deskripsi proyek dan desain tampilan yang profesional.',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', // ✅ FIXED image link
    },
    {
      title: 'Tips Menjadi SEO Specialist Handal',
      category: 'Marketing',
      content:
        'Menjadi SEO Specialist bukan hanya soal keyword. Kamu juga perlu memahami algoritma Google, UX, kecepatan situs, dan data analytics untuk hasil maksimal.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Belajar Git dan Github untuk Pemula',
      category: 'Coding',
      content:
        'Git dan Github sangat penting untuk developer modern. Pelajari konsep dasar commit, push, pull, dan cara kolaborasi dengan tim.',
      img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80', // ✅ FIXED image link
    },
  ];

  const filteredArticles = articles.filter(
    (article) =>
      (category === 'All' || article.category === category) &&
      article.title.toLowerCase().includes(search.toLowerCase())
  );

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <Container className="py-5" ref={ref}>
      <h1
        className={`text-center mb-3 fw-bold text-gradient ${
          inView ? 'fade-in' : 'invisible'
        }`}
      >
        Blog Republikweb
      </h1>
      <p
        className={`text-center lead mb-5 ${
          inView ? 'fade-in-delay' : 'invisible'
        }`}
      >
        Dapatkan insight terbaru tentang dunia digital, teknologi, desain, dan strategi pemasaran modern.
      </p>

      {}
      <Row className="justify-content-center mb-5">
        <Col md={4} className="mb-3 mb-md-0">
          <Form.Control
            type="text"
            placeholder="🔍 Cari artikel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-pill py-2 px-3 shadow-sm"
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-pill py-2 shadow-sm"
          >
            <option>All</option>
            <option>Coding</option>
            <option>Marketing</option>
            <option>Design</option>
            <option>Career</option>
          </Form.Select>
        </Col>
      </Row>

      {}
      <Row className="g-4">
        {visibleArticles.map((article, index) => (
          <Col md={6} lg={4} key={index}>
            <Card
              className={`shadow-lg border-0 h-100 rounded-4 hover-card ${
                inView ? 'fade-in' : 'invisible'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card.Img
                variant="top"
                src={article.img}
                alt={article.title}
                onError={(e) =>
                  (e.target.src =
                    'https://via.placeholder.com/400x250?text=No+Image')
                }
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem',
                }}
              />
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Card.Title className="fw-semibold">{article.title}</Card.Title>
                  <span className="badge bg-light text-primary border px-3 py-2">
                    {article.category}
                  </span>
                </div>
                <Card.Text className="text-muted mb-4">
                  {article.content.slice(0, 100)}...
                </Card.Text>
                <Button
                  variant="primary"
                  className="w-100 rounded-pill fw-semibold"
                  onClick={() => setSelectedArticle(article)}
                >
                  Baca Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {}
      {visibleCount < filteredArticles.length && (
        <div className="text-center mt-5">
          <Button
            variant="outline-primary"
            className="rounded-pill px-4 py-2 fw-semibold fade-in"
            onClick={handleLoadMore}
          >
            Tampilkan Lebih Banyak
          </Button>
        </div>
      )}

      {}
      {selectedArticle && (
        <div
          className="modal-overlay fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="modal-content rounded-4 shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="light"
              className="position-absolute top-0 end-0 m-3 fw-bold fs-4"
              onClick={() => setSelectedArticle(null)}
            >
              ×
            </Button>
            <img
              src={selectedArticle.img}
              alt={selectedArticle.title}
              className="w-100 rounded-3 mb-4"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
            <h2 className="fw-bold text-primary mb-3">{selectedArticle.title}</h2>
            <p className="text-muted">{selectedArticle.content}</p>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #1d4ed8, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hover-card {
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }
        .hover-card.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease;
        }
        .fade-in-delay {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s ease 0.3s;
        }
        .invisible {
          opacity: 0;
          transform: translateY(20px);
        }
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          animation: fadeInOverlay 0.3s ease forwards;
        }
        .modal-content {
          background: #fff;
          max-width: 700px;
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

export default Blog;

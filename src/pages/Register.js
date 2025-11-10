import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

function Register() {
  const location = useLocation(); 
  const params = new URLSearchParams(location.search);
  const posisiAwal = params.get('posisi') || ''; 

  const [form, setForm] = useState({
    nama: '',
    email: '',
    whatsapp: '',
    sekolah: '',
    jurusan: '',
    posisi: posisiAwal,
    cv: '',
    motivasi: ''
  });

  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', form);
      setShowModal(true);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <Container className="py-5" ref={ref}>
      <div className={`text-center mb-5 fade-in ${inView ? 'in-view' : ''}`}>
        <h1 className="fw-bold text-gradient mb-3">Daftar Sekarang</h1>
        <p className="lead text-muted">
          Lengkapi formulir di bawah ini dan mulai perjalanan karier digitalmu
          bersama <span className="fw-semibold text-primary">Republikweb</span>!
        </p>
      </div>

      <Form
        onSubmit={handleSubmit}
        className={`shadow-lg border-0 rounded-4 p-5 bg-white fade-in ${
          inView ? 'in-view' : ''
        }`}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          animationDelay: '0.3s'
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Nama Lengkap *</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="contoh@email.com"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>No. WhatsApp *</Form.Label>
          <Form.Control
            type="text"
            name="whatsapp"
            onChange={handleChange}
            placeholder="+62 812-xxxx-xxxx"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sekolah / Universitas *</Form.Label>
          <Form.Control
            type="text"
            name="sekolah"
            onChange={handleChange}
            placeholder="Nama sekolah atau universitas"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jurusan *</Form.Label>
          <Form.Control
            type="text"
            name="jurusan"
            onChange={handleChange}
            placeholder="Contoh: Informatika, Multimedia, DKV"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Posisi yang Dilamar *</Form.Label>
          <Form.Select
            name="posisi"
            onChange={handleChange}
            value={form.posisi} 
            required
          >
            <option value="">Pilih Posisi</option>
            <option>Programmer</option>
            <option>Content Creator</option>
            <option>Video Editor</option>
            <option>Digital Marketing</option>
            <option>SEO Specialist</option>
            <option>UI/UX Designer</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link CV / Portfolio *</Form.Label>
          <Form.Control
            type="url"
            name="cv"
            onChange={handleChange}
            placeholder="https://link-ke-cv-atau-portfolio.com"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Motivasi *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="motivasi"
            onChange={handleChange}
            placeholder="Ceritakan mengapa Anda ingin bergabung di Republikweb"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="btn-gradient px-5 py-2 fw-semibold"
          >
            Kirim Aplikasi
          </Button>
        </div>
      </Form>

      {}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pendaftaran Berhasil!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5 className="mb-3">Terima kasih telah mendaftar 🎉</h5>
          <p>
            Kami akan menghubungi Anda melalui email atau WhatsApp untuk tahap
            selanjutnya.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .btn-gradient {
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          border: none;
          color: white;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .btn-gradient:hover {
          background: linear-gradient(90deg, #1e40af, #0e7490);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
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
          background: linear-gradient(90deg, #1d4ed8, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </Container>
  );
}

export default Register;

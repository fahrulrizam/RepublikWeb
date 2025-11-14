import React, { useState } from 'react';
import { Container, Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

function Register() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const posisiAwal = params.get('posisi') || '';

  // PERBAIKAN 1: Menyesuaikan nama state agar cocok dengan schema Mongoose/Express
  const [form, setForm] = useState({
    // Nama field di sini HARUS sama dengan yang diterima oleh server.js (req.body)
    nama: '', // Akan dikirim sebagai 'nama' di body
    emailAktif: '', // Dulu 'email', diubah menjadi 'emailAktif'
    whatsapp: '', // Akan dikirim sebagai 'whatsapp'
    universitasSekolah: '', // Dulu 'sekolah', diubah menjadi 'universitasSekolah'
    jurusan: '', // Akan dikirim sebagai 'jurusan'
    posisiMagang: posisiAwal, // Dulu 'posisi', diubah menjadi 'posisiMagang'
    linkPortfolio: '', // Dulu 'cv', diubah menjadi 'linkPortfolio'
    motivasi: '' // Dulu 'motivasi', ini tidak ada di schema Mongoose, kita hapus di Langkah 3 jika perlu.
  });

  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState(''); // State untuk pesan error
  const { ref, inView } = useInView({ triggerOnce: true });

  const handleChange = (e) => {
    // Reset error saat user mulai mengetik
    if (errorMsg) setErrorMsg(''); 
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Reset error sebelum pengiriman

    try {
      // PERBAIKAN 2: URL dan Port disesuaikan dengan server Express Anda (PORT 3000)
      // Jika server di Vercel, ganti 'http://localhost:3000' dengan URL Vercel Anda
      const response = await axios.post('http://localhost:3000/api/register', form);
      
      // Jika sukses (Status 201), tampilkan modal
      if (response.status === 201) {
          setShowModal(true);
      }
      
    } catch (error) {
        // PERBAIKAN 3: Penanganan error spesifik dari server (Mongoose/Express)
        if (error.response) {
            // Jika ada respons dari server (misal: 400, 409, 500)
            const serverError = error.response.data.error || 'Terjadi kesalahan pada server.';
            
            // Tampilkan error dari server yang sudah kita buat (misal: "Email sudah terdaftar")
            setErrorMsg(`Gagal mengirim: ${serverError}`); 
            
            console.error('Server responded with error:', error.response.data);
            
        } else if (error.request) {
            // Request dikirim, tapi tidak ada respons (biasanya masalah CORS atau server mati)
            setErrorMsg('Koneksi Gagal. Pastikan server backend berjalan di http://localhost:3000.');
            console.error('No response received:', error.request);
            
        } else {
            // Error lain (misal: error setup axios)
            setErrorMsg(`Error: ${error.message}`);
            console.error('Axios error:', error.message);
        }
    }
  };

  // Kita perlu membuang field 'motivasi' dari form karena tidak ada di schema Mongoose.
  // ATAU, jika Anda ingin menyimpannya, Anda harus menambahkannya di models/User.js dan server.js.
  // Untuk menjaga konsistensi dengan perbaikan sebelumnya, kita akan anggap 'motivasi' DIBUANG
  // atau diasumsikan akan ditambahkan sendiri. Untuk saat ini, kita akan fokus ke field yang ada di schema.

  return (
    <Container className="py-5" ref={ref}>
      <div className={`text-center mb-5 fade-in ${inView ? 'in-view' : ''}`}>
        <h1 className="fw-bold text-gradient mb-3">Daftar Sekarang</h1>
        <p className="lead text-muted">
          Lengkapi formulir di bawah ini dan mulai perjalanan karier digitalmu
          bersama <span className="fw-semibold text-primary">Republikweb</span>!
        </p>
      </div>
      
      {/* Tampilkan pesan error jika ada */}
      {errorMsg && (
        <Alert variant="danger" className="mx-auto mb-4" style={{ maxWidth: '700px' }}>
          {errorMsg}
        </Alert>
      )}

      <Form
        onSubmit={handleSubmit}
        className={`shadow-lg border-0 rounded-4 p-5 bg-white fade-in ${
          inView ? 'in-view' : ''
        }`}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          animationDelay: '0.3s',
        }}
      >
        
        {/* Nama Lengkap */}
        <Form.Group className="mb-3">
          <Form.Label>Nama Lengkap *</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
            required
          />
        </Form.Group>

        {/* Email Aktif */}
        <Form.Group className="mb-3">
          <Form.Label>Email Aktif *</Form.Label>
          <Form.Control
            type="email"
            name="emailAktif" // PERUBAHAN NAMA FIELD (Dulu 'email')
            value={form.emailAktif}
            onChange={handleChange}
            placeholder="contoh@email.com"
            required
          />
        </Form.Group>

        {/* No. WhatsApp */}
        <Form.Group className="mb-3">
          <Form.Label>No. WhatsApp *</Form.Label>
          <Form.Control
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="+62 812-xxxx-xxxx"
            required
          />
        </Form.Group>

        {/* Sekolah / Universitas */}
        <Form.Group className="mb-3">
          <Form.Label>Sekolah / Universitas *</Form.Label>
          <Form.Control
            type="text"
            name="universitasSekolah" // PERUBAHAN NAMA FIELD (Dulu 'sekolah')
            value={form.universitasSekolah}
            onChange={handleChange}
            placeholder="Nama sekolah atau universitas"
            required
          />
        </Form.Group>

        {/* Jurusan */}
        <Form.Group className="mb-3">
          <Form.Label>Jurusan *</Form.Label>
          <Form.Control
            type="text"
            name="jurusan"
            value={form.jurusan}
            onChange={handleChange}
            placeholder="Contoh: Informatika, Multimedia, DKV"
            required
          />
        </Form.Group>

        {/* Posisi yang Dilamar */}
        <Form.Group className="mb-3">
          <Form.Label>Posisi yang Dilamar *</Form.Label>
          <Form.Select
            name="posisiMagang" // PERUBAHAN NAMA FIELD (Dulu 'posisi')
            onChange={handleChange}
            value={form.posisiMagang}
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

        {/* Link CV / Portfolio */}
        <Form.Group className="mb-3">
          <Form.Label>Link CV / Portfolio *</Form.Label>
          <Form.Control
            type="url"
            name="linkPortfolio" // PERUBAHAN NAMA FIELD (Dulu 'cv')
            value={form.linkPortfolio}
            onChange={handleChange}
            placeholder="https://link-ke-cv-atau-portfolio.com"
            required
          />
        </Form.Group>

        {/* Motivasi (OPTIONAL: Hapus field 'motivasi' dari state jika tidak mau disimpan) */}
        <Form.Group className="mb-4">
          <Form.Label>Motivasi (Opsional)</Form.Label> 
          <Form.Control
            as="textarea"
            rows={3}
            name="motivasi"
            value={form.motivasi}
            onChange={handleChange}
            placeholder="Ceritakan mengapa Anda ingin bergabung di Republikweb"
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

      {/* Modal Sukses */}
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

      {/* Style JSX dihilangkan untuk menjaga fokus, asumsikan sudah benar */}
    </Container>
  );
}

export default Register;
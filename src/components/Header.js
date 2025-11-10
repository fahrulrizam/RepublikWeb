import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// Import Link dari react-router-dom (untuk navigasi halaman penuh)
import { Link } from 'react-router-dom'; 
// Import HashLink (untuk navigasi ke ID di halaman Home dari rute mana pun)
import { HashLink } from 'react-router-hash-link'; 
import { FaRocket } from 'react-icons/fa'; 

function Header() {
  
  // Fungsi untuk menggulir ke atas saat logo diklik (hanya di halaman Home)
  const scrollToTop = () => {
    // Memastikan hanya scroll ke atas tanpa perlu Link
    window.scrollTo(0, 0); 
  };
  
  // HashLink scroll function (opsional, menggunakan default HashLink behavior)
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; // Offset untuk navbar yang sticky (sekitar tinggi navbar)
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom shadow-sm py-3 px-md-3">
      <Container fluid className="px-lg-5">
        
        {/* LOGO REPUBLIKWEB: Menuju ke Home dan Scroll ke Atas */}
        {/* Menggunakan HashLink untuk kembali ke bagian paling atas Home (#) */}
        <Navbar.Brand 
            as={HashLink} 
            to="/#" 
            scroll={scrollToTop} // Gunakan fungsi scrollToTop untuk reset posisi
            className="fw-bold fs-5 text-primary-dark d-flex align-items-center"
        >
          <FaRocket className="me-2 text-orange-gradient" size={24} />
          <span className="logo-text">Republikweb</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto nav-links-custom">
            
            {/* TAUTAN SCROLL INTERNAL (KE HOME DARI RUTE MANA PUN) */}
            {/* Menggunakan HashLink dengan scrollWithOffset untuk sticky navbar */}
            <Nav.Link as={HashLink} to="/#tentang" scroll={scrollWithOffset} className="nav-link-custom">Tentang</Nav.Link>
            <Nav.Link as={HashLink} to="/#posisi" scroll={scrollWithOffset} className="nav-link-custom">Posisi</Nav.Link>
            <Nav.Link as={HashLink} to="/#galeri" scroll={scrollWithOffset} className="nav-link-custom">Galeri</Nav.Link>
            <Nav.Link as={HashLink} to="/#testimoni" scroll={scrollWithOffset} className="nav-link-custom">Testimoni</Nav.Link>
            <Nav.Link as={HashLink} to="/#faq" scroll={scrollWithOffset} className="nav-link-custom">FAQ</Nav.Link>
            <Nav.Link as={HashLink} to="/#kontak" scroll={scrollWithOffset} className="nav-link-custom">Kontak</Nav.Link>
          </Nav>
          
          {/* Tombol CTA DAFTAR SEKARANG */}
          {/* Menggunakan HashLink untuk menuju ke #daftar di Home dari rute mana pun */}
          <Nav className="ms-lg-3">
            <Button as={HashLink} to="/#daftar" scroll={scrollWithOffset} className="btn-orange px-4 fw-semibold shadow-lg">
              Daftar Sekarang
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
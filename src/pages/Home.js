import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import './Home.css'; // PENTING: Mengimpor file CSS yang sesuai

// --- Komponen Pihak Ketiga (React-Bootstrap) ---
import {
    Container, Row, Col, Card, ListGroup, Button, Form, Accordion, Navbar, Nav,
    Alert, InputGroup
} from 'react-bootstrap';

// --- Komponen Pihak Ketiga (React-Icons) ---
import {
    FaRocket, FaCheck, FaStar, FaCode, FaVideo, FaChartLine, // Menggunakan FaCheck untuk centang oranye
    FaSearch, FaRegQuestionCircle, FaMapMarkerAlt, FaEnvelope,
    FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaTrophy,
    FaUserTie, FaPalette, FaLaptopCode, FaCalendarAlt, FaQuoteRight, FaPaperPlane, FaUserCheck,
    FaUserFriends,
    FaChevronUp,
    FaUpload
} from 'react-icons/fa';

// =================================================================
// ---------------------- KOMPONEN PEMBANTU ------------------------
// =================================================================

// Card Fitur Utama (Sertifikat, Mentoring, Proyek, Fleksibel)
const FeatureCard = ({ icon, title, text }) => (
    <Card className="feature-card h-100 p-4 shadow-sm border-0 fade-in-up">
        <Card.Body className="text-center p-0">
            {/* Class 'text-primary' di sini sudah dihapus dari React.cloneElement karena warna ikon dikontrol langsung oleh CSS .feature-card .icon-wrapper-lg svg */}
            <div className="icon-wrapper-lg mx-auto mb-3 d-inline-flex justify-content-center align-items-center rounded-3">
                {React.cloneElement(icon, { size: 30 })} {/* Ikon akan mewarisi warna dari CSS */}
            </div>
            {/* Menggunakan class 'card-title' untuk menyesuaikan warna dan font-weight */}
            <Card.Title className="card-title">{title}</Card.Title> 
            <Card.Text className="card-text">{text}</Card.Text>
        </Card.Body>
    </Card>
);

// Card Posisi Magang
const PositionCard = ({ icon, title, description, requirements, linkTo, buttonClass = 'btn-position-apply' }) => ( // Default class diubah
    <Card className="position-card h-100 shadow-sm border-0 fade-in-up">
        <Card.Body className="card-body-position">
            <div className='card-content-top'>
                <div className="icon-wrapper-lg text-white mb-3">
                    {React.cloneElement(icon, { size: 28 })}
                </div>
                <Card.Title as="h5" className="fw-bold text-primary-dark">{title}</Card.Title>
                <Card.Text className="text-gray-text my-3 small-desc small">{description}</Card.Text>

                <h6 className="text-primary-dark mt-4 fw-bold small">Requirements:</h6>
                <ListGroup variant="flush" className="requirements-list">
                    {requirements.map((req, index) => (
                        <ListGroup.Item key={index} className="px-0 bg-transparent text-gray-text small border-0 py-1">
                            <span className='me-2 requirement-bullet'>•</span>
                            {req}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className="mt-4">
                <HashLink
                    to={linkTo}
                    scroll={(el) => window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })}
                    className={`btn w-100 ${buttonClass}`}
                >
                    Apply Now <FaRocket className="ms-2" size={12}/>
                </HashLink>
            </div>
        </Card.Body>
    </Card>
);

// Komponen Testimonial
const TestimonialItem = ({ name, title, quote, imageSrc }) => (
    <div className="testimonial-card h-100 fade-in-up">
        <div className="d-flex align-items-center mb-3">
            <img
                src={imageSrc}
                alt={name}
                className="rounded-circle me-3 testimonial-img"
            />
            <div>
                <h5 className="fw-bold mb-0 text-primary-dark">{name}</h5>
                <p className="small text-muted mb-0">{title}</p>
            </div>
        </div>
        <div className="text-warning-custom mb-3">
            {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
        </div>
        <p className="testimonial-text small testimonial-quote">{quote}</p>
    </div>
);

// Komponen FAQ Item
const FaqItem = ({ eventKey, question, answer }) => (
    <Accordion.Item eventKey={eventKey} className="mb-3 border-0 rounded-3 shadow-sm faq-item">
        <Accordion.Header className="fw-semibold">{question}</Accordion.Header>
        <Accordion.Body className="text-gray-text small">
            {answer}
        </Accordion.Body>
    </Accordion.Item>
);

// Komponen Footer Baru (Sesuai Gambar 4 Kolom)
const FooterComponent = () => (
    <footer className="footer-bg footer-custom">
        <Container>
            <Row className="g-4">
                <Col lg={4} md={6}>
                    <HashLink to="/#home" scroll={(el) => window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })} className="d-flex align-items-center text-decoration-none">
                        <FaRocket className="text-secondary-color me-2 fs-3"/>
                        <span className="fw-bold fs-4 text-white">Republikweb</span>
                    </HashLink>
                    {/* Menggunakan text-white-80 untuk teks deskripsi footer */}
                    <p className="footer-about-text text-white-80">
                        Agensi digital yang fokus pada website development, app creation, dan SEO services. Membangun karir digital Anda bersama kami.
                    </p>
                </Col>

                <Col lg={2} md={6}>
                    <h5 className="footer-section-title">Quick Links</h5>
                    <ul className="footer-links-list">
                        <li><HashLink to="/#tentang">Tentang Program</HashLink></li>
                        <li><HashLink to="/#posisi">Posisi Tersedia</HashLink></li>
                        <li><HashLink to="/#galeri">Galeri</HashLink></li>
                        <li><HashLink to="/#testimoni">Testimonial</HashLink></li>
                        <li><HashLink to="/#faq">FAQ</HashLink></li>
                    </ul>
                </Col>

                <Col lg={3} md={6}>
                    <h5 className="footer-section-title">Kontak Kami</h5>
                    <ul className="contact-info-footer">
                        <li><span className="icon-wrapper-footer"><FaMapMarkerAlt/></span> Jl. Digital No. 123, Yogyakarta 55281</li>
                        {/* Menggunakan text-white-80 untuk link email/wa di footer */}
                        <li><span className="icon-wrapper-footer"><FaEnvelope/></span> <a href="mailto:info@republikweb.net" className='text-white-80 text-decoration-none'>info@republikweb.net</a></li>
                        <li><span className="icon-wrapper-footer"><FaWhatsapp/></span> <a href="https://wa.me/6281234567890" target='_blank' rel="noopener noreferrer" className='text-white-80 text-decoration-none'>+62 812-3456-7890</a></li>
                    </ul>
                </Col>

                <Col lg={3} md={6}>
                    <h5 className="footer-section-title">Newsletter</h5>
                    {/* Menggunakan text-white-70 untuk teks newsletter */}
                    <p className="text-white-70 small">
                        Dapatkan update terbaru tentang program magang kami!
                    </p>
                    <Form className="newsletter-form">
                        <InputGroup className="newsletter-input-group">
                            <Form.Control
                                type="email"
                                placeholder="Email Anda"
                                aria-label="Email Address"
                            />
                            <Button className="btn-orange">
                                <FaEnvelope size={16} />
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>

            <div className="footer-bottom-bar d-flex justify-content-between flex-wrap">
                <p className="mb-0">
                    © {new Date().getFullYear()} Republikweb.net. All rights reserved.
                </p>
                <div>
                    <a href="#!" className="me-3">Privacy Policy</a>
                    <a href="#!">Terms of Service</a>
                </div>
            </div>
        </Container>
    </footer>
);

// =================================================================
// ---------------------- KOMPONEN UTAMA HOME ----------------------
// =================================================================

const Home = () => {
    // [STATE DAN HOOKS TETAP SAMA]
    const [scrolled, setScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [formData, setFormData] = useState({
        nama: '', email: '', wa: '', universitas: '', jurusan: '', posisi: '', portfolio: '', motivation: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // [HANDLE CHANGE DAN SUBMIT TETAP SAMA]
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['nama', 'email', 'wa', 'universitas', 'jurusan', 'posisi', 'motivation', 'portfolio'];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isFormValid) {
        setSubmissionStatus('error');
        setTimeout(() => setSubmissionStatus(null), 5000);
        return;
    }
    

        console.log("Data Pendaftaran:", formData);
        setSubmissionStatus('success');

        setFormData({
            nama: '', email: '', wa: '', universitas: '', jurusan: '', posisi: '', portfolio: '', motivation: ''
        });

        document.getElementById('daftar').scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => setSubmissionStatus(null), 5000);
    };


    // --- DATA STATIS ---
    const positionsData = [
        // Posisi default: menggunakan btn-position-apply (Biru default, hover Oranye)
        { icon: <FaCode />, title: "Programmer", description: "Bergabunglah dengan tim development kami dan kembangkan keterampilan programming Anda menggunakan teknologi modern seperti React, Node.js, dan database management.", requirements: ["Mahasiswa/i aktif IT/Computer Science", "Memahami dasar HTML/CSS/JS", "Passion dalam coding"], linkTo: "/#daftar" },
        { icon: <FaUserFriends />, title: "Content Creator", description: "Tuangkan kreativitas Anda dalam membuat konten digital yang menarik. Anda akan belajar content planning, copywriting, dan strategi konten untuk berbagai platform digital.", requirements: ["Kreatif dan update tren digital", "Memiliki kemampuan menulis yang baik", "Familiar dengan social media platforms"], linkTo: "/#daftar" },
        // Posisi yang tombolnya selalu oranye (menggunakan kelas 'btn-orange-always')
        { icon: <FaVideo />, title: "Video Editor", description: "Wujudkan ide kreatif menjadi video yang memukau. Anda akan belajar video editing, motion graphics, dan storytelling visual menggunakan tools professional.", requirements: ["Menguasai software editing (Adobe Premiere)", "Paham After Effects", "Memiliki passion visual storytelling"], linkTo: "/#daftar", buttonClass: 'btn-position-apply btn-orange-always' },
        { icon: <FaChartLine />, title: "Digital Marketing", description: "Pelajari strategi marketing di era digital. Anda akan belajar social media marketing, ads management, analytics, dan campaign strategy untuk meningkatkan brand awareness.", requirements: ["Tertarik dengan digital marketing", "Memahami dasar social media management", "Analytical thinking dan data-driven"], linkTo: "/#daftar", buttonClass: 'btn-position-apply btn-orange-always' },
        // Posisi default lagi: menggunakan btn-position-apply (Biru default, hover Oranye)
        { icon: <FaSearch />, title: "SEO Specialist", description: "Kuasai seni optimasi mesin pencari. Anda akan belajar keyword research, on-page/off-page SEO, technical SEO, dan strategi untuk meningkatkan ranking website di Google.", requirements: ["Memahami dasar SEO dan cara kerja search engine", "Analytical dan detail oriented", "Familiar dengan Google Analytics/Search Console"], linkTo: "/#daftar" },
        { icon: <FaPalette />, title: "UI/UX Designer", description: "Ciptakan pengalaman digital yang user-friendly. Anda akan belajar user research, wireframing, prototyping, dan design system menggunakan tools seperti Figma.", requirements: ["Menguasai Figma atau Adobe XD", "Memahami prinsip dasar UI/UX", "Memiliki portfolio design"], linkTo: "/#daftar" },
    ];
    
    // [DATA TESTIMONIAL, FAQ, GALLERY TETAP SAMA]
    const testimonialData = [
        { name: "Andi Pratama", title: "Programmer Intern", quote: "Pengalaman magang di Republikweb benar-benar membuka wawasan saya tentang dunia web development. Mentornya sangat supportive dan proyeknya real-world!", imageSrc: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Siti Nurhaliza", title: "Content Creator Intern", quote: "Selama 3 bulan magang, saya belajar banyak tentang content strategy dan copywriting. Tim yang solid dan lingkungan kerja yang fun. Highly recommended!", imageSrc: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Budi Santoso", title: "Digital Marketing Intern", quote: "Magang di Republikweb memberikan saya pengalaman hands-on dalam mengelola campaign digital. Ilmu yang didapat sangat applicable untuk karir saya ke depan.", imageSrc: "https://randomuser.me/api/portraits/men/88.jpg" },
    ];
    const faqData = [
        { q: "Apakah program magang ini berbayar?", a: "Tidak, program magang di Republikweb 100% **GRATIS** dan tidak dipungut biaya apapun. Kami memberikan sertifikat resmi di akhir program." },
        { q: "Berapa lama durasi program magang?", a: "Durasi program adalah **3 bulan**, dengan jadwal yang fleksibel dan dapat didiskusikan untuk menyesuaikan dengan jadwal kuliah Anda." },
        { q: "Apakah bisa magang secara remote/online?", a: "Ya, program kami bersifat **remote-first (Work From Home)**. Anda dapat bergabung dari mana saja di Indonesia." },
        { q: "Apa saja yang perlu dipersiapkan?", a: "Anda perlu menyiapkan laptop/komputer pribadi, koneksi internet yang stabil, dan portfolio (jika ada)." },
        { q: "Apakah akan mendapatkan sertifikat?", a: "Ya, setelah menyelesaikan program 3 bulan, Anda akan mendapatkan **Sertifikat Magang Resmi** dari Republikweb." },
        { q: "Kapan periode pendaftaran dibuka?", a: "Pendaftaran dibuka sepanjang tahun. Kami mereview aplikasi setiap bulan untuk batch berikutnya." },
        { q: "Bagaimana proses seleksinya?", a: "Proses seleksi meliputi: (1) Pendaftaran online, (2) Review CV/Portfolio, dan (3) Wawancara Online (Zoom/Google Meet)." }
    ];
    const positionOptions = positionsData.map(pos => pos.title);
    const galleryData = [
        { src: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Team Meeting", description: "Weekly team sync untuk diskusi project dan knowledge sharing" },
        { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", title: "Workspace", description: "Ruang kerja yang nyaman dan kondusif untuk produktivitas" },
        { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80", title: "Batch Success", description: "Perayaan kelulusan dan sukses batch magang" },
        { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", title: "Brainstorming", description: "Diskusi kelompok untuk ide-ide kreatif" },
    ];


    // [UTILITY & EFFECT TETAP SAMA]
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; // Offset lebih besar karena navbar lebih tinggi
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // =================================================================
    // ---------------------------- RENDER -----------------------------
    // =================================================================

    return (
        <div className="page-wrapper">

            {/* 0. NAVIGASI */}
            <Navbar expand="lg" fixed="top" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
                <Container>
                    <Navbar.Brand as={HashLink} to="/#home" scroll={scrollWithOffset} className="fw-bold">
                        <FaRocket className="text-secondary-color me-2"/> Republikweb
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/#tentang" scroll={scrollWithOffset}>Tentang</Nav.Link>
                            <Nav.Link as={HashLink} to="/#posisi" scroll={scrollWithOffset}>Posisi</Nav.Link>
                            <Nav.Link as={HashLink} to="/#galeri" scroll={scrollWithOffset}>Galeri</Nav.Link>
                            <Nav.Link as={HashLink} to="/#testimoni" scroll={scrollWithOffset}>Testimoni</Nav.Link>
                            <Nav.Link as={HashLink} to="/#faq" scroll={scrollWithOffset}>FAQ</Nav.Link>
                            <Nav.Link as={HashLink} to="/#kontak" scroll={scrollWithOffset}>Kontak</Nav.Link>
                            <Button as={HashLink} to="/#daftar" scroll={scrollWithOffset} className="btn-orange ms-lg-3">
                                Daftar Sekarang
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* 1. HERO SECTION */}
            <section className="hero-bg" id="home">
                <Container className="text-center py-5 position-relative z-1">
                    <FaRocket className="hero-icon mb-4 fade-in-up" size={50} />

                    {/* Menghapus inline style warna dari h1 dan menggunakan class CSS text-secondary-color */}
                    <h1 className="display-3 fw-bold text-glow fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Bangun Karier Digitalmu <br/>
                        <span className="text-secondary-color">Bersama Republikweb!</span>
                    </h1>
                    {/* Menggunakan class text-white-70 yang baru untuk transparansi */}
                    <p className="lead mt-4 mb-5 mx-auto text-white-70 fade-in-up" style={{ animationDelay: '0.2s', maxWidth: '700px' }}>
                        Bergabunglah dengan program magang terbaik untuk mahasiswa dan fresh graduate. Kembangkan skill digital Anda bersama tim profesional dalam proyek nyata.
                    </p>

                    <Button as={HashLink} to="/#daftar" scroll={scrollWithOffset} className="btn-orange btn-lg fw-bold shadow-lg fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Daftar Sekarang <FaRocket className="ms-2" size={16}/>
                    </Button>

                    <Row className="mt-5 pt-5 text-center hero-stats fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Col><h3 className="fw-bold">3 Bulan</h3><p className='text-white-70'>Durasi Program</p></Col>
                        <Col><h3 className="fw-bold">6+</h3><p className='text-white-70'>Posisi Tersedia</p></Col>
                        <Col><h3 className="fw-bold">100%</h3><p className='text-white-70'>Gratis & Bersertifikat</p></Col>
                    </Row>
                </Container>
                <div className='hero-wave-bottom'></div>
            </section>

            {/* 2. TENTANG PROGRAM MAGANG & MANFAAT */}
            <section className="section-gray" id="tentang">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Tentang Program Magang</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Program magang 3 bulan yang dirancang khusus untuk mengembangkan skill digital Anda dengan pengalaman kerja nyata di industri teknologi
                        </p>
                    </div>
                    {/* Feature Cards */}
                    <Row className="mt-5">
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaTrophy/>} title="Sertifikat Resmi" text="Dapatkan sertifikat magang yang diakui industri"/>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaUserTie/>} title="Mentoring Langsung" text="Bimbingan dari praktisi digital berpengalaman"/>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaLaptopCode/>} title="Proyek Real" text="Terlibat langsung dalam project client nyata"/>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaCalendarAlt/>} title="Fleksibel" text="Jadwal yang dapat disesuaikan dengan kuliah"/>
                        </Col>
                    </Row>

                    {/* Syarat & Manfaat (Blue Section) */}
                    <Row className="mt-5 pt-4 justify-content-center">
                        <Col lg={10}>
                            <div className="syarat-manfaat-row shadow-lg fade-in-up">
                                <div className="syarat-col">
                                    <h4 className="fw-bold text-white mb-4">Syarat Umum</h4>
                                    <ul className="list-unstyled syarat-list">
                                        {/* Menggunakan FaCheck dan kelas check-icon-orange */}
                                        <li><FaCheck className="check-icon-orange" /> Mahasiswa aktif atau fresh graduate (max 1 tahun lulus)</li>
                                        <li><FaCheck className="check-icon-orange" /> Dapat berkomunikasi dengan baik dalam tim</li>
                                        <li><FaCheck className="check-icon-orange" /> Memiliki laptop/komputer pribadi</li>
                                        <li><FaCheck className="check-icon-orange" /> Berkomitmen untuk program 3 bulan penuh</li>
                                        <li><FaCheck className="check-icon-orange" /> Memiliki passion dan motivasi tinggi untuk belajar</li>
                                    </ul>
                                </div>
                                <div className="manfaat-col">
                                    <h4 className="fw-bold text-white mb-4">Yang Akan Kamu Dapatkan</h4>
                                    <ul className="list-unstyled manfaat-list">
                                        {/* Menggunakan FaStar dan kelas star-icon-orange */}
                                        <li><FaStar className="star-icon-orange" /> Pengalaman kerja di agensi digital profesional</li>
                                        <li><FaStar className="star-icon-orange" /> Portfolio project nyata untuk career development</li>
                                        <li><FaStar className="star-icon-orange" /> Networking dengan profesional industri</li>
                                        <li><FaStar className="star-icon-orange" /> Sertifikat magang resmi dari Republikweb</li>
                                        <li><FaStar className="star-icon-orange" /> Peluang karir setelah program berakhir</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 3. POSISI YANG TERSEDIA */}
            <section className="section-light" id="posisi">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Posisi Magang yang Tersedia</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Temukan posisi yang sesuai dengan minat dan passion Anda di dunia digital
                        </p>
                    </div>
                    <Row className="mt-5">
                        {positionsData.map((pos, index) => (
                            <Col lg={4} md={6} className="mb-4" key={index}>
                                {/* Menggunakan PositionCard dengan buttonClass yang sudah diatur */}
                                <PositionCard icon={pos.icon} {...pos} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* 4. GALERI KEGIATAN */}
            <section className="section-gray" id="galeri">
                <Container className="text-center">
                    <h2 className="fw-bold text-primary-dark fade-in-up">Galeri Kegiatan</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Lihat keseruan dan pengalaman peserta magang kami dalam berbagai kegiatan
                        </p>
                    </div>
                    <Row className="gallery-grid justify-content-center g-3 mt-4">
                        <Col lg={6} md={12} className={`gallery-item-lg`}>
                            <div className='gallery-image-wrapper fade-in-up' style={{ backgroundImage: `url(${galleryData[0].src})` }}>
                                <div className='gallery-overlay'>
                                    <p className='mb-0 fw-bold'>{galleryData[0].title}</p>
                                    <span className='small'>{galleryData[0].description}</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='gallery-image-wrapper gallery-item-sm fade-in-up mb-3 mb-lg-4' style={{ backgroundImage: `url(${galleryData[1].src})` }}>
                                <div className='gallery-overlay'>
                                    <p className='mb-0 fw-bold'>{galleryData[1].title}</p>
                                    <span className='small'>{galleryData[1].description}</span>
                                </div>
                            </div>
                            <div className='gallery-image-wrapper gallery-item-sm fade-in-up' style={{ backgroundImage: `url(${galleryData[3].src})` }}>
                                <div className='gallery-overlay'>
                                    <p className='mb-0 fw-bold'>{galleryData[3].title}</p>
                                    <span className='small'>{galleryData[3].description}</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className={`gallery-item-sm-tall`}>
                            <div className='gallery-image-wrapper fade-in-up' style={{ backgroundImage: `url(${galleryData[2].src})` }}>
                                <div className='gallery-overlay'>
                                    <p className='mb-0 fw-bold'>{galleryData[2].title}</p>
                                    <span className='small'>{galleryData[2].description}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 5. KATA MEREKA / TESTIMONI */}
            <section className="section-light" id="testimoni">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Kata Mereka</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Dengar pengalaman langsung dari alumni program magang Republikweb
                        </p>
                    </div>
                    <Row className="mt-5 justify-content-center">
                        {testimonialData.map((data, index) => (
                            <Col md={4} className="mb-4" key={index}>
                                <TestimonialItem {...data} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* 6. FAQ (Pertanyaan Sering Diajukan) */}
            <section className="section-gray" id="faq">
                <Container>
                    <div className="text-center fade-in-up mb-5">
                        {/* icon color sudah diatur di CSS .hero-icon */}
                        <FaRegQuestionCircle size={50} className="text-secondary-color mb-3"/>
                        <h2 className="fw-bold mb-3 text-primary-dark">Pertanyaan yang Sering Diajukan</h2>
                        <div className="section-lead">
                            <p>
                                Temukan jawaban untuk pertanyaan umum seputar program magang kami
                            </p>
                        </div>
                    </div>
                    <Row className="justify-content-center mt-5">
                        <Col lg={8} className="fade-in-up">
                            <Accordion className="faq-accordion">
                                {faqData.map((item, index) => (
                                    <FaqItem
                                        key={index}
                                        eventKey={index.toString()}
                                        question={item.q}
                                        answer={item.a}
                                    />
                                ))}
                            </Accordion>
                            <div className="text-center mt-5 fade-in-up">
                                <p className="mb-2 text-gray-text">Masih ada pertanyaan lain?</p>
                                <HashLink to="/#kontak" scroll={scrollWithOffset} className="fw-bold text-secondary-color text-decoration-none">
                                    Hubungi Kami <FaPaperPlane className="ms-1" size={12}/>
                                </HashLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 7. KONTAK SECTION */}
            <section id="kontak" className="contact-section section-light-blue">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Hubungi Kami</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Punya pertanyaan? Tim kami siap membantu Anda
                        </p>
                    </div>
                    <Row className="mt-5">
                        {/* Kolom Informasi Kontak dan Social Links */}
                        <Col md={5} className="fade-in-up mb-5 mb-md-0">
                            <h4 className="fw-bold text-primary-dark mb-4">Informasi Kontak</h4>

                            <ul className="list-unstyled contact-info">
                                <li className="d-flex align-items-start">
                                    <div className="icon-contact-wrapper"><FaMapMarkerAlt /></div>
                                    <div>
                                        <span className="fw-semibold text-primary-dark d-block">Alamat Kantor</span>
                                        Jl. Digital No. 123, Yogyakarta<br/>
                                        Daerah Istimewa Yogyakarta 55281
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="icon-contact-wrapper"><FaEnvelope /></div>
                                    <div>
                                        <span className="fw-semibold text-primary-dark d-block">Email</span>
                                        {/* Memastikan link email menggunakan text-primary */}
                                        <a href="mailto:info@republikweb.net" className="d-block text-decoration-none text-primary">info@republikweb.net</a>
                                        <a href="mailto:internship@republikweb.net" className="d-block text-decoration-none text-primary">internship@republikweb.net</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start">
                                    <div className="icon-contact-wrapper"><FaWhatsapp /></div>
                                    <div>
                                        <span className="fw-semibold text-primary-dark d-block">WhatsApp</span>
                                        {/* Memastikan link WhatsApp menggunakan text-primary */}
                                        <a href="https://wa.me/6281234567890" target='_blank' rel="noopener noreferrer" className="d-block text-decoration-none text-primary">+62 812-3456-7890</a>
                                    </div>
                                </li>
                            </ul>

                            <h4 className="fw-bold text-primary-dark mt-5 mb-3">Ikuti Kami</h4>
                            <div className="social-links">
                                <a href="#!" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                                <a href="#!" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
                                <a href="#!" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
                                <a href="#!" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
                            </div>
                        </Col>

                        {/* Kolom Jam Operasional dan Peta */}
                        <Col md={7} className="fade-in-up">
                            <h4 className="fw-bold text-primary-dark mb-4">Jam Operasional</h4>
                            <Card className="p-3 mb-4 shadow-sm border-0 op-hour-card">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span className="fw-semibold">Senin - Jumat</span> <span className='text-gray-text'>08:00 - 17:00 WIB</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span className="fw-semibold">Sabtu</span> <span className='text-gray-text'>09:00 - 15:00 WIB</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span className="fw-semibold">Minggu</span> <span className="text-danger">Tutup</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>

                            <h4 className="fw-bold text-primary-dark mb-4">Lokasi Kami</h4>
                            <div className="map-placeholder shadow-sm">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0789718428867!2d110.3703738147776!3d-7.795583794380121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5789f2122615%3A0x6a0f7a6f2b7f3a8b!2sYogyakarta%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1678888888888!5m2!1sen!2sid"
                                    title="Kantor Republikweb"
                                ></iframe>
                            </div>
                            <p className="text-muted small mt-3 px-3">Kantor kami bersifat *Remote-Friendly*. Magang dilakukan secara WFH/Online.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* 8. DAFTAR SEKARANG / FORMULIR */}
            <section id="daftar" className="section-light-gray-form">
                <Container className="py-5">
                    <div className='text-center mb-5 fade-in-up'>
                        <h2 className="fw-bold text-primary-dark">Daftar Sekarang</h2>
                        <div className="section-lead">
                            <p className="text-gray-text">
                                Lengkapi form di bawah ini dan mulai perjalanan karir digitalmu!
                            </p>
                        </div>
                    </div>

                    <Row className="justify-content-center">
                        <Col lg={8} className="fade-in-up">
                            {submissionStatus === 'success' && (
                                <Alert variant="success" className="mb-4 text-center fw-bold">
                                    <FaUserCheck className="me-2"/> Pendaftaran Anda telah berhasil terkirim! Kami akan segera menghubungi Anda.
                                </Alert>
                            )}
                            {submissionStatus === 'error' && (
                                <Alert variant="danger" className="mb-4 text-center fw-bold">
                                    Mohon lengkapi semua bidang wajib (*) sebelum mengirim.
                                </Alert>
                            )}
                            <Card className="p-4 border-0 registration-card">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="fw-semibold">Nama Lengkap <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="text" id="nama" value={formData.nama} onChange={handleChange} placeholder="John Doe" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="fw-semibold">Email <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="fw-semibold">No. WhatsApp <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="tel" id="wa" value={formData.wa} onChange={handleChange} placeholder="081234567890" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="fw-semibold">Sekolah / Universitas <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="text" id="universitas" value={formData.universitas} onChange={handleChange} placeholder="Universitas XYZ" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="fw-semibold">Jurusan <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="text" id="jurusan" value={formData.jurusan} onChange={handleChange} placeholder="Teknik Informatika" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label className="fw-semibold">Posisi yang Dilamar <span className="text-danger">*</span></Form.Label>
                                                    <Form.Select id="posisi" value={formData.posisi} onChange={handleChange} required>
                                                        <option value="">Pilih Posisi</option>
                                                        {positionOptions.map((pos, index) => (
                                                            <option key={index} value={pos}>{pos}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3 mt-3">
                                            <Form.Label className="fw-semibold">Link CV / Portfolio <span className="text-danger">*</span></Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><FaUpload /></InputGroup.Text>
                                                <Form.Control type="url" id="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://drive.google.com/... atau portfolio URL" required />
                                            </InputGroup>
                                            <Form.Text className="text-muted">
                                                Upload CV ke Google Drive/Behance/Github atau share link portfolio Anda.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-semibold">Motivasi <span className="text-danger">*</span></Form.Label>
                                            <Form.Control as="textarea" rows={4} id="motivation" value={formData.motivation} onChange={handleChange} placeholder="Ceritakan mengapa Anda tertarik bergabung dengan program magang Republikweb..." required />
                                        </Form.Group>

                                        <Button type="submit" className="btn-kirim-aplikasi w-100 btn-lg fw-bold">
                                            Kirim Aplikasi <FaPaperPlane className="ms-2" />
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 9. FOOTER BARU */}
            <FooterComponent />

            {/* Back To Top Button */}
            <button
                className={`back-to-top-btn ${showBackToTop ? 'show' : ''}`}
                onClick={scrollToTop}
            >
                <FaChevronUp size={20} />
            </button>

        </div>
    );
};

export default Home;
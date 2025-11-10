import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//
// PERBAIKAN: Jalur impor diubah dari './Home' menjadi './pages/Home'
// (Asumsi Home.js ada di dalam folder 'pages')
//
import Home from './pages/Home'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute utama menunjuk ke komponen Home */}
        <Route path="/" element={<Home />} />
        
        {/* Anda bisa menambahkan rute lain di sini nanti */}
        {/* <Route path="/halaman-lain" element={<HalamanLain />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
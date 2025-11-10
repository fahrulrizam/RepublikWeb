import React, { useState } from "react";

function FormulirMagang() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sekolah, setSekolah] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [posisi, setPosisi] = useState("");
  const [linkCv, setLinkCv] = useState("");
  const [motivasi, setMotivasi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama,
          email,
          whatsapp,
          sekolah,
          jurusan,
          posisi,
          link_cv: linkCv,
          motivasi,
        }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("❌ Error saat kirim:", error);
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Daftar Sekarang</h2>

      <input placeholder="Nama Lengkap" value={nama} onChange={(e) => setNama(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="No WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
      <input placeholder="Sekolah / Universitas" value={sekolah} onChange={(e) => setSekolah(e.target.value)} />
      <input placeholder="Jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)} />
      <input placeholder="Posisi yang Dilamar" value={posisi} onChange={(e) => setPosisi(e.target.value)} />
      <input placeholder="Link CV / Portfolio" value={linkCv} onChange={(e) => setLinkCv(e.target.value)} />
      <textarea placeholder="Motivasi" value={motivasi} onChange={(e) => setMotivasi(e.target.value)} />

      <button type="submit">Kirim Aplikasi</button>
    </form>
  );
}

export default FormulirMagang;

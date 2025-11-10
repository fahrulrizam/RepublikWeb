const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Variabel penting
// Tentukan path untuk file JSON penyimpanan data, agar bisa diakses di manapun.
const filePath = path.join(__dirname, "registration.json");

// Middleware
// Mengizinkan Cross-Origin Resource Sharing (CORS)
// Ini penting agar React (misalnya di port 3000) bisa berkomunikasi dengan server (di port 5000)
app.use(cors());
// Mengizinkan server membaca data JSON dari body request
app.use(express.json());

// --- Route GET untuk testing di browser ---
// Anda bisa buka http://localhost:5000/api/register di browser untuk tes
app.get("/api/register", (req, res) => {
  res.status(200).send("API /api/register siap menerima POST request!");
});

// --- Route POST untuk pendaftaran ---
// Ini adalah endpoint yang akan dipanggil oleh client saat form di-submit
app.post("/api/register", (req, res) => {
  const data = req.body; // data dari client (React)

  // Validasi data dasar (pastikan body tidak kosong)
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ message: "Bad Request: Body data tidak boleh kosong" });
  }
  
  // 1. Baca file JSON yang sudah ada
  fs.readFile(filePath, "utf8", (err, fileData) => {
    let registrations = [];
    
    // Jika file tidak ada atau ada error saat membaca (err), kita akan mulai dengan array kosong.
    // Jika file ada dan tidak kosong, coba parse datanya.
    if (!err && fileData) {
      try {
        registrations = JSON.parse(fileData);
        // Pastikan itu adalah array, jika tidak, inisialisasi ulang.
        if (!Array.isArray(registrations)) {
            registrations = [];
        }
      } catch (parseErr) {
        console.error("Error parsing JSON. File mungkin korup. Memulai dengan array kosong:", parseErr.message);
        registrations = [];
      }
    }

    // 2. Tambahkan data baru ke dalam array
    console.log("Menerima data baru:", data);
    registrations.push({ 
        id: Date.now(), // Tambahkan ID unik sederhana
        timestamp: new Date().toISOString(),
        ...data 
    });

    // 3. Tulis kembali (overwrite) seluruh array ke file
    // Gunakan indentasi 2 spasi untuk format JSON yang rapi (null, 2)
    fs.writeFile(filePath, JSON.stringify(registrations, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error menulis file:", writeErr);
        return res.status(500).json({ message: "Gagal menyimpan data di server" });
      }

      console.log("Data berhasil disimpan ke registration.json");
      // Kirim respon sukses kembali ke client
      res.status(201).json({ 
        message: "Data pendaftaran berhasil disimpan!", 
        data: registrations[registrations.length - 1] // Kirim kembali data yang baru disimpan
      });
    });
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  // Variabel filePath sekarang bisa diakses di sini tanpa error
  console.log("File penyimpanan data ada di:", filePath);
});
import React from "react";
import { Container, Image } from "react-bootstrap";
import privacyPolicyImage from "../assets/img/karciskita logo.png"; // Ganti dengan path yang benar ke gambar privasi Anda

const PrivacyPolicyPage = () => {
  return (
    <Container
      className="d-flex flex-column align-items-start"
      style={{ maxWidth: "1200px", marginLeft: "0", paddingLeft: "0" }} // Menambahkan gaya untuk menggeser kontainer ke kiri
    >
      <h1
        style={{
          marginLeft: "100px",
          paddingLeft: "0",
          color: "black",
          fontSize: "48px",
        }}
      >
        Privacy Policy<br></br>
        <br></br>
      </h1>{" "}
      {/* Menambahkan gaya untuk menggeser h1 ke kiri */}
      <p
        style={{
          marginLeft: "100px",
          paddingLeft: "0",
          textAlign: "justify",
        }}
      >
        {" "}
        {/* Menambahkan gaya untuk menggeser paragraf ke kiri */}
        Selamat datang di situs web Karcis Kita. Kami berkomitmen untuk
        melindungi privasi dan data pribadi pengguna kami. Kebijakan privasi ini
        menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan
        melindungi data pribadi Anda saat Anda menggunakan layanan kami untuk
        membeli tiket event seminar dan konser. <br></br>
        <br></br>
        A. HUKUM DAN PERATURAN YANG BERLAKU <br></br>Kami mematuhi semua hukum
        dan peraturan yang berlaku terkait perlindungan data pribadi, termasuk
        namun tidak terbatas pada Undang-Undang Perlindungan Data Pribadi di
        Indonesia dan regulasi internasional lainnya yang relevan.<br></br>
        <br></br>B. PEROLEHAN DAN PERLINDUNGAN DATA PRIBADI PENGGUNA <br></br>
        Kami mengumpulkan data pribadi Anda dengan cara yang sah dan adil. Data
        yang kami kumpulkan termasuk, tetapi tidak terbatas pada, nama, alamat
        email, nomor telepon, dan informasi pembayaran. Kami menggunakan
        teknologi enkripsi dan prosedur keamanan lainnya untuk melindungi data
        pribadi Anda dari akses yang tidak sah, penggunaan yang tidak benar,
        atau pengungkapan.<br></br>
        <br></br>C. PENGGUNAAN DATA PRIBADI <br></br>Data pribadi yang kami
        kumpulkan digunakan untuk:
        <li>Memproses dan mengelola pembelian tiket Anda. </li>
        <li>
          Memberikan informasi tentang event dan layanan yang Anda minati.
        </li>
        <li>Meningkatkan layanan kami dan menyesuaikan pengalaman pengguna.</li>
        <li>
          Menghubungi Anda untuk tujuan layanan pelanggan. Mematuhi kewajiban
          hukum dan peraturan.
        </li>
        <br></br>D. PENGUNGKAPAN DATA PRIBADI PENGGUNA<br></br>Kami tidak akan
        mengungkapkan data pribadi Anda kepada pihak ketiga kecuali jika
        diperlukan untuk:
        <li>Memproses transaksi pembayaran. </li>
        <li>Mematuhi hukum atau perintah pengadilan.</li>
        <li>
          Melindungi hak, properti, atau keselamatan Karcis Kita, pengguna kami,
          atau publik.
        </li>
        <li>
          Penyedia layanan yang membantu kami dalam operasional situs web dan
          layanan kami, yang tunduk pada kewajiban kerahasiaan.
        </li>
        <br></br>E. PILIHAN PENGGUNA<br></br>Anda memiliki hak untuk:
        <li>Mengakses dan memperbarui data pribadi Anda. </li>
        <li>
          Meminta penghapusan data pribadi Anda, sesuai dengan ketentuan hukum
          yang berlaku.
        </li>
        <li>
          Menarik persetujuan Anda untuk pemrosesan data pribadi kapan saja.
        </li>
        <br></br>
        F. PENYIMPANAN, KEAMANAN, DAN PENGHAPUSAN DATA PRIBADI PENGGUNA<br></br>
        Kami menyimpan data pribadi Anda selama diperlukan untuk memenuhi tujuan
        yang dijelaskan dalam kebijakan privasi ini atau sebagaimana diwajibkan
        oleh hukum. Kami menerapkan langkah-langkah keamanan yang wajar untuk
        melindungi data pribadi Anda dari kehilangan, penyalahgunaan, dan akses
        yang tidak sah. Data pribadi yang tidak lagi diperlukan akan dihapus
        atau dianonimkan. <br></br>
        <br></br>
        G. COOKIE<br></br>
        Kami menggunakan cookie dan teknologi serupa untuk meningkatkan
        pengalaman pengguna di situs kami. Cookie adalah file kecil yang
        ditempatkan di perangkat Anda yang membantu kami memahami bagaimana Anda
        menggunakan situs kami. Anda dapat mengelola pengaturan cookie melalui
        browser Anda. <br></br>
        <br></br>
        H. LAYANAN PELANGGAN DAN KONTAK<br></br>
        Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan
        privasi ini atau praktik privasi kami, Anda dapat menghubungi layanan
        pelanggan kami melalui:
        <li>Email: massive_group8@gmail.com </li>
        <li>Telepon: +62 813 3546 7980</li>
        <li>Alamat: Jl. Massive No. 8, Jakarta Indonesia</li>
        Kami akan berusaha menanggapi pertanyaan dan kekhawatiran Anda sesegera
        mungkin<br></br>
        <br></br>
        I. PEMBAHARUSAN KEBIJAKAN APLIKASI WEBSITE<br></br>
        Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk
        mencerminkan perubahan dalam praktik kami atau hukum yang berlaku.
        Perubahan kebijakan privasi akan diumumkan di situs kami dan berlaku
        segera setelah dipublikasikan. Kami mendorong Anda untuk secara berkala
        meninjau kebijakan privasi ini agar tetap mendapatkan informasi tentang
        bagaimana kami melindungi data pribadi Anda. Terima kasih telah
        mempercayai Karcis Kita dalam mengelola informasi pribadi Anda. Kami
        berkomitmen untuk melindungi privasi dan data pribadi Anda dengan
        serius.
      </p>
    </Container>
  );
};

export default PrivacyPolicyPage;

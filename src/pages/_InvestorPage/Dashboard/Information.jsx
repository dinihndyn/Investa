import { Link } from 'react-router-dom';
import { Container } from '../../../component/atom/Container/Container';

export const Information = () => {
  return (
    <Container>
      <div className="bg-investa-primary-30">
        <div className="grid bg-investa-primary-70 px-10 rounded-lg p-5 text-white col-span-1 md:grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-2xl mb-3 font-bold">
              Ingin segera berinvestasi?
            </h1>
            <p>Tunggu apa lagi, segera Mulai Investasi sekarang juga!</p>
          </div>
          <div className="flex items-center justify-end">
            <Link to={'/investor/proyek'}>
              <div className="bg-investa-primary-50 w-fit py-3 px-5 mx-auto rounded">
                Mulai Investasi
              </div>
            </Link>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-semibold mb-3">Perhatian :</h1>
          <div className="px-10">
            <ol className="list-decimal">
              <li>
                Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan
                kesepakatan perdata antara Pemberi Pinjaman dengan Penerima
                Pinjaman, sehingga segala risiko yang timbul dari kesepakatan
                tersebut ditanggung sepenuhnya oleh masing-masing pihak.
              </li>
              <li>
                Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh
                Pemberi Pinjaman/Investor. Tidak ada lembaga atau otoritas
                negara yang bertanggung jawab atas risiko gagal bayar ini.
              </li>
              <li>
                Penerima Pinjaman harus mempertimbangkan tingkat Imbal hasil
                pinjaman dan biaya lainnya sesuai dengan kemampuan dalam
                melunasi pinjaman.
              </li>
              <li>
                Setiap kecurangan tercatat secara digital di dunia maya dan
                dapat diketahui masyarakat luas di media sosial.
              </li>
              <li>
                Pengguna harus membaca dan memahami informasi ini sebelum
                membuat keputusan menjadi Pemberi Pinjaman atau Penerima
                Pinjaman. Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan,
                tidak bertanggung jawab atas setiap pelanggaran atau
                ketidakpatuhan oleh Pengguna, baik Pemberi Pinjaman maupun
                Penerima Pinjaman (baik karena kesengajaan atau kelalaian
                Pengguna) terhadap ketentuan peraturan perundang-undangan maupun
                kesepakatan atau perikatan antara Penyelenggara dengan Pemberi
                Pinjaman dan / atau Penerima Pinjaman.
              </li>
              <li>
                Setiap transaksi dan kegiatan pinjam meminjam atau pelaksanaan
                kesepakatan mengenai pinjam meminjam antara atau yang melibatkan
                Penyelenggara, Pemberi Pinjaman, dan / atau Penerima Pinjaman
                wajib dilakukan melalui escrow account dan virtual account
                sebagaimana yang diwajibkan berdasarkan Peraturan Otoritas Jasa
                Keuangan Nomor 77/ POJK.01/2016 tentang Layanan Pinjam Meminjam
                Uang Berbasis Teknologi Informasi dan pelanggaran atau
                ketidakpatuhan terhadap ketentuan tersebut merupakan bukti telah
                terjadinya pelanggaran hukum oleh Penyelenggara sehingga
                Penyelenggara wajib menanggung ganti rugi yang diderita oleh
                masing-masing Pengguna sebagai akibat langsung dari pelanggaran
                hukum tersebut di atas tanpa mengurangi hak Pengguna yang
                menderita kerugian menurut Kitab Undang-Undang Hukum Perdata.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Container>
  );
};

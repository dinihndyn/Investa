import { Container } from '../../component/atom/Container/Container';
import ImgFoot1 from './assets/foot-1.png';
import ImgFoot2 from './assets/foot-2.png';
import ImgFoot3 from './assets/foot-3.png';
import ImgFoot4 from './assets/foot-4.png';
import ImgFoot5 from './assets/foot-5.png';

export const HomeBigFooter = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-10">
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-medium mb-4">Perhatian :</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ol className="list-decimal">
              <li>
                Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan
                kesepakatan perdata antara Pemberi Pinjaman dengan Penerima
                Pinjaman, sehingga segala risiko yang timbul dari kesepakatan
                tersebut ditanggung sepenuhnya oleh masing-masing pihak.
              </li>
              <li>
                Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh
                Pemberi Pinjaman. Tidak ada lembaga atau otoritas negara yang
                bertanggung jawab atas risiko gagal bayar ini.
              </li>
              <li>
                Penyelenggara dengan persetujuan dari masing-masing Pengguna
                (Pemberi Pinjaman dan/atau Penerima Pinjaman) dapat mengakses,
                memperoleh, menyimpan, mengelola, dan/atau menggunakan data
                pribadi Pengguna (`Pemanfaatan Data`) pada atau di dalam benda,
                perangkat elektronik (termasuk smartphone atau telepon seluler),
                perangkat keras (hardware) maupun lunak (software), dokumen
                elektronik, aplikasi atau sistem elektronik milik Pengguna atau
                yang dikuasai Pengguna, dengan memberitahukan tujuan, batasan,
                dan mekanisme Pemanfaatan Data tersebut kepada Pengguna yang
                bersangkutan sebelum memperoleh persetujuan yang dimaksud.
              </li>
            </ol>
            <ol start={4} className="list-decimal">
              <li>
                Pemberi Pinjaman yang belum memiliki pengetahuan dan pengalaman
                pinjam meminjam, disarankan untuk tidak menggunakan layanan ini.
              </li>
              <li>
                Penerima Pinjaman harus mempertimbangkan tingkat Imbal Hasil
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
                Pinjaman.
              </li>
              <li>
                Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak
                bertanggung jawab atas setiap pelanggaran atau ketidakpatuhan
                oleh Pengguna, baik Pemberi Pinjaman maupun Penerima Pinjaman
                (baik karena kesengajaan atau kelalaian Pengguna) terhadap
                ketentuan peraturan perundang-undangan maupun kesepakatan atau
                perikatan antara Penyelenggara dengan Pemberi Pinjaman dan/atau
                Penerima Pinjaman.
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
};

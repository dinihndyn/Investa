import { Button } from '../../component/atom/Button';

export const MainDashboard = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5">DASHBOARD</h1>
      <div>
        <div className="bg-investa-primary-70 p-10 rounded-lg flex justify-between items-center">
          <div className="text-white ">
            <h1 className="text-2xl font-semibold">Butuh Pinjaman?</h1>
            <p>Tunggu apa lagi, segera Ajukan Pinjaman sekarang juga!</p>
          </div>
          <div>
            <Button label={'Ajukan Pinjaman'} linkTo={'/ajukan-pinjaman'} />
          </div>
        </div>
        <div className="bg-investa-primary-10 py-10 px-14">
          <h1 className="font-semibold text-2xl mb-5">Perhatian :</h1>
          <p>
            <ol className="list-decimal">
              <li>
                Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan
                kesepakatan perdata antara Pemberi Pinjamandengan Penerima
                Pinjaman, sehingga segala risiko yang timbul dari kesepakatan
                tersebut ditanggung sepenuhnya oleh masing-masing pihak.
              </li>
              <li>
                Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh
                Pemberi Pinjaman. Tidak ada lembaga atau otoritas negara yang
                bertanggung jawab atas risiko gagal bayar ini.
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
                Pinjaman.
              </li>
              <li>
                Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak
                bertanggung jawab atas setiap pelanggaran atau ketidakpatuhan
                oleh Pengguna, baik Pemberi Pinjaman maupun Penerima Pinjaman
                (baik karena kesengajaan atau kelalaian Pengguna) terhadap
                ketentuan peraturan perundang-undangan maupun kesepakatan atau
                perikatan antara Penyelenggara dengan Pemberi Pinjaman dan /
                atau Penerima Pinjaman.
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
                menderita kerugian menurut Kitab Undang-Undang Hukum Perdata.{' '}
                <></>
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

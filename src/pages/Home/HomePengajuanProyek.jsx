import { Container } from '../../component/atom/Container/Container';
import { HeaderText } from '../../component/atom/HeaderText/HeaderText';
import { ListPengajuan } from './components/ListPengajuan';
import ImageFarmerHome from './assets/Farmer-amico 1.png';

export const HomePengajuanProyek = () => {
  return (
    <div>
      <Container>
        <HeaderText
          header={'Cara Mengajukan Proyek'}
          description={
            'Berikut adalah langkah-langkah untuk mengajukan proyek ke INVESTA'
          }
        />
        <div>
          <ListPengajuan
            number={1}
            title={'Mendaftarkan akun'}
            description={
              'Sebelum memulai semuanya di INVESTA, silahkan daftarkan diri kamu terlebih dahulu'
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-4"></div>
            <div className="col-span-12 lg:col-span-8">
              <ListPengajuan
                number={2}
                title={'Memenuhi Persyaratan'}
                description={
                  'Untuk memulai pembiayaan kamu harus memenuhi kelayakan yang telah kami tetapkan'
                }
              />
            </div>
            <div className="col-span-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 relative mb-3">
                <div className="col-span-5">
                  <img
                    src={ImageFarmerHome}
                    className="h-[20rem] top-[-80px] lg:left-[80px] absolute hidden lg:block"
                    alt="farmer"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-3 justify-evenly">
                  <ListPengajuan
                    number={3}
                    title={'Mengajukan proyek'}
                    description={
                      'Silahkan ajukan pembiayaan proyek kamu dengan cara mengisi formulir pengajuan secara lengkap untuk memenuhi syarat awal'
                    }
                  />
                  <ListPengajuan
                    number={4}
                    title={'Analisis, penilaian, dan persetujuan'}
                    description={
                      'Kami akan melakukan penilaian. Jika proyek disetujui, kami segera mengabarimu dalam waktu 1x24 jam kerja dan langsung menawarkan proyekmu ke pemodal'
                    }
                  />
                </div>
              </div>
            </div>
            <div className=" col-span-12 lg:col-span-4"></div>
            <div className=" col-span-12 lg:col-span-8">
              <ListPengajuan
                number={5}
                title={'Pencairan dana ke rekening petani'}
                description={
                  'Dana akan dicairkan dengan metode khusus yang dapat digunakan untuk kebutuhan proyekSebelum memulai semuanya di INVESTA, silahkan daftarkan diri kamu terlebih dahulu'
                }
              />
            </div>
          </div>
          <ListPengajuan
            number={6}
            title={'Pengembalian pinjaman'}
            description={
              'Peminjam membayar pinjaman melalui INVESTA sesuai jadwal yang telah disepakati sebelumnya. Pengembalian pinjaman dapat berupa hasil panen pertanian'
            }
          />
        </div>
      </Container>
    </div>
  );
};

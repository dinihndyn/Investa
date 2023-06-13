import { Container } from '../../component/atom/Container/Container';
import { HeaderText } from '../../component/atom/HeaderText/HeaderText';
import { CardHome } from './components/CardHome';
import CreditImage from './assets/Credit card-pana 1.png';
import ProyekImage from './assets/Customer relationship management-pana 1.png';
import PembeliImage from './assets/In no time-amico 1.png';

export const HomeDukungPetani = () => {
  return (
    <section>
      <Container className="py-10">
        <HeaderText
          header={'Dukung Petani Bersama INVESTA'}
          description={
            'Bersama INVESTA mari kita membantu kemajuan para petani'
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <CardHome
            header={'Memberikan Pinjaman Permodalan'}
            description={
              'Investa membantu sirkulasi pinjaman untuk mencapai imbal hasil yang optimal dengan meyediakan skema dan platform peminjaman yang aman'
            }
            image={CreditImage}
          />
          <CardHome
            header={'Mengajukan Proyek Permodalan'}
            description={
              'Kami mendukungmu sebagai petani dengan menyediakan bahan baku pertanian dan menghubungkanmu dengan calon pembeli'
            }
            image={ProyekImage}
          />
          <CardHome
            header={'Memberikan Pinjaman Permodalan'}
            description={
              'Investa juga menyediakan ekosistem untuk kamu membeli hasil pertanian dari petani binaan kami, maupun memasok hasil pertanianmu'
            }
            image={PembeliImage}
          />
        </div>
      </Container>
    </section>
  );
};

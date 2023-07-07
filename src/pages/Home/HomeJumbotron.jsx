import { useAuthUser } from 'react-auth-kit';
import { Button } from '../../component/atom/Button';
import { Container } from '../../component/atom/Container/Container';
import jumbotronImage from './assets/banner.png';
export const HomeJumbotron = () => {
  const userData = useAuthUser();

  return (
    <section
      id="jumbotron"
      className="min-h-[70vh] py-10 bg-[image:var(--image-url)] bg-cover bg-center flex items-center justify-center"
      style={{ '--image-url': `url(${jumbotronImage})` }}
    >
      <Container className="text-white">
        <h1 className="font-bold text-3xl mb-3 md:w-[80%]">
          Permodalan Pertanian Menjadi Lebih Mudah dan Cepat Dengan INVESTA
        </h1>
        <h2 className="mb-6 font-medium md:w-[50%]">
          Di sini kamu bisa memperoleh modal usaha ramah petani hingga Rp100
          juta dengan cara yang mudah serta bisa diakses dari mana saja dan
          kapan pun
        </h2>
        {userData() && userData().tipeAkun === 'Investor' ? (
          <Button linkTo={'/investor/proyek'} label={'Mulai Investasi'} />
        ) : (
          <Button linkTo={'/ajukan-pinjaman'} label={'Ajukan Pinjaman'} />
        )}
      </Container>
    </section>
  );
};

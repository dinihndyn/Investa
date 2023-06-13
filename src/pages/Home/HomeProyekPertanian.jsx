import { Button } from '../../component/atom/Button';
import { Container } from '../../component/atom/Container/Container';
import imageFire from './assets/fire.svg';

export const HomeProyekPertanian = () => {
  return (
    <section className="bg-investa-primary-30 relative overflow-hidden">
      <img
        src={imageFire}
        alt="fire-img"
        className="absolute hidden md:block -bottom-2 right-0"
      />
      <img
        src={imageFire}
        alt="fire-img"
        className="absolute hidden md:block -bottom-2 left-0"
      />
      <img
        src={imageFire}
        alt="fire-img"
        className="absolute hidden md:block -top-2 rotate-180 right-0"
      />
      <img
        src={imageFire}
        alt="fire-img"
        className="absolute hidden md:block -top-2 rotate-180 left-0"
      />
      <Container className={'text-center'}>
        <h1 className="text-3xl font-medium mb-3">
          Ayo mulai proyek pertanianmu bersama kami!
        </h1>
        <p className="mb-5">
          Fokus pada bisnismu, dan kami akan mengurus pembiayaan proyekmu
        </p>
        <Button linkTo={'#'} type={'button'} label={'Ajukan Pinjaman'} />
      </Container>
    </section>
  );
};

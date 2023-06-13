import { Container } from '../../component/atom/Container/Container';
import Post1 from './assets/post-1.png';
import Post2 from './assets/post-2.png';
import Post3 from './assets/post-3.png';
import Post4 from './assets/post-4.png';
import Post5 from './assets/post-5.png';
import Post6 from './assets/post-6.png';
import Post7 from './assets/post-7.png';
import Post8 from './assets/post-8.png';
import Post9 from './assets/post-9.png';
import Post10 from './assets/post-10.png';

export const HomeLiputan = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center justify-center gap-8 mb-10">
          <button className="bg-black text-white px-3 py-2 rounded">
            Diliput Oleh
          </button>
          <p className="font-bold text-xl">Penghargaan</p>
          <p className="font-bold text-xl">Mitra Kami</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 items-center justify-center">
          <div>
            <img className="mx-auto" src={Post1} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post2} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post3} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post4} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post5} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post6} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post7} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post8} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post9} alt="post" />
          </div>
          <div>
            <img className="mx-auto" src={Post10} alt="post" />
          </div>
        </div>
      </Container>
    </section>
  );
};

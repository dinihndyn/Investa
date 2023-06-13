import 'react-multi-carousel/lib/styles.css';
import { Container } from '../../component/atom/Container/Container';
import { HeaderText } from '../../component/atom/HeaderText/HeaderText';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const HomeCeritaMereka = () => {
  return (
    <div>
      <Container>
        <HeaderText
          header={'Cerita Mereka Tentang INVESTA'}
          description={
            'Kami mengumpulkan cerita dari mitra kami untuk membagikan pengalaman mereka bermodal maupun menerima pinjaman melalui platform kami.'
          }
        />
        <div>
          <Splide
            aria-label="My Favorite Images"
            // className='overflow-visible'
            options={{
              type: 'loop',
              perPage: 3,
              autoplay: true,
              perMove: 1,
              pagination: true,
              arrows: true,
              focus: 'center',
              breakpoints: {
                1024: {
                  perPage: 3,
                },
                900: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide className="bg-white shadow-lg mx-0 md:mx-10 h-fit rounded-lg p-5 items-center flex  gap-3">
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-2">
                  <div>
                    <img
                      src="https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg"
                      alt="photo"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">Ir. Soekam Pakardi 3</h1>
                    <p className="text-sm font-light">
                      Direktur Pengembangan Agribisnis PASKOMNAS
                    </p>
                    <p className="text-sm font-light">Off-taker</p>
                  </div>
                </div>

                <p className="text-sm">
                  Ada tiga keunggulan dari INVESTA, yaitu merupakan fast learner
                  company, improvement dalam hal kualitas dan kuantitas produk
                  bertumbuh pesat, serta fokus pada komoditas utama (mampu
                  menjadi spesialis cabai).
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="bg-white shadow-lg mx-0 md:mx-10 h-fit rounded-lg p-5 items-center flex  gap-3">
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-2">
                  <div>
                    <img
                      src="https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg"
                      alt="photo"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">Ir. Soekam Pakardi 1</h1>
                    <p className="text-sm font-light">
                      Direktur Pengembangan Agribisnis PASKOMNAS
                    </p>
                    <p className="text-sm font-light">Off-taker</p>
                  </div>
                </div>

                <p className="text-sm">
                  Ada tiga keunggulan dari INVESTA, yaitu merupakan fast learner
                  company, improvement dalam hal kualitas dan kuantitas produk
                  bertumbuh pesat, serta fokus pada komoditas utama (mampu
                  menjadi spesialis cabai).
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="bg-white shadow-lg mx-0 md:mx-10 h-fit rounded-lg p-5 items-center flex  gap-3">
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-2">
                  <div>
                    <img
                      src="https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg"
                      alt="photo"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-bold">Ir. Soekam Pakardi 2</h1>
                    <p className="text-sm font-light">
                      Direktur Pengembangan Agribisnis PASKOMNAS
                    </p>
                    <p className="text-sm font-light">Off-taker</p>
                  </div>
                </div>

                <p className="text-sm">
                  Ada tiga keunggulan dari INVESTA, yaitu merupakan fast learner
                  company, improvement dalam hal kualitas dan kuantitas produk
                  bertumbuh pesat, serta fokus pada komoditas utama (mampu
                  menjadi spesialis cabai).
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </div>
  );
};

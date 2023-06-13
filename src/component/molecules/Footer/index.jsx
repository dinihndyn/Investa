import { Container } from '../../atom/Container/Container';
import InvestaImg from '../../../assets/Investa.png';
import { Link } from 'react-router-dom';
import {
  AiTwotoneMail,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

export const Footer = () => {
  return (
    <>
      <section className="bg-investa-netral-30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="col-span-2">
              <img src={InvestaImg} alt="logo" className="mb-3 h-[40px]" />
              <p className="text-xl mb-3 font-medium text-[#615F5F]">
                PT INVESTA MEMBANGUN BANGSA
              </p>
              <p className="mb-3 text-[#615F5F]">
                Jalan Tebet Raya Nomor 34 Blok A Persil Nomor4, Kel. Tebet Timur
                Kec. Tebet, Kota Adm. Jakarta Selatan, Prov. DKI Jakarta
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-xl mb-5 text-[#615F5F]">
                Layanan
              </h1>
              <div>
                <Link to="#" className="text-lg text-[#615F5F]">
                  Ajukan Pinjaman
                </Link>
              </div>
              <div>
                <Link className="text-lg text-[#615F5F]" to="#">
                  Menjadi Mitra
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-xl mb-5 text-[#615F5F]">
                Layanan
              </h1>
              <div>
                <Link to="#" className="text-lg text-[#615F5F]">
                  Artikel
                </Link>
              </div>
              <div>
                <Link className="text-lg text-[#615F5F]" to="#">
                  Tentang Kami
                </Link>
              </div>
              <div>
                <Link className="text-lg text-[#615F5F]" to="#">
                  Pertanyaan
                </Link>
              </div>
              <div>
                <Link className="text-lg text-[#615F5F]" to="#">
                  Karir
                </Link>
              </div>
              <div>
                <Link className="text-lg text-[#615F5F]" to="#">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 text-center md:text-start">
              <h1 className="font-semibold text-xl mb-5 text-[#615F5F]">
                Layanan
              </h1>
              <div>
                <Link to="#" className="text-lg text-[#615F5F]">
                  +62 2121383317
                </Link>
              </div>
              <div>
                <Link
                  className="text-lg text-[#615F5F] flex items-center justify-center md:justify-start gap-2"
                  to="#"
                >
                  <AiTwotoneMail className="w-fit" /> <span>Email Kami</span>
                </Link>
              </div>
              <div>
                <Link
                  className="text-lg text-[#615F5F] flex items-center justify-center md:justify-start gap-2"
                  to="#"
                >
                  <AiOutlineInstagram className="w-fit" />{' '}
                  <span>Instagram</span>
                </Link>
              </div>
              <div>
                <Link
                  className="text-lg text-[#615F5F] flex items-center justify-center md:justify-start gap-2"
                  to="#"
                >
                  <AiFillYoutube className="w-fit" /> <span>Youtube</span>
                </Link>
              </div>
              <div>
                <Link
                  className="text-lg text-[#615F5F] flex items-center justify-center md:justify-start gap-2"
                  to="#"
                >
                  <AiFillLinkedin className="w-fit" /> <span>Linkedin</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-investa-netral-70 text-white px-5 py-3 flex justify-between">
        <div className="flex items-center text-sm gap-3">
          <AiOutlineCopyrightCircle />{' '}
          <span>2022 PT Investa Membangun Bangsa. All rights reserved</span>
        </div>
        <div className="flex gap-3 text-sm ">
          <Link to={'#'}>Syarat & Ketentuan</Link>
          <Link to={'#'}>Kebijakan Privasi</Link>
        </div>
      </section>
    </>
  );
};

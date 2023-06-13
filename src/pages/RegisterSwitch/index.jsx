import { Link } from 'react-router-dom';
import { Layouts } from '../../component/molecules/Layouts';

export const RegisterSwitch = () => {
  return (
    <Layouts title="Register Petani">
      <section className=" min-h-screen bg-investa-netral-0 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-1 bg-white p-10 md:px-16 md:py-28 rounded-md shadow-lg w-[70vw] ">
          <div className=" flex flex-col md:flex-row items-center justify-center">
            <h1 className=" text-xl md:text-3xl font-semibold text-investa-primary-50 text-center md:text-start">
              Selamat Datang di
            </h1>
            <img
              src="/assets/images/Investa.png"
              alt="logo-investa"
              className="ms-3"
            />
          </div>
          <div className="mb-6">
            <p className="text-center text-md font-semibold text-investa-netral-70">
              Daftar untuk melanjutkan sebagai
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to={'/register/petani'}>
              <div className="border-2 border-investa-primary-50 p-2 rounded-lg hover:bg-investa-primary-30 transition-all  text-center md:mx-[30%]">
                Petani
              </div>
            </Link>
            <Link to={'/register/investor'}>
              <div className="border-2 border-investa-primary-50 p-2 rounded-lg hover:bg-investa-primary-30 transition-all  text-center md:mx-[30%]">
                Investor
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

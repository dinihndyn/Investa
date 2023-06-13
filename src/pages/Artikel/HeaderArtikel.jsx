import { Link } from 'react-router-dom';

export const HeaderArtikel = () => {
  return (
    <>
      <section className="bg-investa-primary-50 px-28 py-3 my-2">
        <div className="flex flex-col md:flex-row items-center md:justify-start justify-center text-center gap-4 md:gap-10">
          <div>
            <Link
              className="hover:font-medium transition-all"
              to="artikel/home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              className="hover:font-medium transition-all"
              to="artikel/home"
            >
              Belajar Bertani
            </Link>
          </div>
          <div>
            <Link
              className="hover:font-medium transition-all"
              to="artikel/home"
            >
              Manajemen Keuangan
            </Link>
          </div>
          <div>
            <Link
              className="hover:font-medium transition-all"
              to="artikel/home"
            >
              Komoditas
            </Link>
          </div>
          <div>
            <Link
              className="hover:font-medium transition-all"
              to="artikel/home"
            >
              Inspiratif
            </Link>
          </div>
          <div>
            <Link
              className="hover:font-medium transition-all"
              to="artikel/home"
            >
              Investasi
            </Link>
          </div>
          <div>
            <Link
              className="hover:font-medium transition-all"
              to="artikel/home"
            >
              Asuransi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

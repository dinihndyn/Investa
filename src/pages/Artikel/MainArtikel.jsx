import { Container } from '../../component/atom/Container/Container';
import { CardArtikel } from '../../component/molecules/CardArtikel';
import { CardArtikelMini } from '../../component/molecules/CardArticleMini';

export const MainArtikel = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <CardArtikel />
            <CardArtikel />
            <CardArtikel />
            <CardArtikel />
          </div>
          <div className="border-l-2 ps-10 ms-10 border-black hidden md:block">
            <form className="flex items-center ">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-investa-netral-30 rounded-full border border-gray-300 text-gray-900 text-sm focus:ring-investa-primary-50 focus:border-investa-primary-50 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required=""
                />
              </div>
            </form>
            <div>
              <h1 className="text-2xl font-semibold my-3">
                Artikel Rekomendasi
              </h1>
              <CardArtikelMini />
              <CardArtikelMini />
              <CardArtikelMini />
              <CardArtikelMini />
              <CardArtikelMini />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

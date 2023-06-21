import { dateFormatInvesta, toRupiahInvesta } from '../../../utils/function';

export const Print = ({ data, ref }) => {
  return (
    <div ref={ref}>
      <h1>PT INVESTA INDONESIA</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-investa-primary-10 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Barang yang Dibeli
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
            </tr>
          </thead>
          <tbody>
            {data['Info Pinjaman'].length !== 0 ? (
              data['Info Pinjaman'].map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {dateFormatInvesta(item.tanggal)}
                    </th>
                    <td className="px-6 py-4">{item.barang}</td>
                    <td className="px-6 py-4">{item.jumlah}</td>
                    <td className="px-6 py-4">{toRupiahInvesta(item.total)}</td>
                  </tr>
                );
              })
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 text-center" colSpan={4}>
                  Belum Pinjaman
                </td>
              </tr>
            )}
          </tbody>
          {data['Info Pinjaman'].length !== 0 ? (
            <tfoot>
              <tr className="font-semibold bg-investa-primary-10 text-gray-900 dark:text-white">
                <th scope="row" colSpan={2} className="px-6 py-3 text-base">
                  Total + Imbal 5%
                </th>
                <td className="px-6 py-3 "></td>
                <td className="px-6 py-3 ">
                  {toRupiahInvesta(
                    data['Total Setelah Imbal'] == null
                      ? 0
                      : data['Total Setelah Imbal']
                  )}
                </td>
              </tr>
            </tfoot>
          ) : null}
        </table>
      </div>
    </div>
  );
};

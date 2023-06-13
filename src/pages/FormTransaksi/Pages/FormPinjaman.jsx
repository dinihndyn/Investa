import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { Button } from '../../../component/atom/Button';
import { useParams } from 'react-router-dom';

export const FormPinjaman = () => {
  const params = useParams();
  return (
    <div>
      <Layouts title={'Form Pinjaman'}>
        <Container>
          <div>
            <h1 className="text-2xl font-bold mb-5">Form Informasi Pinjaman</h1>
            <div className="bg-investa-netral-30 rounded-lg p-5">
              <div className="flex justify-end">
                <Button
                  fit
                  linkTo={`/proyek/${params.id}/form-transaksi`}
                  label={'Form Transaksi'}
                />
              </div>
              <div className="px-10">
                <h1 className="text-xl font-bold text-investa-primary-50 mb-5">
                  Riwayat Informasi Pinjaman
                </h1>
                <div>
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
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple MacBook Pro 17
                          </th>
                          <td className="px-6 py-4">Silver</td>
                          <td className="px-6 py-4">Laptop</td>
                          <td className="px-6 py-4">$2999</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Microsoft Surface Pro
                          </th>
                          <td className="px-6 py-4">White</td>
                          <td className="px-6 py-4">Laptop PC</td>
                          <td className="px-6 py-4">$1999</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Magic Mouse 2
                          </th>
                          <td className="px-6 py-4">Black</td>
                          <td className="px-6 py-4">Accessories</td>
                          <td className="px-6 py-4">$99</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="font-semibold bg-investa-primary-10 text-gray-900 dark:text-white">
                          <th
                            scope="row"
                            colSpan={2}
                            className="px-6 py-3 text-base"
                          >
                            Total
                          </th>
                          <td className="px-6 py-3">21,000</td>
                          <td className="px-6 py-3">21,000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layouts>
    </div>
  );
};

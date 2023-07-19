import { useParams } from 'react-router-dom';
import { Button } from '../../../component/atom/Button';
import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { useAuthHeader } from 'react-auth-kit';
import { useEffect, useState } from 'react';
import {
  dateFormatInvesta,
  getTokenInvesta,
  toRupiahInvesta,
} from '../../../utils/function';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';

export const FormInfoPinjaman = () => {
  const params = useParams();
  const token = useAuthHeader();

  const [data, setData] = useState({
    'Info Pinjaman': [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + `/pengajuan/${params.id}/getInfoPinjam`,
          getTokenInvesta(token())
        );
        setData(result.data);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Layouts title={'Pinjaman'}>
        <Container>
          <div>
            <h1 className="text-2xl font-bold mb-5">Form Informasi Pinjaman</h1>
            <div className="bg-investa-netral-30 rounded-lg p-5">
              <div className="flex justify-end">
                <Button
                  fit
                  linkTo={`/investor/investasi/proyek/${params.id}/form`}
                  label={'Tracking Proyek'}
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
                        {data && data['Info Pinjaman'] ? (
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
                                <td className="px-6 py-4">
                                  {toRupiahInvesta(item.total)}
                                </td>
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
                      {data && data['Info Pinjaman'] ? (
                        <tfoot>
                          <tr className="font-semibold bg-investa-primary-10 text-gray-900 dark:text-white">
                            <th
                              scope="row"
                              colSpan={2}
                              className="px-6 py-3 text-base"
                            >
                              TOTAL + Imbal Hasil : {data['imbal_hasil']}%
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
                  <div className="flex justify-start mt-5">
                    <Button
                      fit
                      linkTo={`/investor/investasi/proyek/${params.id}/form`}
                      label={'Kembali'}
                    />
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

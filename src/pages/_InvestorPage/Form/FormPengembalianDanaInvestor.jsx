import { useParams } from 'react-router-dom';
import { Button } from '../../../component/atom/Button';
import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { SideDashboard } from '../../Dashboard/SideDashboard';
import { useAuthHeader } from 'react-auth-kit';
import { useEffect, useState } from 'react';
import {
  dateFormatInvesta,
  getTokenInvesta,
  toRupiahInvesta,
} from '../../../utils/function';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';

export const FormPengembalianDanaInvestor = () => {
  const params = useParams();
  const token = useAuthHeader();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + `/pengajuan/${params.id}/getInfoPengembalian`,
          getTokenInvesta(token())
        );
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Layouts title={'Pemasukan '}>
        <SideDashboard isInvestor>
          <Container>
            <div>
              <h1 className="text-2xl font-bold mb-5">Pengmbalian Dana</h1>
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
                    Riwayat Pengembalian Dana
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
                              Deskripsi
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Jumlah
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.length == 0 ? (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td className="px-6 py-4 text-center" colSpan={4}>
                                Belum ada pemasukan
                              </td>
                            </tr>
                          ) : (
                            data.map((item, index) => {
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
                                  <td className="px-6 py-4">
                                    {item.deskripsi}
                                  </td>
                                  <td className="px-6 py-4">
                                    {toRupiahInvesta(item.jumlah_pembayaran)}
                                  </td>
                                  <td className="px-6 py-4">{item.status}</td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                        {data.length == 0 ? null : (
                          <tfoot>
                            <tr className="font-semibold bg-investa-primary-10 text-gray-900 dark:text-white">
                              <th
                                scope="row"
                                colSpan={2}
                                className="px-6 py-3 text-base"
                              >
                                Total
                              </th>
                              <td className="px-6 py-3 ">
                                {toRupiahInvesta(
                                  data.reduce(
                                    (acc, obj) => acc + obj.jumlah_pembayaran,
                                    0
                                  )
                                )}
                              </td>
                              <td className="px-6 py-3 "></td>
                            </tr>
                          </tfoot>
                        )}
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
        </SideDashboard>
      </Layouts>
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { Button } from '../../../component/atom/Button';
import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { SideDashboard } from '../../Dashboard/SideDashboard';
import { useAuthHeader } from 'react-auth-kit';
import { useEffect, useState } from 'react';
import { dateFormatInvesta, getTokenInvesta } from '../../../utils/function';
import axios from 'axios';
import { API_URL, PUBLIC_URL } from '../../../utils/constant';

export const FormKunjunganPanenInvestor = () => {
  const params = useParams();
  const token = useAuthHeader();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + `/pengajuan/${params.id}/getInfoKunjungan`,
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
              <h1 className="text-2xl font-bold mb-5">Riwayat Kunjungan</h1>
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
                    Riwayat Pemasukan/Panen
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
                              Nama Petugas
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Tujuan Kunjungan
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Foto Proses
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.length == 0 ? (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td className="px-6 py-4 text-center" colSpan={4}>
                                Belum ada kunjungan
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
                                    {item.nama_petugas}
                                  </td>
                                  <td className="px-6 py-4">{item.tujuan}</td>
                                  <td className="px-6 py-4">
                                    <a
                                      target="_blank"
                                      href={PUBLIC_URL + 'image/' + item.photo}
                                      rel="noreferrer"
                                      className="cursor-zoom-in"
                                    >
                                      <img
                                        src={PUBLIC_URL + 'image/' + item.photo}
                                        alt="foto proses"
                                        className="h-10 w-10 mx-auto"
                                        onError={({ currentTarget }) => {
                                          currentTarget.onerror = null; // prevents looping
                                          currentTarget.src =
                                            'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
                                        }}
                                      />
                                    </a>
                                  </td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
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

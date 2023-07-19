import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { Button } from '../../../component/atom/Button';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import {
  dateFormatInvesta,
  getTokenInvesta,
  toRupiahInvesta,
} from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import { SideDashboard } from '../../Dashboard/SideDashboard';
import { exportComponentAsJPEG } from 'react-component-export-image';

export const FormPinjaman = () => {
  const params = useParams();
  const token = useAuthHeader();
  const [data, setData] = useState({
    'File Info Pinjaman': [
      {
        alamat_gambar: '',
      },
    ],
    'Info Pinjaman': [],
  });
  const ref = React.createRef();

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
        <SideDashboard>
          <Container>
            <div>
              <h1 className="text-2xl font-bold mb-5">
                Form Informasi Pinjaman
              </h1>
              <div className="bg-investa-netral-30 rounded-lg p-5">
                <div className="flex justify-end">
                  <Button
                    fit
                    linkTo={`/proyek/${params.id}/form-transaksi`}
                    label={'Tracking Proyek'}
                  />
                </div>
                <div className="px-10">

                  <div ref={ref}>
                    <h1 className="text-xl font-bold text-investa-primary-50 mb-5">
                      Riwayat Informasi Pinjaman
                    </h1>
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
                        {data['Info Pinjaman'].length !== 0 ? (
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
                  </div>
                  <div className="mt-5 flex justify-between">
                    <div className="flex justify-end">
                      <Button
                        fit
                        linkTo={`/proyek/${params.id}/form-transaksi`}
                        label={'Kembali'}
                      />
                    </div>
                    <button
                      onClick={() => exportComponentAsJPEG(ref)}
                      target="_blank"
                      className="bg-investa-primary-50 rounded p-2 text-white "
                      rel="noreferrer"
                    >
                      Print Bukti Pembelian
                    </button>
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

import { useEffect, useState } from 'react';
import { Button } from '../../../component/atom/Button';
import axios from 'axios';
import { dateFormatInvesta } from '../../../utils/function';
import { useParams } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import { API_URL, PUBLIC_URL } from '../../../utils/constant';

export const DetailForm = () => {
  const [data, setData] = useState([]);
  const getToken = useAuthHeader();
  const params = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/pengajuan/${params.id}/getInfoKunjungan`,
        {
          headers: { Authorization: `${getToken()}` },
        }
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">Form Kunjungan</h1>
        <div className="bg-investa-netral-30 rounded-lg p-5">
          <div className="flex justify-end">
            <Button
              fit
              linkTo={`/admin/tracking_proyek/${params.id}/form`}
              label={'Tracking Proyek'}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 min-h-[70vh]">
            <div className="px-10 col-span-2">
              <h1 className="text-xl font-bold text-investa-primary-50 mb-5">
                Riwayat Kunjungan
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
                          <td colSpan={'4'} className="px-6 py-4 text-center">
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
                              <td className="px-6 py-4">{item.nama_petugas}</td>
                              <td className="px-6 py-4">{item.tujuan}</td>
                              <td className="px-6 py-4">
                                <a
                                  target="_blank"
                                  className="cursor-zoom-in"
                                  href={PUBLIC_URL + 'image/' + item.photo}
                                  rel="noreferrer"
                                >
                                  <img
                                    src={PUBLIC_URL + 'image/' + item.photo}
                                    alt="photo"
                                    className="rounded-lg w-10 h-10 object-cover"
                                    onError={(e) => {
                                      e.target.src = 'https://placehold.co/100';
                                    }}
                                  />
                                </a>
                              </td>
                            </tr>
                          );
                        })
                      )}
                      {}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-start mt-3">
                  <Button
                    fit
                    linkTo={`/admin/tracking_proyek/${params.id}/form`}
                    label={'Kembali'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

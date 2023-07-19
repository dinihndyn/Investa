import { useEffect, useState } from 'react';
import { Button } from '../../component/atom/Button';
import axios from 'axios';
import { dateFormatInvesta } from '../../utils/function';
import { Link, useParams } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import { useFormik } from 'formik';
import { API_URL, PUBLIC_URL } from '../../utils/constant';
import { toast } from 'react-toastify';
import { Spiner } from '../../component/atom/Spiner';

export const DetailForm = () => {
  const [data, setData] = useState([]);
  const getToken = useAuthHeader();
  const params = useParams();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Simpan hasil pembacaan file ke dalam Formik values
      formik.setFieldValue('photo', file);
    };

    reader.readAsDataURL(file); // Membaca file sebagai URL data
  };

  const formik = useFormik({
    initialValues: {
      tanggal: '',
      nama_petugas: '',
      tujuan: '',
      photo: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(
          API_URL + `/pengajuan/${params.id}/addInfoKunjungan`,
          values,
          {
            headers: {
              Authorization: `${getToken()}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        toast('Success Update Foto');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        toast.error(Object.values(error.response.data)[0][0]);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

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
              linkTo={`/proyek/${params.id}/form-transaksi`}
              label={'Tracking Proyek'}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Tanggal
                  </label>
                  <input
                    required
                    name="tanggal"
                    onChange={formik.handleChange}
                    placeholder="Masukan tanggal..."
                    type="date"
                    className="w-full  bg-white rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Nama Petugas
                  </label>
                  <input
                    required
                    placeholder="Masukan nama petugas..."
                    onChange={formik.handleChange}
                    name="nama_petugas"
                    type="text"
                    className="w-full capitalize bg-white rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Foto Proses
                  </label>
                  <input
                    required
                    placeholder="Masukan foto proses..."
                    onChange={handleFileChange}
                    name="photo"
                    type="file"
                    className="w-full capitalize bg-white rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Tujuan Kunjungan
                  </label>
                  <input
                    required
                    placeholder="Masukan tujuan kunjungan..."
                    onChange={formik.handleChange}
                    name="tujuan"
                    type="text"
                    className="w-full capitalize bg-white rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
                <div className="mt-5 flex justify-between">
                  <Link
                    to={`/proyek/${params.id}/form-transaksi`}
                    className="px-4  rounded-lg py-1 text-investa-primary-50 border border-investa-primary-50 bg-white"
                  >
                    Batal
                  </Link>
                  <button
                    type={formik.isSubmitting ? 'button' : 'submit'}
                    className="px-4  rounded-lg py-1 text-white bg-investa-primary-50"
                  >
                    {formik.isSubmitting ? <Spiner /> : 'Simpan'}
                  </button>
                </div>
              </form>
            </div>
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
                        <tr
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          cols
                        >
                          <td colSpan={'4'} className="px-6 py-4 text-center">
                            Belum ada kunjungan
                          </td>
                        </tr>
                      ) : (
                        data.toReversed().map((item, index) => {
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
                                  />
                                </a>
                              </td>
                            </tr>
                          );
                        })
                      )}
                      { }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-5">
            <Button
              fit
              linkTo={`/proyek/${params.id}/form-transaksi`}
              label={'Kembali'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

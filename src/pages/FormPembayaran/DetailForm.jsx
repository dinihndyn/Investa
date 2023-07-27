import { useEffect, useState } from 'react';
import { Button } from '../../component/atom/Button';
import axios from 'axios';
import { dateFormatInvesta, toRupiahInvesta } from '../../utils/function';
import { Link, useParams } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import { useFormik } from 'formik';
import { API_URL, PUBLIC_URL } from '../../utils/constant';
import { toast } from 'react-toastify';
import { Spiner } from '../../component/atom/Spiner';


export const DetailForm = () => {
  const [data, setData] = useState([]);
  const [totalPengembalian, setTotalPengembalian] = useState(0);
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
      pilih_pembayaran: '',
      photo: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(
          API_URL + `/pengajuan/${params.id}/addInfoPengembalianPetani`,
          values,
          {
            headers: {
              Authorization: `${getToken()}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        toast('Success Update Pengembalian');
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

  const getTotalPengembalian = async () => {
    try {
      const result = await axios.post(
        `${API_URL}/pengajuan/detailPengajuan/${params.id}`,
        null,
        {
          headers: { Authorization: `${getToken()}` },
        }
      );
      const { total_pengembalian } = result.data.Pengajuan;
      setTotalPengembalian(total_pengembalian);
    } catch (error) {
      console.log(error);
    }
  };


  const getData = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/pengajuan/${params.id}/getInfoPengembalian`,
        {
          headers: { Authorization: `${getToken()}` },
        }
      );
      setData(res.data);
    } catch (error) {
      console.log(data);
    }
  };
  useEffect(() => {
    getData();
    getTotalPengembalian();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">Form Pengembalian Dana</h1>
        <div className="bg-investa-netral-30 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap requireds"
                  >
                    Total Pengembalian
                  </label>
                  <input
                    value={toRupiahInvesta(totalPengembalian)}
                    disabled
                    readOnly
                    required
                    type="text"

                  />
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap requireds "
                  >
                    Pilih Pembayaran
                  </label>
                  <select
                    name="pilih_pembayaran"
                    id="komoditas"
                    onChange={formik.handleChange}
                    className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  >
                    <option value="" selected disabled hidden>
                      Pilih Pembayaran...
                    </option>
                    <option value="Transfer Bank">
                      Transfer Bank
                    </option>
                  </select>
                </div>
                <hr className="my-5" style={{ borderWidth: '2px' }} />
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold"
                >
                  Penerima Dana
                </label>
                <div className="grid grid-cols-2  gap-5 text-black items-center mt-2">
                  <div>
                    <label
                      htmlFor="#"
                      className=" col-span-2 text-md whitespace-nowrap"
                    >
                      Nama Bank
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="#"
                      className=" col-span-2 text-md whitespace-nowrap "
                    >
                      BCA
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="#"
                      className=" col-span-2 text-md whitespace-nowrap "
                    >
                      Nama Rekening
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="#"
                      className=" col-span-2 text-md whitespace-nowrap "
                    >
                      Admin Investa
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="#"
                      className=" col-span-2 text-md whitespace-nowrap "
                    >
                      Nomor Rekening
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="#"
                      className=" col-span-2 text-md whitespace-nowrap "
                    >
                      321-3213-312-22
                    </label>
                  </div>
                </div>
                <hr className="my-5" style={{ borderWidth: '2px' }} />
                <div className="flex flex-col gap-2 mb-5 mt-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Bukti Pembayaran
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

                <div className="mt-5 flex justify-between">
                  <Link
                    to={`/proyek/${params.id}/form-transaksi`}
                    className="px-4  rounded-lg py-1 text-investa-primary-50 border border-investa-primary-50 bg-white"
                  >
                    Kembali
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
                Riwayat Pengembalian
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
                          Jumlah Pembayaran
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Note
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Photo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length == 0 ? (
                        <tr
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          cols
                        >
                          <td colSpan={'6'} className="px-6 py-4 text-center">
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
                                {dateFormatInvesta(item.created_at)}
                              </th>
                              <td className="px-6 py-4">
                                {item.deskripsi}
                              </td>
                              <td className="px-6 py-4">
                                {item.jumlah_pembayaran ? toRupiahInvesta(item.jumlah_pembayaran) : "-"}
                              </td>
                              <td className="px-6 py-4">{item.note ? item.note : "-"}</td>
                              <td className="px-6 py-4">
                                <a
                                  target="_blank"
                                  className="cursor-zoom-in"
                                  href={PUBLIC_URL + 'image/' + item.photo}
                                  rel="noreferrer"
                                >
                                  {item.photo ? (
                                    <img
                                      src={PUBLIC_URL + 'image/' + item.photo}
                                      alt="photo"
                                      className="rounded-lg w-10 h-10 object-cover"
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/100';
                                      }}
                                    />
                                  ) : (
                                    '-'
                                  )}
                                </a>
                              </td>
                              <td className="px-6 py-4">{item.status}</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

import { useEffect, useState } from 'react';
import { Button } from '../../component/atom/Button';
import axios from 'axios';
import { dateFormatInvesta, toRupiahInvesta } from '../../utils/function';
import { Link, useParams } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import { useFormik } from 'formik';
import { API_URL } from '../../utils/constant';
import { toast } from 'react-toastify';
import { Spiner } from '../../component/atom/Spiner';

export const DetailForm = () => {
  const [data, setData] = useState([]);
  const getToken = useAuthHeader();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      nama_petugas: '',
      tujuan: '',
      photo: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(
          API_URL + `/pengajuan/${params.id}/addInfoPemasukan`,
          values,
          {
            headers: {
              Authorization: `${getToken()}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        toast('Success Update Pemasukan');
        setTimeout(() => {
          window.location.reload();
        }, 500);
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
        `${API_URL}/pengajuan/${params.id}/getInfoPemasukan`,
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
  const calculateTotal = (data) => {
    let jumlahTotal = 0;
    let hargaTotal = 0;

    data.forEach((obj) => {
      jumlahTotal += obj.jumlah;
      hargaTotal += obj.harga;
    });

    return {
      jumlahTotal,
      hargaTotal,
    };
  };
  const { jumlahTotal, hargaTotal } = calculateTotal(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">Form Pemasukan/Panen</h1>
        <div className="bg-investa-netral-30 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Nama Produk yang Dijual
                  </label>
                  <input
                    required
                    placeholder="Masukan produk yang dijual..."
                    onChange={formik.handleChange}
                    name="nama_produk"
                    type="text"
                    className="w-full capitalize bg-white rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Jumlah
                  </label>
                  <div className="flex gap-3">
                    <input
                      required
                      placeholder="Masukan jumlah..."
                      onChange={formik.handleChange}
                      name="jumlah"
                      type="text"
                      className="w-full capitalize bg-white rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                    />
                    <div className="bg-white w-[50px] border border-investa-primary-50 font-bold flex items-center justify-center">
                      Kg
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Total Harga
                  </label>
                  <input
                    required
                    placeholder="Masukan total harga..."
                    onChange={formik.handleChange}
                    name="harga"
                    type="text"
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
                    {formik.isSubmitting ? <Spiner /> : 'Simpan '}
                  </button>
                </div>
              </form>
            </div>
            <div className="px-10 col-span-2">
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
                          Nama Barang yang Dibeli
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Jumlah
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                          Harga
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
                            Belum ada Pemasukan
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
                              <td className="px-6 py-4">{item.nama_produk}</td>
                              <td className="px-6 py-4">{item.jumlah} Kg</td>
                              <td className="px-6 py-4 text-end">
                                {toRupiahInvesta(item.harga)}
                              </td>
                            </tr>
                          );
                        })
                      )}
                      { }
                    </tbody>
                    <thead className="text-xs text-gray-700 uppercase bg-investa-primary-10 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th
                          colSpan={2}
                          scope="col"
                          className="px-6 text-center text-lg py-3"
                        >
                          Total
                        </th>

                        <th scope="col" className="px-6 py-3 text-lg">

                        </th>
                        <th scope="col" className="px-6 py-3 text-end text-lg">
                          {toRupiahInvesta(hargaTotal)}
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

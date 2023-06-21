import { useEffect, useState } from 'react';
import { Button } from '../../../component/atom/Button';
import axios from 'axios';
import { dateFormatInvesta, toRupiahInvesta } from '../../../utils/function';
import { Link, useParams } from 'react-router-dom';
import { useAuthHeader } from 'react-auth-kit';
import { useFormik } from 'formik';
import { API_URL } from '../../../utils/constant';
import { toast } from 'react-toastify';
import { Spiner } from '../../../component/atom/Spiner';

export const DetailForm = () => {
  const [data, setData] = useState([]);
  const getToken = useAuthHeader();
  const params = useParams();

  const formik = useFormik({
    initialValues: {
      deskripsi: '',
      status: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(
          API_URL + `/pengajuan/${params.id}/addPengembalianAdmin`,
          values,
          {
            headers: {
              Authorization: `${getToken()}`,
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

  const getData = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/pengajuan/${params.id}/getInfoPengembalian`,
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
  const cekPembayaran = (data, condition) => {
    let found = false;
    for (
      let i = condition === 'Pengembalian Dana oleh Petani' ? 1 : 0;
      i < data.length;
      i++
    ) {
      if (data[i].deskripsi === condition) {
        found = true;
        break;
      }
    }
    return found;
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">Transaksi Pembayaran</h1>
        <div className="bg-investa-netral-30 rounded-lg p-5 min-h-[80vh]">
          <div className="flex justify-end">
            <Button
              fit
              linkTo={`/admin/tracking_proyek/${params.id}/form`}
              label={'Tracking Proyek'}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-5">
                  <div>
                    <label
                      htmlFor="#"
                      className=" col-span-2 text-md whitespace-nowrap font-bold "
                    >
                      Deskripsi
                    </label>
                  </div>
                  <div>
                    <select
                      name="deskripsi"
                      disabled={
                        cekPembayaran(data, 'Pengembalian Dana oleh Petani') &&
                        cekPembayaran(data, 'Verifikasi Pembayaran Petani') &&
                        cekPembayaran(data, 'Pengembalian Dana Investor')
                          ? true
                          : false
                      }
                      onChange={formik.handleChange}
                      id="komoditas"
                      className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 text-black placeholder:italic"
                    >
                      <option value="" selected disabled hidden>
                        {cekPembayaran(data, 'Pengembalian Dana oleh Petani') &&
                        cekPembayaran(data, 'Verifikasi Pembayaran Petani') &&
                        cekPembayaran(data, 'Pengembalian Dana Investor')
                          ? 'Semua telah diverifikasi'
                          : 'Pilih Deskripsi'}
                      </option>
                      {cekPembayaran(
                        data,
                        'Pengembalian Dana oleh Petani'
                      ) ? null : (
                        <option value={'Pengembalian Dana oleh Petani'}>
                          Pengembalian Dana oleh Petani
                        </option>
                      )}
                      {cekPembayaran(
                        data,
                        'Verifikasi Pembayaran Petani'
                      ) ? null : (
                        <option value={'Verifikasi Pembayaran Petani'}>
                          Verifikasi Pembayaran Petani
                        </option>
                      )}
                      {cekPembayaran(
                        data,
                        'Pengembalian Dana Investor'
                      ) ? null : (
                        <option value={'Pengembalian Dana Investor'}>
                          Pengembalian Dana Investor
                        </option>
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Pilih status
                  </label>
                </div>
                <div>
                  <select
                    name="status"
                    onChange={formik.handleChange}
                    disabled={
                      cekPembayaran(data, 'Pengembalian Dana oleh Petani') &&
                      cekPembayaran(data, 'Verifikasi Pembayaran Petani') &&
                      cekPembayaran(data, 'Pengembalian Dana Investor')
                        ? true
                        : false
                    }
                    id="komoditas"
                    className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 text-black placeholder:italic"
                  >
                    <option value="" selected disabled hidden>
                      Pilih Status
                    </option>
                    <option value={'Sukses'}>Sukses</option>
                    <option value={'Gagal'}>Gagal</option>
                    <option value={'Ditunda'}>Ditunda</option>
                  </select>
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
                Riwayat Pembayaran
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
                        <tr
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          cols
                        >
                          <td colSpan={'4'} className="px-6 py-4 text-center">
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
                              <td className="px-6 py-4">{item.deskripsi}</td>
                              <td className="px-6 py-4">
                                {toRupiahInvesta(
                                  item.jumlah_pembayaran == null
                                    ? 0
                                    : item.jumlah_pembayaran
                                )}
                              </td>
                              <td className="px-6 py-4">{item.status}</td>
                            </tr>
                          );
                        })
                      )}
                      {}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <Button
              fit
              linkTo={`/admin/tracking_proyek/${params.id}/form`}
              label={'Kembali'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

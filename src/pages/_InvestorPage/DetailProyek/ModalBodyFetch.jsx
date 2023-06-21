import { useFormik } from 'formik';
import { toRupiahInvesta } from '../../../utils/function';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { useAuthHeader } from 'react-auth-kit';
import { toast } from 'react-toastify';
import { Spiner } from '../../../component/atom/Spiner';

export const ModalBodyFetch = ({ data, setOpenModal, id }) => {
  const [pilih, setPilih] = useState(null);
  const tokens = useAuthHeader();
  const myFormik = useFormik({
    initialValues: {
      amount: '',
      unit: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(API_URL + '/pengajuan/' + id + '/investasi', values, {
          headers: {
            Authorization: `${tokens()}`,
          },
        });
        toast.success('Sukses investasi');
        setOpenModal(false);
        setTimeout(() => {
          window.location.reload();
          myFormik.resetForm();
        }, 1500);
      } catch (error) {
        toast.error(error.response.data.message);

        console.log(error);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });
  const onChangePilih = (e) => {
    setPilih(e.target.value);
    console.log('Pilih ', pilih);
    myFormik.resetForm();
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="my-3">
            <p className="font-semibold">Nama Proyek</p>
            <p>{data.pengajuan_name}</p>
          </div>
          <div className="my-3">
            <p className="font-semibold">Tenor</p>
            <p>{data.tenor}</p>
          </div>
          <div className="my-3">
            <p className="font-semibold">
              Estimasi ROI berdasarkan proyeksi proyek
            </p>
            <p>{data.imbal_hasil}%</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div>
                <label
                  htmlFor="#"
                  className=" col-span-2 text-xs whitespace-nowrap font-bold "
                >
                  {pilih == 'amount' ? 'Jumlah Deposit IDR' : 'Jumlah Unit'}
                </label>
              </div>
              {pilih == 'amount' ? (
                <div>
                  <input
                    required
                    disabled={pilih == null ? true : false}
                    name="amount"
                    value={myFormik.values.amount}
                    onChange={myFormik.handleChange}
                    type="text"
                    className="w-full text-black rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
              ) : (
                <div>
                  <input
                    required
                    name="unit"
                    value={myFormik.values.unit}
                    disabled={pilih == null ? true : false}
                    onChange={myFormik.handleChange}
                    type="text"
                    className="w-full text-black rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
              )}

              <p className="text-xs mt-2">
                Harga per Unit :{' '}
                {toRupiahInvesta(data.harga_unit == null ? 0 : data.harga_unit)}
              </p>
            </div>
            <div>
              <div>
                <label
                  htmlFor="#"
                  className=" col-span-2 text-xs whitespace-nowrap font-bold "
                >
                  Nominal
                </label>
              </div>
              <select
                name="pilih"
                onChange={onChangePilih}
                id="komoditas"
                className="w-full capitalize text-black rounded md:col-span-10 border-1 border-investa-primary-50  placeholder:italic"
              >
                <option value="" selected disabled hidden>
                  Pilih
                </option>
                <option value={'amount'}>Nominal</option>
                <option value={'unit'}>Unit</option>
              </select>
              <p className="text-xs mt-2">
                Unit Tersedia: {data.unit_tersedia} Unit
              </p>
            </div>
          </div>

          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-xs whitespace-nowrap font-bold "
            >
              Jumlah Yang Dibayar
            </label>
          </div>
          <div>
            <p className="font-bold">
              {pilih == 'amount'
                ? toRupiahInvesta(myFormik.values.amount)
                : toRupiahInvesta(myFormik.values.unit * data.harga_unit)}
            </p>
          </div>
          <p className="text-xs mt-3">
            <span className="font-bold">Note :</span> Pembayaran akan langsung
            disesuaikan dengan saldo pada wallet anda, pastikan anda memiliki
            saldo yang cukup untuk melakukan transaksi
          </p>
        </div>
      </div>
      <hr />
      <div className="w-full flex items-center justify-end">
        <button
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          onClick={myFormik.handleSubmit}
          className="bg-investa-primary-50 px-10 py-2 font-bold text-white rounded-lg"
          type={myFormik.isSubmitting ? 'button' : 'submit'}
        >
          {myFormik.isSubmitting ? <Spiner /> : 'Submit'}
        </button>
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="bg-white border border-investa-primary-50 px-10 py-2 ms-5 font-bold text-investa-primary-50 rounded-lg"
        >
          Batal
        </button>
      </div>
    </>
  );
};

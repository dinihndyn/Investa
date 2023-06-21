import axios from 'axios';
import { Modal } from 'flowbite-react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../utils/constant';
import { useAuthHeader } from 'react-auth-kit';
import { toast } from 'react-toastify';
import { Spiner } from '../../../component/atom/Spiner';

export const RingkasanIDR = () => {
  const [openModal, setOpenModal] = useState();
  const navigate = useNavigate();
  const getToken = useAuthHeader();
  const formik = useFormik({
    initialValues: {
      jumlah_deposit: '',
      pilih_pembayaran: '',
      pilih_bank: '',
      nama_bank: 'BCA',
      nama_rekening: 'ADMIN INVESTA',
      nomor_rekening: '321321331222',
      note: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(API_URL + '/wallet/deposit', values, {
          headers: {
            Authorization: `${getToken()}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        toast('Success Tambah Deposit');
        setOpenModal(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        toast.error(Object.values(error.response.data)[0][0]);
        setOpenModal(false);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2  gap-5 p-3 text-white items-center">
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Jumlah Deposit IDR
            </label>
          </div>
          <div>
            <input
              required
              name="jumlah_deposit"
              type="text"
              onChange={formik.handleChange}
              className="w-full capitalize text-black rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Pilih Pembayaran
            </label>
          </div>
          <div>
            <select
              name="pilih_pembayaran"
              onChange={formik.handleChange}
              id="komoditas"
              className="w-full capitalize text-black rounded md:col-span-10 border-1 border-investa-primary-50  placeholder:italic"
            >
              <option value="" selected disabled hidden>
                Pilih Pembayaran
              </option>
              <option value={'Bank Transfer'}>Bank Transfer</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="#"
              onChange={formik.handleChange}
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Pilih Bank
            </label>
          </div>
          <div>
            <select
              name="pilih_bank"
              id="komoditas"
              onChange={formik.handleChange}
              className="w-full capitalize  rounded md:col-span-10 border-1 border-investa-primary-50 text-black placeholder:italic"
            >
              <option value="" selected disabled hidden>
                Pilih Bank
              </option>
              <option value={'BCA'}>BCA</option>
              <option value={'BNI'}>BNI</option>
              <option value={'BRI'}>BRI</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Note
            </label>
          </div>
          <div>
            <input
              required
              onChange={formik.handleChange}
              name="note"
              type="text"
              className="w-full capitalize text-black rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Nama Bank
            </label>
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              BCA
            </label>
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Nama Rekening
            </label>
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Admin Investa
            </label>
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              Nomor Rekening
            </label>
          </div>
          <div>
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold "
            >
              321-3213-312-22
            </label>
          </div>
        </div>
        <div className=" text-end p-3 my-5">
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="bg-investa-primary-50 px-10 py-2 font-bold text-white rounded-lg"
          >
            Kirim
          </button>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="bg-white px-10 py-2 ms-5 font-bold text-investa-primary-50 rounded-lg"
          >
            Batal
          </button>
        </div>
        <Modal show={openModal == true} onClose={() => setOpenModal(false)}>
          <Modal.Body>
            <div className="space-y-6">
              <p className="font-bold text-2xl">
                Apakah data yang anda masukkan sudah benar?
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="w-full flex items-center justify-end">
              <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                onClick={formik.handleSubmit}
                className="bg-investa-primary-50 px-10 py-2 font-bold text-white rounded-lg"
                type={formik.isSubmitting ? 'button' : 'submit'}
              >
                {formik.isSubmitting ? <Spiner /> : 'Simpan'}
              </button>
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="bg-white border border-investa-primary-50 px-10 py-2 ms-5 font-bold text-investa-primary-50 rounded-lg"
              >
                Batal
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

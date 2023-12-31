import { Steps, useSteps } from 'react-step-builder';
import { FirstForm } from './FirstForm';
import { InformasiPencairan } from './InformasiPencairan';
import { Rekap } from './Rekap';
import { SecondForm } from './SecondForm';
import { Progress } from './components/Progress';
import { Done } from './components/Done';
import { End } from './components/End';
import { useFormik } from 'formik';
import axios from 'axios';
import { API_URL } from '../../utils/constant';
import { toast } from 'react-toastify';
import { useAuthHeader } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { Spiner } from '../../component/atom/Spiner';
import { useState } from 'react';

export const FormPinjamanPetani = () => {
  const { next, prev, current } = useSteps();
  const getToken = useAuthHeader();
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      pengajuan_name: '',
      start_date: '',
      end_date: '',
      'gambar[]': '',
      komoditas: '',
      tenor: '',
      kebutuhan: [
        {
          nama: '',
          jenis: '',
          jumlah: '',
          harga: '',
          satuan: '',
        },
      ],
    },
    onSubmit: async (values, actions) => {
      localStorage.removeItem('step2');
      try {
        await axios.post(API_URL + '/pengajuan/addPengajuan', values, {
          headers: {
            Authorization: `${getToken()}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        toast('Sukses menambahkan pinjaman');
        navigate('/daftar-pinjaman');
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          if (statusCode === 404) {
            toast.error('Data tidak ditemukan');
          } else if (statusCode === 422) {
            toast.error('Terdapat data yang belum terisi');
          } else if (statusCode === 403) {
            toast.error('Anda memiliki pengajuan yang sedang berjalan');
            navigate('/dashboard-petani');
          } else {
            toast.error('Terjadi kesalahan');
          }
        } else {
          toast.error('Terjadi kesalahan');
        }
      } finally {
        actions.setSubmitting(false);
      }
    },
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Simpan hasil pembacaan file ke dalam Formik values
      formik.setFieldValue('gambar[]', file);
    };

    reader.readAsDataURL(file); // Membaca file sebagai URL data
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <ol className="flex items-center w-full mb-10">
        {current > 1 ? <Done /> : <Progress num={1} />}
        {current > 2 ? <Done /> : <Progress num={2} />}
        {current > 3 ? <Done /> : <Progress num={3} />}
        {current > 4 ? <End done /> : <End num={4} />}
      </ol>
      <form
        encType="multipart/form-data"
        onSubmit={formik.handleSubmit}
        action="#"
      >
        <div className="my-10">
          <h1 className="text-2xl font-semibold text-center">
            Saling Menyokong bersama petani
          </h1>
          <p className="text-center mt-3 mb-10">
            Cantumkan Informasi Terkait Pengajuanmu
          </p>

          <Steps>
            <FirstForm
              formik={formik}
              handleFileChange={handleFileChange}
              handleChange={formik.handleChange}
            />
            <SecondForm formik={formik} handleChange={formik.handleChange} />
            <InformasiPencairan />
            <Rekap formik={formik} file={file} />
          </Steps>
        </div>
        <div className="my-5 flex justify-between">
          <button
            type="button"
            onClick={() => {
              prev();
              window.scrollTo(0, 0);
            }}
            className="px-10 py-3 text-investa-primary-50 bg-white hover:text-white border border-investa-primary-30 hover:bg-investa-primary-50 rounded transition-all"
          >
            Kembali
          </button>
          {current >= 4 ? (
            <button
              type={formik.isSubmitting ? 'button' : 'submit'}
              className="px-10 py-3 hover:text-investa-primary-50 text-white border border-investa-primary-30 bg-investa-primary-50 hover:bg-white rounded transition-all"
            >
              {formik.isSubmitting ? <Spiner /> : 'Kirim Data'}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                next();
                window.scrollTo(0, 0);
              }}
              className="px-10 py-3 hover:text-investa-primary-50 text-white border border-investa-primary-30 bg-investa-primary-50 hover:bg-white rounded transition-all"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </form>
    </>
  );
};

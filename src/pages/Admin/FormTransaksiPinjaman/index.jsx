import { useEffect, useState } from 'react';
import { Container } from '../../../component/atom/Container/Container';
import { Link, useParams } from 'react-router-dom';
import TableInfoPinjaman from './TableInfoPinjaman';
import FormBarangPinjaman from './FormBarangPinjaman';
import Button from './Button';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { useAuthHeader } from 'react-auth-kit';
import { toast } from 'react-toastify';
import { Layouts } from '../../../component/molecules/Layouts';
import { useFormik } from 'formik';

const FormTransaksiPinjaman = () => {
  const [data, setData] = useState({
    'File Info Pinjaman': [],
    'Info Pinjaman': [],
    'Total Setelah Imbal': '',
  });
  const params = useParams();
  const token = useAuthHeader();

  const formik = useFormik({
    initialValues: {
      gambar: '',
      infoPinjam: [
        {
          tanggal: '',
          barang: '',
          jumlah: '',
          harga: '',
        },
      ],
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(
          API_URL + `/pengajuan/${params.id}/addInfoPinjam`,
          values,
          {
            headers: {
              Authorization: `${token()}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        toast('Sukses menambahkan pinjaman');
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
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Simpan hasil pembacaan file ke dalam Formik values
      formik.setFieldValue('gambar', file);
    };

    reader.readAsDataURL(file); // Membaca file sebagai URL data
    // setFile(URL.createObjectURL(event.target.files[0]));
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          API_URL + `/pengajuan/${params.id}/getInfoPinjam`,
          {
            headers: {
              Authorization: `${token()}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Layouts title={'Informasi Pinjaman'}>
      <Container>
        <h1 className="text-2xl font-bold mb-5">Form Informasi Pinjaman</h1>
        <div className="bg-investa-netral-30 p-10 lg:p-24 rounded-2xl grid grid-cols-3 gap-3">
          <div className="col-span-1">
            <form
              className="flex max-w-md flex-col gap-4"
              onSubmit={formik.handleSubmit}
            >
              <FormBarangPinjaman
                onChangeImg={handleFileChange}
                formik={formik}
              />

              <div className="grid grid-cols-2">
                <Link
                  to={'/admin/tracking_proyek/' + params.id + '/form'}
                  className="border bg-white me-2  border-investa-primary-50 py-2.5 px-5 rounded text-investa-primary-50 hover:bg-investa-primary-50 hover:text-white transition-all text-center"
                >
                  Kembali
                </Link>
                <Button className="ms-2" type="submit">Simpan</Button>
              </div>
            </form>
          </div>
          <div className="col-span-2 flex flex-col">
            <Link
              className="self-end"
              to={'/admin/tracking_proyek/' + params.id + '/form'}
            >
              <Button>Tracking Proyek</Button>
            </Link>
            <h2 className="text-lg font-medium text-investa-primary-50">
              Riwayat Informasi Pinjaman
            </h2>
            <TableInfoPinjaman
              totalHasil={data['Total Setelah Imbal']}
              imbal_hasil={data['imbal_hasil']}
              data={data['Info Pinjaman']}
            />
            <Button className={'self-end'}>Print Bukti Pembelian</Button>
          </div>
        </div>
      </Container>
    </Layouts>
  );
};

export default FormTransaksiPinjaman;

import { useEffect, useState } from 'react';
import { useAuthHeader, useAuthUser } from 'react-auth-kit';
import { API_URL, PUBLIC_URL } from '../../utils/constant';
import axios from 'axios';
import { useFormik } from 'formik';
import { Loading } from '../../component/molecules/Loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const FormProfilEdit = () => {
  const userData = useAuthUser();
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
      name: '',
      alamat: '',
      photo: null,
      password: '',
      password_confirmation: '',
      usia: '',
      pengalaman: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await axios.post(API_URL + '/auth/updateProfile', values, {
          headers: {
            Authorization: `${getToken()}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        toast('Success Update Profile');
        setTimeout(() => {
          window.location.href = '/profil';
        }, 1500);
      } catch (error) {
        toast.error('Lengkapi data sesuai yang diminta');
      } finally {
        actions.setSubmitting(false);
      }
    },
  });
  const [data, setData] = useState();
  const getToken = useAuthHeader();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.post(API_URL + '/auth/me', null, {
          headers: { Authorization: `${getToken()}` },
        });
        setData(result.data);
      } catch (error) {
        // Handle error
        toast.error(Object.values(error.response.data)[0][0]);
      }
    };

    fetchData();
  }, []);
  if (data == null) {
    return <Loading />;
  }
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:justify-start">
        <img
          src={PUBLIC_URL + 'image/' + data.photo}
          alt="profile-img"
          className="w-36 h-36 object-cover rounded-full"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              'https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg';
          }}
        />
        <div>
          <h1 className="font-semibold text-2xl capitalize">{data.name}</h1>
          <p className="font-normal text-investa-netral-70">{data.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="mt-6">
          <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold "
                >
                  Nama Lengkap
                </label>
                <input
                  required
                  name="name"
                  onChange={formik.handleChange}
                  type="text"
                  className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                />
              </div>
              {userData()?.tipeAkun == 'Petani' ? (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="#"
                    className=" col-span-2 text-md whitespace-nowrap font-bold "
                  >
                    Pengalaman Bertani (tahun)
                  </label>
                  <input
                    required
                    name="pengalaman"
                    onChange={formik.handleChange}
                    type="text"
                    className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                  />
                </div>
              ) : null}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold "
                >
                  Alamat
                </label>
                <input
                  required
                  name="alamat"
                  onChange={formik.handleChange}
                  type="text"
                  className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold "
                >
                  Nomor Telepon
                </label>
                <input
                  value={userData().phone}
                  disabled
                  readOnly
                  required
                  type="text"
                  className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold "
                >
                  Usia
                </label>
                <input
                  name="usia"
                  onChange={formik.handleChange}
                  required
                  type="text"
                  className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold "
                >
                  Tipe Akun
                </label>
                <input
                  readOnly
                  value={userData().tipeAkun}
                  disabled
                  required
                  type="text"
                  className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold "
                >
                  Password
                </label>
                <input
                  required
                  name="password"
                  onChange={formik.handleChange}
                  type="password"
                  className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="#"
                  className=" col-span-2 text-md whitespace-nowrap font-bold "
                >
                  Konfirmasi Password
                </label>
                <input
                  required
                  name="password_confirmation"
                  onChange={formik.handleChange}
                  type="password"
                  className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label
                htmlFor="#"
                className=" col-span-2 text-md whitespace-nowrap font-bold "
              >
                Ganti Foto Profil
              </label>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full bg text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="mt-5 flex justify-between">
              <Link
                to="/profil"
                className="border border-investa-primary-50 px-20 py-3 rounded text-investa-primary-50 hover:bg-investa-primary-50 hover:text-white transition-all"
              >
                Kembali
              </Link>
              <button type="submit" className="button-investa">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

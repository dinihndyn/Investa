import { Link } from 'react-router-dom';
import { useAuthHeader, useAuthUser } from 'react-auth-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../../component/molecules/Loading';
import { API_URL, PUBLIC_URL } from '../../utils/constant';

export const FormProfile = () => {
  const userData = useAuthUser();
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
        console.log(error);
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
      <form action="#" className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center mt-6">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap font-bold me-5"
          >
            Nama Lengkap
          </label>
          <input
            readOnly
            disabled
            required
            type="text"
            value={data.name}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center mt-6">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap font-bold me-5"
          >
            Email
          </label>
          <input
            readOnly
            disabled
            required
            type="email"
            value={data.email}
            className="w-full rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center mt-6">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap font-bold me-5"
          >
            No.Tlp
          </label>
          <input
            readOnly
            disabled
            required
            type="text"
            value={data.phone}
            className="w-full rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        {userData()?.tipeAkun == 'Petani' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center mt-6">
            <label
              htmlFor="#"
              className=" col-span-2 text-md whitespace-nowrap font-bold me-5"
            >
              Pengalaman Bertani
            </label>
            <input
              readOnly
              disabled
              required
              type="text"
              value={
                data.pengalaman == null
                  ? 'Belum diinputkan'
                  : data.pengalaman + ' Tahun'
              }
              className="w-full rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
            />
          </div>
        ) : null}
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center mt-6">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap font-bold me-5"
          >
            Tipe Akun
          </label>
          <input
            readOnly
            disabled
            required
            type="text"
            value={data.tipeAkun}
            className="w-full rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
      </form>
      <Link
        to="/"
        className="border border-investa-primary-50 px-20 py-3 rounded text-investa-primary-50 hover:bg-investa-primary-50 hover:text-white transition-all"
      >
        Kembali
      </Link>
    </section>
  );
};

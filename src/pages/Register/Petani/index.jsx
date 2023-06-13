import { Link, useNavigate, useParams } from 'react-router-dom';
import { Checkbox } from '../../../component/atom/Checkbox';
import { InputField } from '../../../component/atom/Input';
import { Layouts } from '../../../component/molecules/Layouts';
import RegisterImage from '../assets/register.png';
import { Button } from '../../../component/atom/Button';
import { fetchDataInvesta } from '../../../utils/function';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useState } from 'react';

export const RegisterPetani = () => {
  const params = useParams();
  const [errorMsg, setErrorMsg] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
    },
    onSubmit: async (values, actions) => {
      try {
        await fetchDataInvesta(`auth/${params.id}register`, 'POST', values);
        toast.success(
          `'Register ${
            params.id == 'investor' ? 'Investor' : 'Petani'
          } Berhasil'`
        );
        navigate('/login');
      } catch (error) {
        setErrorMsg(error.response.data);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });
  return (
    <Layouts
      title={`Register ${params.id == 'investor' ? 'Investor' : 'Petani'}`}
    >
      <section className=" min-h-screen bg-investa-netral-0 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-white p-10 md:px-16 md:py-28 rounded-md shadow-lg w-[70vw] ">
          <div className="col-span-5 flex flex-col items-center justify-center">
            <img
              src="/assets/images/Investa.png"
              alt="logo-investa"
              className="mb-10 hidden md:block"
            />
            <img
              src={RegisterImage}
              alt="logo-investa"
              className="w-52 md:w-full"
            />
          </div>
          <div className="col-span-7 ">
            <form onSubmit={formik.handleSubmit}>
              <InputField
                placeholder={'Nama Lengkap'}
                type={'text'}
                name={'name'}
                onChange={formik.handleChange}
                errorMsg={errorMsg.name}
              />
              <InputField
                placeholder={'Email'}
                type={'email'}
                name={'email'}
                onChange={formik.handleChange}
                errorMsg={errorMsg.email}
              />
              <InputField
                placeholder={'Password'}
                type={'password'}
                name={'password'}
                onChange={formik.handleChange}
                errorMsg={errorMsg.password}
              />
              <InputField
                placeholder={'Konfirmasi Password'}
                type={'password'}
                name={'password_confirmation'}
                onChange={formik.handleChange}
                errorMsg={errorMsg.password_confirmation}
              />
              <InputField
                placeholder={'No. Telepon'}
                type={'text'}
                name={'phone'}
                onChange={formik.handleChange}
                errorMsg={errorMsg.phone}
              />

              <div className="flex justify-between items-center mb-6">
                <Checkbox
                  label={
                    'Saya setuju dengan Syarat & Ketentuan dan Kebijakan Privasi'
                  }
                  name={'remember'}
                  value=""
                  required
                />
              </div>

              <Button
                type={formik.isSubmitting ? 'button' : 'submit'}
                label={formik.isSubmitting ? 'Loading...' : 'Daftar'}
                disabled={formik.values.phone === '' ? true : false}
              />
              <div className="my-3">
                <p className="text-investa-netral-70 font-semibold text-center">
                  Sudah punya akun?{' '}
                  <Link to={'/login'} className="text-investa-blue-70 ">
                    Masuk disini
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

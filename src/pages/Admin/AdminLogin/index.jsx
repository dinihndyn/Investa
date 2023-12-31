import { useState } from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import LoginImage from './assets/login-image.png';
import { useIsAuthenticated, useSignIn } from 'react-auth-kit';
import { useFormik } from 'formik';
import { InputField } from '../../../component/atom/Input';
import { Button } from '../../../component/atom/Button';
import { Link, Navigate } from 'react-router-dom';
import { fetchDataInvesta } from '../../../utils/function';
import { toast } from 'react-toastify';

export const AdminLogin = () => {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const [errorMsg, setErrorMsg] = useState({
    error: '',
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      try {
        const res = await fetchDataInvesta('admin/adminlogin', 'POST', values);
        toast.success('Selamat datang');
        console.log(res);
        signIn({
          token: res.access_token,
          expiresIn: res.expires_in,
          tokenType: res.token_type,
          authState: res.user,
        });
        <Navigate to={'/admin/dashboard'} />;
      } catch (error) {
        console.log(error)
        setErrorMsg(error.response.data);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });
  if (isAuthenticated()) {
    return <Navigate to="/admin/dashboard" />;
  }
  return (
    <Layouts title="Admin Login">
      <section className="min-h-screen bg-investa-netral-0 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-white p-10 md:px-16 md:py-28 rounded-md shadow-lg w-[70vw] ">
          <div className="col-span-5 flex flex-col items-center justify-center">
            <img
              src="/assets/images/Investa.png"
              alt="logo-investa"
              className="mb-10 hidden md:block"
            />
            <img
              src={LoginImage}
              alt="logo-investa"
              className="w-52 md:w-full"
            />
          </div>
          <div className="col-span-7 ">
            <h1 className="text-investa-primary-50 text-2xl font-bold text-center md:text-start">
              Selamat Datang Kembali
            </h1>
            <p className="text-investa-netral-70  font-medium mb-5 text-center md:text-start">
              Masuk untuk melanjutkan
            </p>
            <form onSubmit={formik.handleSubmit}>
              <InputField
                placeholder={'Email'}
                type={'email'}
                name={'email'}
                onChange={formik.handleChange}
                errorMsg={errorMsg.error}
              />
              <InputField
                placeholder={'Password'}
                type={'password'}
                name={'password'}
                onChange={formik.handleChange}
              />

              <Button
                type={formik.isSubmitting ? 'button' : 'submit'}
                label={formik.isSubmitting ? 'Loading...' : 'Daftar'}
              />
              <div className="my-3">
                <p className="text-investa-netral-70 font-semibold text-center">
                  Belum punya akun?{' '}
                  <Link to={'/admin/register'} className="text-investa-blue-70 ">
                    Daftar disini
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layouts>
  )
}

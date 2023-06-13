import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/404NotFound';
import { Login } from './pages/Login';
import { RegisterPetani } from './pages/Register/Petani';
import { AuthProvider } from 'react-auth-kit';
import { PrivateRoute } from './utils/PrivateRoute';
import { RegisterSwitch } from './pages/RegisterSwitch';
import { Artikel } from './pages/Artikel';
import { ProfilPetani } from './pages/ProfilPetani';
import { EditProfil } from './pages/EditProfil';
import { DashboardPetani } from './pages/Dashboard';
import { DaftarPinjamanDashboard } from './pages/DaftarPinjamanDashboard';
import { DetailProyek } from './pages/DetailProyek';
import { FormTransaksi } from './pages/FormTransaksi';
import { FormPinjaman } from './pages/FormTransaksi/Pages/FormPinjaman';
import { PendaftaranPetani } from './pages/PendaftaranPetani';
import { AdminLogin } from './pages/Admin/AdminLogin';
import { AdminDashboard } from './pages/Admin/Dashboard';
import { Persetujuan } from './pages/Admin/Persetujuan';
import { FormInfoKunjungan } from './pages/FormInfoKunjungan';
import { FormPemasukanPanen } from './pages/FormPemasukanPanen';
import { FormPembayaran } from './pages/FormPembayaran';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
      errorElement: <NotFound />,
    },
    {
      path: '/admin/login',
      element: <AdminLogin />,
    },
    {
      path: '/admin',
      element: <AdminDashboard />,
    },
    {
      path: '/admin/dashboard',
      element: <AdminDashboard />,
    },
    {
      path: '/admin/persetujuan',
      element: <Persetujuan />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <RegisterSwitch />,
    },
    {
      path: '/register/:id',
      element: <RegisterPetani />,
    },
    {
      path: '/artikel',
      element: <Artikel />,
    },
    {
      path: '/profil',
      element: (
        <PrivateRoute>
          <ProfilPetani />
        </PrivateRoute>
      ),
    },
    {
      path: '/edit-profil',
      element: (
        <PrivateRoute>
          <EditProfil />
        </PrivateRoute>
      ),
    },
    {
      path: '/dashboard-petani',
      element: (
        <PrivateRoute>
          <DashboardPetani />
        </PrivateRoute>
      ),
    },
    {
      path: '/daftar-pinjaman',
      element: (
        <PrivateRoute>
          <DaftarPinjamanDashboard />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id',
      element: (
        <PrivateRoute>
          <DetailProyek />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi',
      element: (
        <PrivateRoute>
          <FormTransaksi />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/pinjaman',
      element: (
        <PrivateRoute>
          <FormPinjaman />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/kunjungan',
      element: (
        <PrivateRoute>
          <FormInfoKunjungan />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/pemasukan',
      element: (
        <PrivateRoute>
          <FormPemasukanPanen />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/pembayaran',
      element: (
        <PrivateRoute>
          <FormPembayaran />
        </PrivateRoute>
      ),
    },
    {
      path: '/ajukan-pinjaman',
      element: (
        <PrivateRoute>
          <PendaftaranPetani />
        </PrivateRoute>
      ),
    },
  ]);

  return (
    <>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
      >
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;

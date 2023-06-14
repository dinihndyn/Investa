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
import { DetailPersetujuan } from './pages/Admin/DetailPersetujuan';
import { PrivateRouteAdmin } from './utils/PrivateRouteAdmin';
import { TrackingInvestor } from './pages/Admin/TrackingInvestor';
import { TrackingProyek } from './pages/Admin/TrackingProyek';
import { DetailTrackingProyek } from './pages/Admin/DetailTrackingProyek';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
      errorEement: <NotFound />,
    },
    {
      path: '/admin/login',
      element: <AdminLogin />,
    },
    {
      path: '/admin',
      element: (
        <PrivateRouteAdmin>
          <AdminDashboard />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/dashboard',
      element: (
        <PrivateRouteAdmin>
          <AdminDashboard />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/persetujuan',
      element: <Persetujuan />
    },
    {
      path: '/admin/persetujuan/:id',
      element: (
        <DetailPersetujuan />
      )
    },
    {
      path: '/admin/tracking_investor',
      element: (
        <TrackingInvestor />
      )
    },
    {
      path: '/admin/tracking_proyek',
      element: (
        <TrackingProyek />
      )
    },
    {
      path: '/admin/tracking_proyek/:id',
      element: (
        <DetailTrackingProyek />
      )
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

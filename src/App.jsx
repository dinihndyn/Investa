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
import FormTransaksi from './pages/Admin/FormTransaksi';
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
import { Unauthorized } from './pages/Unathorized';
import { ROLES } from './utils/constant';
import { InvestorDashboard } from './pages/_InvestorPage/Dashboard';
import { InvestorProyek } from './pages/_InvestorPage/Proyek';
import { DetailPersetujuanLanjutan } from './pages/Admin/DetailPersetujuanLanjutan';
import { InvestorInvestasi } from './pages/_InvestorPage/Investasi';
import { InvestorDeposit } from './pages/_InvestorPage/Deposit';
import { InvestorDetailProyek } from './pages/_InvestorPage/DetailProyek';
import FormTransaksiPinjaman from './pages/Admin/FormTransaksiPinjaman';
import FormTransaksiPengembalian from './pages/Admin/FormTransaksiPengembalian';

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/',
      element: <Home />,
      errorEement: <NotFound />,
    },
    {
      path: '/admin/login',
      element: <AdminLogin />,
    },
    {
      path: '/admin',
      element: (
        <PrivateRoute allowedRoles={ROLES.ADMIN}>
          <AdminDashboard />
        </PrivateRoute>
      ),
    },
    {
      path: '/admin/dashboard',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <AdminDashboard />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/persetujuan',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <Persetujuan />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/persetujuan/:id',
      element: <DetailPersetujuan />,
    },
    {
      path: '/admin/persetujuan_lanjutan/:id',
      element: <DetailPersetujuanLanjutan />,
    },
    {
      path: '/admin/tracking_investor',
      element: <TrackingInvestor />,
    },
    {
      path: '/admin/tracking_proyek',
      element: <TrackingProyek />,
    },
    {
      path: '/admin/tracking_proyek/:id',
      element: <DetailTrackingProyek />,
    },
    {
      path: '/admin/tracking_proyek/:id/form',
      element: <FormTransaksi />,
    },
    {
      path: '/admin/tracking_proyek/:id/form-transaksi/pinjaman',
      element: <FormTransaksiPinjaman />,
    },
    {
      path: '/admin/tracking_proyek/:id/form-transaksi/pengembalian',
      element: <FormTransaksiPengembalian />,
    },
    {
      path: '/unauthorized',
      element: <Unauthorized />,
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
      element: (
        <PrivateRoute allowedRoles={[ROLES.INVESTOR, ROLES.PETANI]}>
          <Artikel />
        </PrivateRoute>
      ),
    },
    {
      path: '/profil',
      element: (
        <PrivateRoute allowedRoles={[ROLES.INVESTOR, ROLES.PETANI]}>
          <ProfilPetani />
        </PrivateRoute>
      ),
    },
    {
      path: '/edit-profil',
      element: (
        <PrivateRoute allowedRoles={[ROLES.PETANI, ROLES.INVESTOR]}>
          <EditProfil />
        </PrivateRoute>
      ),
    },
    {
      path: '/dashboard-petani',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <DashboardPetani />
        </PrivateRoute>
      ),
    },
    {
      path: '/daftar-pinjaman',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <DaftarPinjamanDashboard />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <DetailProyek />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <FormTransaksi />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/pinjaman',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <FormPinjaman />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/kunjungan',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <FormInfoKunjungan />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/pemasukan',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <FormPemasukanPanen />
        </PrivateRoute>
      ),
    },
    {
      path: '/proyek/:id/form-transaksi/pembayaran',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <FormPembayaran />
        </PrivateRoute>
      ),
    },
    {
      path: '/ajukan-pinjaman',
      element: (
        <PrivateRoute allowedRoles={ROLES.PETANI}>
          <PendaftaranPetani />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/dashboard',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <InvestorDashboard />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/proyek',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <InvestorProyek />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/proyek/:id',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <InvestorDetailProyek />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/investasi',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <InvestorInvestasi />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/deposit',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <InvestorDeposit />
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

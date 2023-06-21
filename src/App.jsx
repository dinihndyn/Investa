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
import PencairanInvestor from './pages/Admin/PencairanInvestor';
import PencairanPetani from './pages/Admin/PencairanPetani';
import { ManagementAkun } from './pages/Admin/ManagementAkun';
import Articles from './pages/Admin/Articles';
import { ArticleInput } from './pages/Admin/ArticleInput';
import ArticleEdit from './pages/Admin/ArticleEdit';
import { DetailProyekInvestorListNew } from './pages/_InvestorPage/Investasi/DetailProyekInvestorListNew';
import { FormInvestor } from './pages/_InvestorPage/Form';
import { FormInfoPinjaman } from './pages/_InvestorPage/Form/FormInfoPinjaman';
import { FormPemasukanPanenInvestor } from './pages/_InvestorPage/Form/FormPemasukanPanen';
import { FormKunjunganPanenInvestor } from './pages/_InvestorPage/Form/FormKunjunganPanenInvestor';
import { FormPengembalianDanaInvestor } from './pages/_InvestorPage/Form/FormPengembalianDanaInvestor';
import { FormTransaksiPembayaran } from './pages/Admin/FormTransaksiPembayaran';
import FormTransaksiKunjungan from './pages/Admin/FormTransaksiKunjungan';
import { FormTransaksiPetani } from './pages/FormTransaksi';

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
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <DetailPersetujuan />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/persetujuan_lanjutan/:id',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <DetailPersetujuanLanjutan />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_investor',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <TrackingInvestor />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_proyek',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <TrackingProyek />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_proyek/:id',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <DetailTrackingProyek />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_proyek/:id/form',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <FormTransaksi />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_proyek/:id/form-transaksi/pinjaman',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <FormTransaksiPinjaman />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_proyek/:id/form-transaksi/pengembalian',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <FormTransaksiPengembalian />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_proyek/:id/form-transaksi/kunjungan',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <FormTransaksiKunjungan />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/tracking_proyek/:id/form-transaksi/pembayaran',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <FormTransaksiPembayaran />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/pencairan_investor',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <PencairanInvestor />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/pencairan_petani',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <PencairanPetani />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/akun_investor',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <ManagementAkun akun="investor" />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/akun_petani',
      element: (
        <PrivateRouteAdmin allowedRoles={ROLES.ADMIN}>
          <ManagementAkun akun="petani" />
        </PrivateRouteAdmin>
      ),
    },
    {
      path: '/admin/artikel/list',
      element: <Articles />,
    },
    {
      path: '/admin/artikel/input',
      element: <ArticleInput />,
    },
    {
      path: '/admin/artikel/:id/edit',
      element: <ArticleEdit />,
    },
    {
      path: '/admin/artikel',
      element: <Articles />,
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
        <PrivateRoute
          allowedRoles={[ROLES.INVESTOR, ROLES.PETANI, ROLES.ADMIN]}
        >
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
          <FormTransaksiPetani />
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
      path: '/investor/investasi/proyek/:id',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <DetailProyekInvestorListNew />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/investasi/proyek/:id/form',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <FormInvestor />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/investasi/proyek/:id/form/pinjaman',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <FormInfoPinjaman />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/investasi/proyek/:id/form/pemasukan',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <FormPemasukanPanenInvestor />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/investasi/proyek/:id/form/kunjungan',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <FormKunjunganPanenInvestor />
        </PrivateRoute>
      ),
    },
    {
      path: '/investor/investasi/proyek/:id/form/pembayaran',
      element: (
        <PrivateRoute allowedRoles={ROLES.INVESTOR}>
          <FormPengembalianDanaInvestor />
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

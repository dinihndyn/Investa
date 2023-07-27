import { useEffect, useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Container } from '../../../component/atom/Container/Container';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import Money from './assets/money.png';
import Farmer from './assets/farmer.png';
import Investor from './assets/investor.png';
import { LineChartAdmin } from '../../../component/molecules/Admin/LineChartAdmin';
import { CardProyek } from '../../../component/molecules/Admin/CardProyek';
import axios from 'axios';
import { getTokenInvesta, toRupiahInvesta } from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import { API_URL, dataCarousel } from '../../../utils/constant';
import { Loading } from '../../../component/molecules/Loading';

const CardDashboard = ({ label, value, image }) => {
  return (
    <div
      className="block  items-center justify-start gap-5 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      href="#"
    >
      <div>
        <img className="rounded-lg w-[60px]" src={image} alt={label} />
      </div>
      <div>
        <p className="font-normal text-xl text-gray-900 dark:text-gray-400">
          <p>{label}</p>
        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{value}</p>
        </h5>
      </div>
    </div>
  );
};

export const AdminDashboard = () => {
  const [dataProyek, setDataProyek] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  const [dataDashboard, setDataDashboard] = useState({
    total_dana: '',
    total_petani: '',
    total_investor: '',
  });
  const token = useAuthHeader();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataDashboard(null);

        const result = await axios.get(
          API_URL + `/dashboard/totalDana`,
          getTokenInvesta(token())
        );
        const getPetani = await axios.get(
          API_URL + `/dashboard/totalPetani`,
          getTokenInvesta(token())
        );
        const getInvestor = await axios.get(
          API_URL + `/dashboard/totalInvestor`,
          getTokenInvesta(token())
        );
        const getPengajuanSeluruhnya = await axios.get(
          API_URL + `/pengajuan/getPengajuanSeluruhnya`,
          getTokenInvesta(token())
        );
        const getDataChart = await axios.get(
          API_URL + `/dashboard/chartDashboard`,
          getTokenInvesta(token())
        );
        setDataDashboard({
          total_dana: result.data.total_dana,
          total_petani: getPetani.data.total_petani,
          total_investor: getInvestor.data.total_investor,
        });
        setDataProyek(getPengajuanSeluruhnya.data);
        setDataChart(getDataChart.data);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (dataDashboard == null) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Loading />
    </div>;
  }
  return (
    <Layouts title="Admin Dashboard" bg="bg-[#FEE1A5]">
      <Sidebar>
        <Container>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
              <CardDashboard
                label="Total Dana"
                value={toRupiahInvesta(dataDashboard.total_dana)}
                image={Money}
              />
              <CardDashboard
                label="Jumlah Petani"
                value={dataDashboard.total_petani}
                image={Farmer}
              />
              <CardDashboard
                label="Jumlah Investor"
                value={dataDashboard.total_investor}
                image={Investor}
              />
            </div>
            <div>
              <LineChartAdmin data={dataChart} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {dataProyek
                .toReversed()
                .slice(0, 3)
                .map((item, index) => (
                  <CardProyek
                    key={index}
                    status={item.status}
                    title={item.pengajuan_name}
                    kebutuhanDana={item.total_pengajuan}
                    item={item}
                    id={item.id}
                  />
                ))}
            </div>
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  );
};

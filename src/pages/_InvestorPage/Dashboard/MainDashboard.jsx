import { Link } from 'react-router-dom';
import { Container } from '../../../component/atom/Container/Container';
import { toRupiahInvesta } from '../../../utils/function';
import DepositRight from './assets/deposit-right.png';
import Deposit from './assets/deposit.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { useAuthHeader } from 'react-auth-kit';

export const MainDashboard = () => {
  const [data, setData] = useState({
    totalAsset: '',
    totalInvest: '',
  });
  const token = useAuthHeader();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post(API_URL + '/wallet/totalAset', null, {
          headers: {
            Authorization: `${token()}`,
          },
        });
        const invest = await axios.get(API_URL + '/investasi/total', {
          headers: {
            Authorization: `${token()}`,
          },
        });
        setData({
          totalAsset: res.data.total_asset,
          totalInvest: invest.data.total,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <Container>
        <h1 className="uppercase text-2xl font-bold mb-5">Dashboard</h1>
        <div className="bg-[#FCCC78] p-5 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-5 relative overflow-hidden">
          <img
            src={DepositRight}
            alt="deposit"
            className="absolute bottom-0 -right-3 -z-0"
          />
          <img
            src={Deposit}
            alt="deposit"
            className="absolute  -bottom-5 -left-1 -z-0"
          />
          <div className="z-50">
            <h1 className="text-xl text-center font-bold mb-3 text-white ">
              Status Dompet
            </h1>
            <Link to={'/investor/deposit'}>
              <div className="bg-investa-primary-50 text-xl text-white w-fit py-1 px-10 rounded-lg font-bold text-center mx-auto">
                Deposit
              </div>
            </Link>
          </div>
          <div className="bg-[#D3C09E]/50 text-white p-5 rounded z-10 ">
            <p className="font-semibold">Total Aset Anda</p>
            <p className="font-bold">
              {toRupiahInvesta(data.totalAsset == null ? 0 : data.totalAsset)}
            </p>
          </div>
          <div className="bg-[#D3C09E]/50 text-white p-5 rounded z-10 ">
            <p className="font-semibold">Total investasi aktif anda</p>
            <p className="font-bold">{toRupiahInvesta(data.totalInvest)}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

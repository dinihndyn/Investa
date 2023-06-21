import { useEffect, useState } from 'react';
import { toRupiahInvesta } from '../../../utils/function';
import { RingkasanIDR } from './RingkasanIDR';
import { PenarikanDana } from './PenarikanDana';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { useAuthHeader } from 'react-auth-kit';
import { Loading } from '../../../component/molecules/Loading';

export const MainDeposit = () => {
  const [tab, setTab] = useState(1);
  const [dataRupiah, setDataRupiah] = useState();
  const getToken = useAuthHeader();
  const getData = async () => {
    try {
      const res = await axios.post(API_URL + '/wallet/totalAset', null, {
        headers: {
          Authorization: `${getToken()}`,
        },
      });
      setDataRupiah(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (dataRupiah == null) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border h-fit border-investa-primary-50 p-1">
          <div className="text-center ${} text-white ">
            <h1 className="text-2xl font-semibold p-3">Ringkasan akun IDR</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 text-white">
            <div className="text-xl">Total Asset</div>
            <div className="text-end text-xl">
              {toRupiahInvesta(
                dataRupiah?.total_asset == null ? 0 : dataRupiah.total_asset
              )}
            </div>
          </div>
        </div>
        <div className="border border-investa-primary-50 p-1">
          <div className="grid grid-cols-2">
            <div
              className={`text-center ${
                tab == 1 ? 'bg-investa-primary-50' : 'bg-investa-netral-70'
              } text-white `}
            >
              <button
                className="text-2xl font-semibold p-3"
                onClick={() => {
                  setTab(1);
                }}
              >
                Deposit
              </button>
            </div>
            <div
              className={`text-center ${
                tab == 2 ? 'bg-investa-primary-50' : 'bg-investa-netral-70'
              } text-white `}
            >
              <button
                onClick={() => {
                  setTab(2);
                }}
                className="text-2xl font-semibold p-3"
              >
                Penarikan Dana
              </button>
            </div>
          </div>
          {tab == 1 ? <RingkasanIDR /> : <PenarikanDana />}
        </div>
      </div>
    </div>
  );
};

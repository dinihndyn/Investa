import { useAuthHeader, useAuthUser } from 'react-auth-kit';
import { CardProyekInvestor } from './CardProyekInvestor';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { getTokenInvesta } from '../../../utils/function';

export const MainDashboard = () => {
  const token = useAuthHeader();
  const userData = useAuthUser();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + `/investasi/${userData().id}/getInvestasi`,
          getTokenInvesta(token())
        );
        setData(result.data.pengajuan);
        console.log(data);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (data.length == 0) {
    return <h1 className="text-center text-2xl">Belum ada investasi</h1>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.map((item, index) => {
          return (
            <CardProyekInvestor
              key={index}
              data={item}
              day={item.day_left}
              progress={(item.dana_terkumpul / item.total_pengajuan) * 100}
              terpenuhi={item.status == 'Pendanaan Terpenuhi' ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

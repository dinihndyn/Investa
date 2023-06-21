import { useAuthHeader } from 'react-auth-kit';
import { CardProyekInvestor } from './CardProyekInvestor';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getTokenInvesta } from '../../../utils/function';
import { API_URL } from '../../../utils/constant';

export const MainDashboard = () => {
  const token = useAuthHeader();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + `/pengajuan/pengajuanAccept`,
          getTokenInvesta(token())
        );
        setData(result.data);
        console.log(data);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">PROYEK</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.length == 0 ? (
          <>
            <h1 className="text-center col-span-3 text-xl">Belum ada proyek</h1>
          </>
        ) : (
          data.map((item, index) => {
            return (
              <CardProyekInvestor
                key={index}
                data={item}
                day={item.day_left}
                progress={(item.dana_terkumpul / item.total_pengajuan) * 100}
                terpenuhi={item.status == 'Pendanaan Terpenuhi' ? true : false}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

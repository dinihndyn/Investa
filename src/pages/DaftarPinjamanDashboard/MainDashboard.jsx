import { useEffect, useState } from 'react';
import { CardInvestasi } from '../../component/molecules/CardInvestasi';
import { useAuthHeader } from 'react-auth-kit';
import axios from 'axios';
import { API_URL } from '../../utils/constant';
import { getTokenInvesta } from '../../utils/function';
import { Loading } from '../../component/molecules/Loading';

export const MainDashboard = () => {
  const [data, setData] = useState([]);
  const getToken = useAuthHeader();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + '/pengajuan/getPengajuan',
          getTokenInvesta(getToken())
        );
        setData(result.data);
      } catch (error) {
        // Handle error
        // toast.error(Object.values(error.response.data)[0][0]);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (data == null) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
      {data.length == 0 ? (
        <>
          <div className="bg-investa-primary-50 w-full col-span-3 p-3 text-center text-white">
            <h1>Belum ada daftar Pinjaman</h1>
          </div>
        </>
      ) : (
        data.toReversed().map((item, index) => {
          return (
            <CardInvestasi
              id={item.id}
              statusProyek={item.status}
              pengajuan={item.total_pengajuan}
              dana_terkumpul={item.dana_terkumpul}
              imbal_hasil={item.imbal_hasil}
              name={item.pengajuan_name}
              key={index}
              lokasi={item.info_tani.kecamatan}
              img={item.files[0].alamat_gambar}
            />
          );
        })
      )}
    </div>
  );
};

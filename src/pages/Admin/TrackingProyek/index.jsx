import { useEffect, useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Container } from '../../../component/atom/Container/Container';
import { API_URL } from '../../../utils/constant';
import axios from 'axios';
import { getTokenInvesta } from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import { CardProyek } from '../../../component/molecules/Admin/CardProyek';

export const TrackingProyek = () => {
  const [listProyek, setListProyek] = useState([]);
  const token = useAuthHeader();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + `/tracking/getProyek`,
          getTokenInvesta(token())
        );
        setListProyek(result.data);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Layouts title="Tracking Investor">
      <Sidebar>
        <Container>
          <h1 className="font-bold mb-5 text-2xl">Tracking Proyek</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start relative">
            {listProyek.length > 0 ? (
              listProyek.map((item, index) => {
                return (
                  <CardProyek
                    id={item.id}
                    key={index}
                    item={item}
                    danaTerkumpul={item.dana_terkumpul}
                    status={item.status}
                    kebutuhanDana={item.total_pengajuan}
                    title={item.pengajuan_name}
                    lokasi={item?.info_tani.kota}
                    imbalanHasil={item.imbalan_hasil}
                    resiko={item.resiko}
                    link="tracking_proyek"
                  />
                );
              })
            ) : (
              <div>Belum Memiliki Pengajuan</div>
            )}
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  );
};

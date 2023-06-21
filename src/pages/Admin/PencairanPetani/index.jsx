import { useEffect, useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { CardProyek } from '../../../component/molecules/Admin/CardProyek';
import { Container } from '../../../component/atom/Container/Container';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { getTokenInvesta } from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';

const PencairanPetani = () => {
  const [data, setData] = useState([]);
  const token = useAuthHeader();

  const getData = async () => {
    try {
      const res = await axios.get(
        API_URL + '/tracking/getProyek',
        getTokenInvesta(token())
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layouts title="Tracking Investor">
      <Sidebar>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start relative">
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <CardProyek
                    id={item.id}
                    key={index}
                    item={item}
                    danaTerkumpul={item.dana_terkumpul}
                    status={item.status}
                    kebutuhanDana={item.total_pengajuan}
                    image={item.files[0].alamat_gambar}
                    title={item.pengajuan_name}
                    lokasi={item?.info_tani.kota}
                    imbalanHasil={item.imbal_hasil}
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

export default PencairanPetani;

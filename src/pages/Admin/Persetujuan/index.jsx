import { useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Container } from '../../../component/atom/Container/Container';
import { CardProyek } from '../../../component/molecules/Admin/CardProyek';
import { useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { API_URL } from '../../../utils/constant';

export const Persetujuan = () => {
  const [listProyek, setListProyek] = useState([{}]);

  const token = useAuthHeader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token());
        var myHeaders = new Headers();
        myHeaders.append('Authorization', token());

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        };

        const resutlAPI = await fetch(
          `${API_URL}/pengajuan/getPengajuanSeluruhnya`,
          requestOptions
        );
        const result = await resutlAPI.json();
        console.log(result);
        setListProyek(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layouts title="Admin Dashboard">
      <Sidebar>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start relative">
            {listProyek.map((item, index) => {
              return (
                <CardProyek
                  id={item.id}
                  key={index}
                  danaTerkumpul={item.dana_terkumpul}
                  status={item.status}
                  kebutuhanDana={item.total_pengajuan}
                  item={item}
                  title={item.pengajuan_name}
                  lokasi={item?.info_tani?.kota}
                  imbalanHasil={item.imbalan_hasil}
                  resiko={item.resiko}
                />
              );
            })}
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  );
};

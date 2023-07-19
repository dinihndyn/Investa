import { useEffect, useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Container } from '../../../component/atom/Container/Container';
import { API_URL, PUBLIC_URL } from '../../../utils/constant';
import RowTable from './RowTable';
import axios from 'axios';
import {
  dateFormatInvesta,
  getTokenInvesta,
  toRupiahInvesta,
} from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';

export const TrackingInvestor = () => {
  const [listInvestor, setListInvestor] = useState([]);
  const token = useAuthHeader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          API_URL + `/tracking/getInvestor`,
          getTokenInvesta(token())
        );
        setListInvestor(result.data.investasi);
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };
    fetchData();
    console.log('List ', listInvestor);
  }, []);
  return (
    <Layouts title="Tracking Investor">
      <Sidebar>
        <Container>
          <h1 className="font-bold text-xl mb-3">Investor</h1>
          <div className="relative overflow-x-auto overflow-y-scroll shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-sm uppercase bg-white dark:bg-gray-900 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3 text-uppercase">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Proyek
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dana Invest
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Imbal Hasil
                  </th>
                </tr>
              </thead>
              <tbody>
                {listInvestor.length > 0 ? (
                  listInvestor.map((item, index) => {
                    return (
                      <RowTable
                        key={index}
                        danaInvest={toRupiahInvesta(item.amount)}
                        img={
                          item.user.photo == null
                            ? 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg'
                            : PUBLIC_URL + 'image/' + item.user.photo
                        }
                        name={item.user.name}
                        proyek={item.pengajuan.pengajuan_name}
                        tanggal={dateFormatInvesta(item.pengajuan.created_at)}
                        imbal={item.pengajuan.imbal_hasil}
                      />
                    );
                  })
                ) : (
                  <tr className="py-6">
                    <td
                      colSpan="6"
                      className="text-center py-6 font-medium text-base"
                    >
                      Belum ada investor
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  );
};

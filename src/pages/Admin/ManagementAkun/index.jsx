import { Dropdown, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Container } from '../../../component/atom/Container/Container';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Layouts } from '../../../component/molecules/Layouts';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { dateFormatInvesta, getTokenInvesta } from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import { toast } from 'react-toastify';

export const ManagementAkun = ({ akun = 'investor' }) => {
  const token = useAuthHeader();
  const [data, setData] = useState([]);
  const deleteAkun = async (id) => {
    try {
      await axios.post(
        API_URL + `/akun/deleteAkun/${id}`,
        null,
        getTokenInvesta(token())
      );
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch (error) {
      toast.error('Gagal Hapus data');
    }
  };
  const confirmAction = (id) => {
    const confirmation = window.confirm('Apakah Anda ingin melanjutkan?');
    if (confirmation) {
      deleteAkun(id);
    } else {
      console.log('Tidak ada tindakan yang diambil.');
    }
  };
  const getDataInvestor = async () => {
    try {
      const res = await axios.get(
        API_URL + '/akun/getInvestor',
        getTokenInvesta(token())
      );
      setData(res.data.investor);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataPetani = async () => {
    try {
      const res = await axios.get(
        API_URL + '/akun/getPetani',
        getTokenInvesta(token())
      );
      setData(res.data.petani);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (akun == 'investor') {
      getDataInvestor();
    } else {
      getDataPetani();
    }
  }, [akun]);

  return (
    <Layouts title={'Akun ' + akun}>
      <Sidebar>
        <Container>
          <h1 className="text-xl font-bold mb-5">Manajemen akun {akun}</h1>
          <Table striped>
            <Table.Head>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Nama</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Tanggal</Table.HeadCell>
              <Table.HeadCell>Aksi</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((item) => {
                return (
                  <>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
                      <Table.Cell>{item.name}</Table.Cell>
                      <Table.Cell>{item.email}</Table.Cell>
                      <Table.Cell>
                        {dateFormatInvesta(item.created_at)}
                      </Table.Cell>
                      <Table.Cell>
                        <Dropdown color={'yellow'} label="Aksi">
                          <Dropdown.Item
                            onClick={() => {
                              confirmAction(item.id);
                            }}
                          >
                            Hapus
                          </Dropdown.Item>
                        </Dropdown>
                      </Table.Cell>
                    </Table.Row>
                  </>
                );
              })}
            </Table.Body>
          </Table>
        </Container>
      </Sidebar>
    </Layouts>
  );
};

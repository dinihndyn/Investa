import { Dropdown, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useAuthHeader, useSignOut } from 'react-auth-kit';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../../../component/atom/Container/Container';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Layouts } from '../../../component/molecules/Layouts';
import { API_URL } from '../../../utils/constant';
import { dateFormatInvesta, getTokenInvesta } from '../../../utils/function';
import axios from 'axios';
import { toast } from 'react-toastify';

function Articles() {
  const token = useAuthHeader();
  const logout = useSignOut();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const deleteArtikel = async (id) => {
    try {
      const res = await axios.delete(
        API_URL + `/artikel/deleteArtikel/${id}`,
        getTokenInvesta(token())
      );
      console.log(res);
      toast.success('Berhasil menghapus artikel');
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error('Gagal menghapus artikel');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append('Authorization', token());
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        };
        const resultApi = await fetch(
          `${API_URL}/artikel/getArtikel`,
          requestOptions
        );
        const result = await resultApi.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
        if (error.response.status == 401) {
          logout();
          navigate('/login');
        }
      }
    })();
  }, []);

  return (
    <Layouts title={'Artikel'}>
      <Sidebar>
        <Container>
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Tanggal</Table.HeadCell>
              <Table.HeadCell>Judul</Table.HeadCell>
              <Table.HeadCell>Aksi</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {data.length == 0 ? (
                <Table.Row>
                  <Table.Cell colSpan={4}>
                    <h1 className="text-center ">Belum ada artikel</h1>
                  </Table.Cell>
                </Table.Row>
              ) : (
                data.map((item, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>
                        {dateFormatInvesta(item.tanggal_upload)}
                      </Table.Cell>
                      <Table.Cell>{item.judul}</Table.Cell>
                      <Table.Cell>
                        <Dropdown color={'yellow'} label="aksi">
                          <Dropdown.Item
                            onClick={() => {
                              deleteArtikel(item.id);
                            }}
                          >
                            Hapus
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to={`/admin/artikel/${item.id}/edit`}>
                              Edit
                            </Link>
                          </Dropdown.Item>
                        </Dropdown>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              )}
            </Table.Body>
          </Table>
        </Container>
      </Sidebar>
    </Layouts>
  );
}

export default Articles;

import { useEffect, useState } from 'react';
import { Layouts } from '../../../component/molecules/Layouts';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Container } from '../../../component/atom/Container/Container';
import { Button, Modal, Table } from 'flowbite-react';
import axios from 'axios';
import { API_URL, PUBLIC_URL } from '../../../utils/constant';
import { getTokenInvesta, toRupiahInvesta } from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import { toast } from 'react-toastify';
import { Spiner } from '../../../component/atom/Spiner';

const PencairanInvestor = () => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const kembalikanDana = async (id) => {
    try {
      setLoading(true);
      await axios.post(
        API_URL + `/tracking/${id}/pengembalian`,
        null,
        getTokenInvesta(token())
      );
      setLoading(false);
      toast.success('Berhasil mengirim ke Investor');
      setTimeout(() => {
        window.location.reload();
      }, 1200);
      setLoading(false);
    } catch (error) {
      toast.error('Gagal mengembalikan');
      setOpenModal(undefined);
    } finally {
      setLoading(false);
      setOpenModal(undefined);
    }
  };

  const token = useAuthHeader();
  useEffect(() => {
    // TODO: integrasi API get all pencairan investor
    const getData = async () => {
      try {
        const res = await axios.get(
          API_URL + '/tracking/getInvestor',
          getTokenInvesta(token())
        );
        // const res2 = await axios.get(
        //   API_URL + '/pengajuan/2/getInfoPengembalianInvestor',
        //   getTokenInvesta(token())
        // );

        setData(res.data.investasi);
        // console.log(res2.data);
      } catch (error) {
        // toast.error('Gagal mengambil data, silahkan logout dan login kembali');
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Layouts title="Pencairan Investor">
      <Sidebar>
        <Container>
          <Table striped>
            <Table.Head>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Proyek</Table.HeadCell>
              <Table.HeadCell>Dana Investasi</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.length == 0 ? (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell colSpan={5} className="text-center">
                      Tidak ada investor
                    </Table.Cell>
                  </Table.Row>
                </>
              ) : (
                data.map((item) => {
                  return (
                    <>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                          <img
                            src={PUBLIC_URL + 'image/' + item.user.photo}
                            className="w-[50px] object-cover rounded-full h-[50px]"
                            alt={PUBLIC_URL + 'image/' + item.user.photo}
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src =
                                'https://mm.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg';
                            }}
                          />
                        </Table.Cell>
                        <Table.Cell>{item.user.name}</Table.Cell>
                        <Table.Cell>{item.pengajuan.pengajuan_name}</Table.Cell>
                        <Table.Cell>{toRupiahInvesta(item.amount)}</Table.Cell>
                        <Table.Cell>
                          <button
                            onClick={() => {
                              setOpenModal(item.id);
                            }}
                            className="bg-investa-primary-30 font-semibold p-2 rounded text-black shadow"
                          >
                            Kirim
                          </button>
                        </Table.Cell>
                      </Table.Row>
                    </>
                  );
                })
              )}
            </Table.Body>
          </Table>
          {data.map((item) => {
            return (
              <>
                <Modal
                  show={props.openModal === item.id}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Body>
                    <div className="text-center py-24 text-xl px-24 font-bold">
                      Apakah anda ingin melakukan dana pengiriman dana{' '}
                      {item.user.name} sebesar {toRupiahInvesta(item.amount)}?
                    </div>
                    <div className="flex gap-4 px-24 justify-between">
                      <Button
                        onClick={() => kembalikanDana(item.id)}
                        color={'yellow'}
                      >
                        {loading ? <Spiner /> : 'Ya'}
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => props.setOpenModal(undefined)}
                      >
                        Tidak
                      </Button>
                    </div>
                  </Modal.Body>
                </Modal>
              </>
            );
          })}
        </Container>
      </Sidebar>
    </Layouts>
  );
};

export default PencairanInvestor;

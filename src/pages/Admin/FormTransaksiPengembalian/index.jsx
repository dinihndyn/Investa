import { useEffect, useState } from 'react';
import { Container } from '../../../component/atom/Container/Container';
import { Link, useParams } from 'react-router-dom';
import Button from './Button';
import { useAuthHeader } from 'react-auth-kit';
import TablePengembalianDana from './TablePengembalianDana';
import { API_URL } from '../../../utils/constant';
import axios from 'axios';
import { getTokenInvesta } from '../../../utils/function';
import { Layouts } from '../../../component/molecules/Layouts';

const FormTransaksiPengembalian = () => {
  const [dataTable, setDataTable] = useState([]);
  const params = useParams();
  const token = useAuthHeader();

  const getData = async () => {
    try {
      const res = await axios.get(
        API_URL + `/pengajuan/${params.id}/getInfoPemasukan`,
        getTokenInvesta(token())
      );
      console.log(res);
      setDataTable(res.data);
    } catch (error) {
      console.log(error);
      if (error.response.status == 404) {
        setDataTable([]);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layouts>
      <Container>
        <h1 className="text-2xl font-bold mb-5">Form Pengembalian Dana </h1>
        <div className="bg-investa-netral-30 p-10 lg:p-24 rounded-2xl grid grid-cols-3 gap-3">
          {/* <div className='col-span-1'>
          <FormPengembalianDana params={params} dataForm={dataForm} setDataForm={setDataForm} handleSubmit={handleSubmit} />
        </div> */}
          <div className="col-span-3 flex flex-col">
            <Link
              className="self-end"
              to={'/admin/tracking_proyek/' + params.id + '/form'}
            >
              <Button>Tracking Proyek</Button>
            </Link>
            <h2 className="text-lg font-medium text-investa-primary-50">
              Riwayah Pengembalian Dana
            </h2>
            <TablePengembalianDana data={dataTable} />
            {/* <Button className={'self-end'}>Print Bukti Pembelian</Button> */}
          </div>
          <Link
            className="self-end"
            to={'/admin/tracking_proyek/' + params.id + '/form'}
          >
            <Button>Kembali</Button>
          </Link>
        </div>
      </Container>
    </Layouts>
  );
};

export default FormTransaksiPengembalian;

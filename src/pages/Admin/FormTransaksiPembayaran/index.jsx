import { Layouts } from '../../../component/molecules/Layouts';
import { Container } from '../../../component/atom/Container/Container';
import { DetailForm } from './DetailForm';

export const FormTransaksiPembayaran = () => {
  return (
    <div>
      <Layouts title={'Transaksi Pembayaran'}>
        <Container>
          <DetailForm />
        </Container>
      </Layouts>
    </div>
  );
};

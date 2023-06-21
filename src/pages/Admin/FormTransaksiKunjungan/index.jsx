import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { DetailForm } from './DetailForm';

function FormTransaksiKunjungan() {
  return (
    <Layouts title={'Form Info Kunjungan'}>
      <Container>
        <DetailForm />
      </Container>
    </Layouts>
  );
}

export default FormTransaksiKunjungan;

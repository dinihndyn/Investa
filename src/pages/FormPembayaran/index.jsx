import { Layouts } from '../../component/molecules/Layouts';
import { Container } from '../../component/atom/Container/Container';
import { DetailForm } from './DetailForm';

export const FormPembayaran = () => {
  return (
    <div>
      <Layouts title={'Form Info Pembayaran'}>
        <Container>
          <DetailForm />
        </Container>
      </Layouts>
    </div>
  );
};

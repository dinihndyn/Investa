import { Layouts } from '../../component/molecules/Layouts';
import { Container } from '../../component/atom/Container/Container';
import { DetailForm } from './DetailForm';

export const FormInfoKunjungan = () => {
  return (
    <div>
      <Layouts title={'Form Info Kunjungan'}>
        <Container>
          <DetailForm />
        </Container>
      </Layouts>
    </div>
  );
};

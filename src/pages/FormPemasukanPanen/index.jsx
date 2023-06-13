import { Layouts } from '../../component/molecules/Layouts';
import { Container } from '../../component/atom/Container/Container';
import { DetailForm } from './DetailForm';

export const FormPemasukanPanen = () => {
  return (
    <div>
      <Layouts title={'Form PemasukanPanen'}>
        <Container>
          <DetailForm />
        </Container>
      </Layouts>
    </div>
  );
};

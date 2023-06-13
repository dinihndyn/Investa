import { Container } from '../../component/atom/Container/Container';
import { Layouts } from '../../component/molecules/Layouts';
import { Detail } from './Detail';

export const DetailProyek = () => {
  return (
    <Layouts title={'Detail Proyek'}>
      <Container>
        <Detail />
      </Container>
    </Layouts>
  );
};

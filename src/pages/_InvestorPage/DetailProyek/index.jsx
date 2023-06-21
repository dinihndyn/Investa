import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { DetailProyekKepunyaan } from './DetailProyekKepunyaan';

export const InvestorDetailProyek = () => {
  return (
    <Layouts title={'Detail Proyek'} withFooter>
      <Container>
        <DetailProyekKepunyaan />
      </Container>
    </Layouts>
  );
};

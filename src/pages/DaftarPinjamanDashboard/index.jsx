import { Layouts } from '../../component/molecules/Layouts';
import { SideDashboard } from '../Dashboard/SideDashboard';
import { Container } from '../../component/atom/Container/Container';
import { MainDashboard } from './MainDashboard';

export const DaftarPinjamanDashboard = () => {
  return (
    <Layouts title={'Daftar Pinjaman'}>
      <SideDashboard isQuestion>
        <Container>
          <MainDashboard />
        </Container>
      </SideDashboard>
    </Layouts>
  );
};

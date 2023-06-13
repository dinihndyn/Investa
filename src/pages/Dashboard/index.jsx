import { Layouts } from '../../component/molecules/Layouts';
import { SideDashboard } from './SideDashboard';
import { Container } from '../../component/atom/Container/Container';
import { MainDashboard } from './MainDashboard';

export const DashboardPetani = () => {
  return (
    <Layouts title={'Dashboard Petani'}>
      <SideDashboard isQuestion>
        <Container>
          <MainDashboard />
        </Container>
      </SideDashboard>
    </Layouts>
  );
};

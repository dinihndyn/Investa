import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { SideDashboard } from '../../Dashboard/SideDashboard';
import { MainDashboard } from './MainDashboard';

export const InvestorInvestasi = () => {
  return (
    <Layouts title={'Proyek Investor'}>
      <SideDashboard isInvestor isQuestion>
        <Container>
          <MainDashboard />
        </Container>
      </SideDashboard>
    </Layouts>
  );
};

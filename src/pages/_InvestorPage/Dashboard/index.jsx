import { Layouts } from '../../../component/molecules/Layouts';
import { SideDashboard } from '../../Dashboard/SideDashboard';
import { Information } from './Information';
import { MainDashboard } from './MainDashboard';

export const InvestorDashboard = () => {
  return (
    <div>
      <Layouts title={'Dashboard Investor'}>
        <SideDashboard isInvestor>
          <MainDashboard />
          <Information />
        </SideDashboard>
      </Layouts>
    </div>
  );
};

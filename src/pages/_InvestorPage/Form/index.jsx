import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { MainDashboard } from './MainDashboard';

export const FormInvestor = () => {
  return (
    <Layouts>
      <Container>
        <MainDashboard />
      </Container>
    </Layouts>
  );
};

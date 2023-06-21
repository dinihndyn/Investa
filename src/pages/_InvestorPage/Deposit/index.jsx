import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { MainDeposit } from './MainDeposit';

export const InvestorDeposit = () => {
  return (
    <Layouts bg="bg-[#252525]" title={'Deposit'} withFooter>
      <Container>
        <MainDeposit />
      </Container>
    </Layouts>
  );
};

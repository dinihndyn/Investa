import { Container } from '../../../component/atom/Container/Container';
import { Layouts } from '../../../component/molecules/Layouts';
import { DetailChild } from './DetailChild';

export const DetailProyekInvestorListNew = () => {
  return (
    <div>
      <Layouts title={'Detail'}>
        <Container>
          <DetailChild />
        </Container>
      </Layouts>
    </div>
  );
};

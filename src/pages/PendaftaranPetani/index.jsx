import { Container } from '../../component/atom/Container/Container';
import { Layouts } from '../../component/molecules/Layouts';
import { FormPinjamanPetani } from './FormPinjamanPetani';

export const PendaftaranPetani = () => {
  return (
    <div>
      <Layouts title={'Pendaftaran Petani'}>
        <Container>
          <FormPinjamanPetani />
        </Container>
      </Layouts>
    </div>
  );
};

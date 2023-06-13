import { Container } from '../../component/atom/Container/Container';
import { Layouts } from '../../component/molecules/Layouts';
import { Sidebar } from '../../component/molecules/Sidebar';
import { FormProfile } from './FormProfile';

export const ProfilPetani = () => {
  return (
    <Layouts title={'Profil'} withFooter>
      <Sidebar>
        <Container>
          <FormProfile />
        </Container>
      </Sidebar>
    </Layouts>
  );
};

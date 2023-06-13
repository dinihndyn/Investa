import { Container } from '../../component/atom/Container/Container';
import { Layouts } from '../../component/molecules/Layouts';
import { Sidebar } from '../../component/molecules/Sidebar';
import { FormProfilEdit } from './FormProfilEdit';

export const EditProfil = () => {
  return (
    <Layouts title={'Edit Profil'}>
      <Sidebar>
        <Container>
          <FormProfilEdit />
        </Container>
      </Sidebar>
    </Layouts>
  );
};

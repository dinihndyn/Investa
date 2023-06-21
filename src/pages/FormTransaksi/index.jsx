import { Container } from '../../component/atom/Container/Container';
import { Layouts } from '../../component/molecules/Layouts';
import { FormTransaksiChild } from './FormTransaksiChild';

export const FormTransaksiPetani = () => {
  return (
    <Layouts title={'Form Transaksi'}>
      <Container>
        <FormTransaksiChild />
      </Container>
    </Layouts>
  );
};

import { Layouts } from '../../component/molecules/Layouts';
import { HeaderArtikel } from './HeaderArtikel';
import { MainArtikel } from './MainArtikel';

export const Artikel = () => {
  return (
    <div>
      <Layouts withFooter title={'Artikel'}>
        <HeaderArtikel />
        <MainArtikel />
      </Layouts>
    </div>
  );
};

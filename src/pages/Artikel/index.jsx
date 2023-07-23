import { Layouts } from '../../component/molecules/Layouts';
import { MainArtikel } from './MainArtikel';

export const Artikel = () => {
  return (
    <div>
      <Layouts withFooter title={'Artikel'}>
        <MainArtikel />
      </Layouts>
    </div>
  );
};

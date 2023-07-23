import { Layouts } from '../../component/molecules/Layouts';
import { HomeBigFooter } from './HomeBigFooter';
import { HomeCeritaMereka } from './HomeCeritaMereka';
import { HomeDukungPetani } from './HomeDukungPetani';
import { HomeJumbotron } from './HomeJumbotron';
import { HomeKeuntungan } from './HomeKeuntungan';
import { HomeLiputan } from './HomeLiputan';
import { HomePengajuanProyek } from './HomePengajuanProyek';
import { HomeProyekPertanian } from './HomeProyekPertanian';

export const Home = () => {
  return (
    <>
      <Layouts title={'Home'} bg="bg-white" withFooter>
        <HomeJumbotron />
        <HomeDukungPetani />
        <HomeKeuntungan />
        <HomePengajuanProyek />
        <HomeCeritaMereka />
        <HomeProyekPertanian />
        <HomeBigFooter />
      </Layouts>
    </>
  );
};

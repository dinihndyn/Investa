import { Container } from '../../component/atom/Container/Container';
import { HeaderText } from '../../component/atom/HeaderText/HeaderText';
import { ListCheck } from './components/ListCheck';
import ImageFarmer from './assets/Farmer-rafiki 1.png';

export const HomeKeuntungan = () => {
  return (
    <div>
      <Container>
        <HeaderText
          header={'Keuntungan Bersama INVESTA'}
          description={'Nikmati berbagai keuntungan bersama kami'}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="flex flex-col gap-3 col-span-2">
            <ListCheck
              label={
                'Mendapat modal berupa sarana produksi berkualitas tinggidan pembiayaan tenaga kerja.'
              }
            />
            <ListCheck
              label={'Dibimbing langsung oleh ahlinya saat berbudidaya.'}
            />
            <ListCheck
              label={'Penyediaan SOP untuk menjaga kelancaran proyek'}
            />
            <ListCheck
              label={
                'Pencairan dana langsung melalui toko tani untuk membeli kebutuhan proyek'
              }
            />
            <ListCheck
              label={'Pengembalian pinjaman dapat berupa hasil panen pertanian'}
            />
            <ListCheck
              label={'Penyaluran hasil panen akan dibantu dengan rekan INVESTA'}
            />
            <ListCheck label={'Akses pasar dengan harga terbaik.'} />
          </div>
          <div>
            <img
              src={ImageFarmer}
              alt="farmer-img"
              className="hidden md:block"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

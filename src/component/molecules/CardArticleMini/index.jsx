export const CardArtikelMini = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <img
          src="https://assets-a1.kompasiana.com/items/album/2021/11/16/petani-shutterstock-61936cd6c26b7755ac70b372.jpg"
          alt="img"
          className="w-42 h-3w-42 object-cover rounded-xl"
        />
        <h1 className="text-lg font-semibold mb-3">
          Cara Agar Dapat Mengurangi Gagal Panen Akibat Curah Hujan Tinggi
        </h1>
        <div className="flex gap-3  col-span-2">
          <p>Andika Dharma Putra</p>
          <p className="text-investa-netral-50">| Nov 01, 2022</p>
        </div>
        <div className="w-fit px-3 py-1 text-xs col-span-2 bg-investa-netral-50 text-investa-netral-70 font-semibold rounded">
          Belajar Bertani
        </div>
      </div>
      <div className="w-full bg-black h-[2px] my-10"></div>
    </>
  );
};

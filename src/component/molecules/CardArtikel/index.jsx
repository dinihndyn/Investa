export const CardArtikel = () => {
  return (
    <div>
      <div className="flex gap-3 mb-3">
        <p>Andika Dharma Putra</p>
        <p className="text-investa-netral-50">| Nov 01, 2022</p>
      </div>
      <div className="grid grid-cols-3 mb-3">
        <div className="col-span-2">
          <h1 className="text-2xl font-semibold mb-3">
            Cara Agar Dapat Mengurangi Gagal Panen Akibat Curah Hujan Tinggi
          </h1>
          <p className="line-clamp-3">
            Langkah strategis untuk mencegah gagal panen pada tanaman pertanian
            pangan akibat dari dampak curah hujan yang sangat tinggi. Berikut
            adalah langkah-langkah yang dapar anda laku
          </p>
          <div className="w-fit px-3 py-1 text-xs bg-investa-netral-50 text-investa-netral-70 font-semibold my-5 rounded">
            Belajar Bertani
          </div>
        </div>
        <div>
          <img
            src="https://assets-a1.kompasiana.com/items/album/2021/11/16/petani-shutterstock-61936cd6c26b7755ac70b372.jpg"
            alt="img"
            className="w-56 h-56 object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="w-full bg-black h-[2px] my-10"></div>
    </div>
  );
};

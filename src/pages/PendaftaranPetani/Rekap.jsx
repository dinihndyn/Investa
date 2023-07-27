import { toRupiahInvesta } from '../../utils/function';

export const Rekap = ({ formik, file }) => {
  const totalHarga = formik.values.kebutuhan.reduce((total, item) => {
    return total + item.jumlah * item.harga;
  }, 0);
  return (
    <div className="bg-white p-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <h1 className="text-xl font-semibold mb-3">Rencana Pinjaman</h1>
        <h1 className="text-xl font-semibold mb-3">Rencana Pengembalian</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid grid-cols-2">
          <p className="mb-3">Nama Proyek Pinjaman</p>
          <p className="font-semibold">{formik.values.pengajuan_name}</p>
          <p className="mb-3">Estimasi Lama Proyek Berlangsung</p>
          <p className="font-semibold">{formik.values.tenor}</p>
          <p>Foto Proyek Pinjaman</p>
          <div className="mb-3">
            <img
              src={file}
              alt="img"
              className="h-[200px] rounded-lg object-cover w-full"
            />
          </div>
          <p className="mb-3">Barang Kebutuhan</p>
          <div className="font-semibold mb-3">
            {formik?.values?.kebutuhan.map((item, index) => {
              return (
                <p key={index}>
                  {item?.nama} {item?.jumlah} {item?.satuan}
                </p>
              );
            })}
            {/* <p>Pupuk {formik.values.kebutuhan[0]['jumlah']} kg</p>
            <p>Bibit {formik?.values?.kebutuhan[1]?.jumlah} g</p>
            <p>Pestisida {formik?.values?.kebutuhan[2]?.jumlah}l </p>
            <p>Media Tanam {formik?.values?.kebutuhan[3]?.jumlah} Pc</p> */}
          </div>
          <p className="mb-3">Jumlah Nominal Pinjaman</p>
          <p className="font-semibold">{toRupiahInvesta(totalHarga)}</p>
        </div>
        <div className="">
          <div className="grid grid-cols-2">
            <p className="mb-3 h-fit">Estimasi Tanggal Pembayaran</p>
            <p className="font-semibold h-fit">{formik.values.estimasi_pengembalian}</p>
          </div>

          <div className="grid grid-cols-2">
            <p className="mb-3">Jangka Waktu Pinjam (Tenor)</p>
            <p className="font-semibold">{formik.values.tenor}</p>
          </div>

          <div className="col-span-2">
            <div className=" grid grid-cols-2 gap-2 mb-3 bg-investa-primary-10 p-5 rounded">
              <div>Imbal Hasil</div>
              <div>{formik.values.imbal_hasil}%</div>
              <div>Estimasi Pengembalian</div>
              <div>{toRupiahInvesta(formik.values.total_pengembalian)}</div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <p className="mb-3">Metode Pelunasan</p>
            <p className="font-semibold">{formik.values.metode_pelunasan}</p>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 col-span-2">
          <h1 className="text-xl font-semibold mb-3">Informasi Petani</h1>
          <h1 className="text-xl font-semibold mb-3">Informasi Lahan</h1>
        </div>
        <div className="grid grid-cols-2">
          <p className="mb-3">Pengalaman Bertani</p>
          <p className="font-semibold">{formik.values.pengalaman_tani}</p>
          <p className="mb-3">Status Kelompok tani</p>
          <p className="font-semibold">{formik.values.kelompok_tani}</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="mb-3">Status Kepemilikan Lahan</p>
          <p className="font-semibold">{formik.values.status_lahan}</p>
          <p className="mb-3">Luas Lahan</p>
          <p className="font-semibold">{formik.values.luas_lahan} Meter</p>
          <p>Alamat Lahan</p>
          <p className="mb-3">{formik.values.alamat} Kec. {formik.values.kecamatan} {formik.values.kota}, {formik.values.provinsi}</p>
        </div>
      </div>
      <hr className="my-10" />
      <div>
        <h1 className="text-xl font-semibold mb-3">
          Persetujuan Sebagai Peminjam
        </h1>
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            defaultValue
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="link-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Saya sudah membaca dan menyetujui Syarat dan Ketentuan dan Kebijakan
            Privasi.
          </label>
        </div>
      </div>
    </div>
  );
};

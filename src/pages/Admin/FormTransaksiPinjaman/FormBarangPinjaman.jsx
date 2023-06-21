import { FileInput, Label, TextInput } from 'flowbite-react';

const FormBarangPinjaman = ({ formik, onChangeImg }) => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="tanggal" value="Tanggal" />
        </div>
        <TextInput
          id="tanggal"
          name="infoPinjam[0][tanggal]"
          placeholder="Masukan tanggal"
          type="date"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="jumlah" value="Jumlah" />
        </div>
        <TextInput
          id="jumlah"
          name="infoPinjam[0][jumlah]"
          placeholder="Masukan jumlah"
          type="number"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nama_barang" value="Nama Barang" />
        </div>
        <TextInput
          id="namaBarang"
          placeholder="Masukan nama barang"
          type="text"
          name="infoPinjam[0][barang]"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="harga" value="Harga Barang" />
        </div>
        <TextInput
          id="harga"
          name="infoPinjam[0][harga]"
          placeholder="Masukan harga"
          type="number"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="harga" value="Bukti Pembelian" />
        </div>
        <FileInput
          name="gambar"
          placeholder="Masukan harga"
          onChange={onChangeImg}
        />
      </div>
    </>
  );
};

export default FormBarangPinjaman;

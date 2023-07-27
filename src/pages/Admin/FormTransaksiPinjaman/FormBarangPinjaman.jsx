import { Label, TextInput } from 'flowbite-react';

const FormBarangPinjaman = ({ formik, dana }) => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="dana" value="Dana Terkumpul" />
        </div>
        <TextInput
          className="font-bold"
          id="dana"
          type="text"
          value={dana}
          readOnly
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
    </>
  );
};

export default FormBarangPinjaman;

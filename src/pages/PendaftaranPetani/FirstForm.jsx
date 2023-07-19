import React, { useState, useEffect } from 'react';
import { toRupiahInvesta } from '../../utils/function';
import { FormConditional } from './components/FormConditional';

export const FirstForm = ({ handleChange, handleFileChange, formik }) => {
  const [totalHarga, setTotalHarga] = useState(0);
  const [imbalHasil, setImbalHasil] = useState(0);
  const [estimasiPengembalian, setEstimasiPengembalian] = useState(0);

  useEffect(() => {
    const calculateTotalHarga = () => {
      const harga = formik.values.kebutuhan.reduce((total, item) => {
        return total + item.jumlah * item.harga;
      }, 0);
      setTotalHarga(harga);
    };

    const calculateImbalHasil = () => {
      let persen = 0;
      if (formik.values.tenor === '3 Bulan') {
        persen = 1;
      } else if (formik.values.tenor === '6 Bulan') {
        persen = 3;
      } else if (formik.values.tenor === '9 Bulan') {
        persen = 5;
      }
      setImbalHasil(persen);
    };

    const calculateEstimasiPengembalian = () => {
      const estimasi = totalHarga + (totalHarga * imbalHasil) / 100;
      setEstimasiPengembalian(estimasi);
    };

    calculateTotalHarga();
    calculateImbalHasil();
    calculateEstimasiPengembalian();
  }, [formik.values.kebutuhan, formik.values.tenor, totalHarga, imbalHasil]);
  

  const [elements, setElements] = useState([]);

  const addElement = () => {
    const newElement = (
      <div className="mb-5" key={elements.length + 1}>
        <FormConditional
          formik={formik}
          num={elements.length + 1}
          handleChange={handleChange}
        />
      </div>
    );
    setElements([...elements, newElement]);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-white rounded p-10">
        <h1 className="text-2xl font-semibold mb-5">Informasi Pinjaman</h1>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap  requireds"
          >
            Nama Proyek Pertanian
          </label>
          <input
            required
            name="pengajuan_name"
            onChange={handleChange}
            value={formik.values.pengajuan_name}
            placeholder="Masukkan nama proyek pertanian"
            type="text"
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Tanggal Mulai Proyek
          </label>
          <input
            required
            name="start_date"
            type="date"
            onChange={handleChange}
            value={formik.values.start_date}
            className="w-full  rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Tanggal Selesai Proyek
          </label>
          <input
            required
            name="end_date"
            type="date"
            onChange={handleChange}
            value={formik.values.end_date}
            className="w-full  rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Foto Proyek Pertanian
          </label>
          <input
            required
            name="gambar[]"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Pilih Komoditas Tanam
          </label>
          <select
            name="komoditas"
            onChange={handleChange}
            id="komoditas"
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          >
            <option value="" disabled selected hidden>
              Pilih Komoditas
            </option>
            <option
              selected={formik.values.komoditas == 'Padi' ? true : false}
              value="Padi"
            >
              Padi
            </option>
            <option
              selected={formik.values.komoditas == 'Jagung' ? true : false}
              value="Jagung"
            >
              Jagung
            </option>
            <option
              selected={formik.values.komoditas == 'Cabai' ? true : false}
              value="Cabai"
            >
              Cabai
            </option>
            <option
              selected={formik.values.komoditas == 'Lainnya' ? true : false}
              value="Lainnya"
            >
              Lainnya
            </option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-5">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds  "
          >
            Kebutuhan pinjaman
          </label>
          
          <button
            type="button"
            onClick={addElement}
            className=" bg-investa-primary-50 rounded-lg py-1 px-2 text-white"
          >
            Tambah Pinjaman (+)
          </button>
        </div>
        <span className="text-investa-netral-50">
          1. Nama Barang contoh (bibit,pupuk,dll.)<br />
          2. Jenis/Merek adalah varian spesifik dari barang pertanian<br />
          3. Jumlah adalah banyak barang yang di perlukan<br />
          4. Satuan banyak barang contoh (kg/g/karung/l,)<br />
          5. Harga Satuan adalah harga barang per item<br />

        </span>
        

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-2 mt-5">
          <div>
            <p className="font-semibold">Nama Barang</p>
          </div>
          <div>
            <p className="font-semibold">Jenis/Merek</p>
          </div>
          <div>
            <p className="font-semibold">Jumlah</p>
          </div>
          <div>
            <p className="font-semibold">Satuan</p>
          </div>
          <div>
            <p className="font-semibold">Harga Satuan</p>
          </div>
        </div>
        <div className="mb-5">
          <FormConditional handleChange={handleChange} num={0} />
        </div>
        {elements.map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}

        <div className="flex flex-col gap-2 mb-3 mt-10">
          <label
            htmlFor="#"
            className=" col-span-2 text-end text-md whitespace-nowrap requireds "
          >
            Total Pinjaman
          </label>

          <p className="mt-3 text-end font-bold text-2xl">
            {toRupiahInvesta(totalHarga)}
          </p>
        </div>
      </div>
      <div className="bg-white rounded p-10">
        <h1 className="text-2xl font-semibold mb-5">Rencana Pengembalian</h1>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap  requireds"
          >
            Estimasi Pengembalian Pinjaman
          </label>
          <input
            required
            onChange={handleChange}
            value={formik.values.estimasi_pengembalian}
            name="estimasi_pengembalian"
            type="date"
            className="w-full  rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className="col-span-2 text-md whitespace-nowrap requireds"
          >
            Jangka waktu Pinjaman (Tenor)
          </label>
          <span className="text-investa-netral-50">
            Tenor yang Anda Pilih Mempengaruhi Imbal Hasil yang harus Anda Bayarkan
          </span>
          <div>
            <div>
              <ul className="grid w-full gap-6 md:grid-cols-3">
                <li>
                  <input
                    type="radio"
                    id="3-bulan"
                    name="tenor"
                    onChange={handleChange}
                    value="3 Bulan"
                    className="hidden peer"
                    required
                    checked={formik.values.tenor === '3 Bulan'}
                  />
                  <label
                    htmlFor="3-bulan"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">3 Bulan</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="6-bulan"
                    name="tenor"
                    onChange={handleChange}
                    value="6 Bulan"
                    checked={formik.values.tenor === '6 Bulan'}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="6-bulan"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">6 Bulan</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="9-bulan"
                    name="tenor"
                    onChange={handleChange}
                    value="9 Bulan"
                    className="hidden peer"
                    checked={formik.values.tenor === '9 Bulan'}
                    required
                  />
                  <label
                    htmlFor="9-bulan"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">9 Bulan</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3 bg-investa-primary-10 p-5 rounded">
          <div>Imbal Hasil</div>
          <div>{imbalHasil}%</div>
          <div>Estimasi Pengembalian</div>
          <div>{toRupiahInvesta(estimasiPengembalian)}</div>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Metode Pelunasan
          </label>

          <div>
            <div>
              <ul className="grid w-full gap-6 md:grid-cols-3">
                <li>
                  <input
                    type="radio"
                    id="indomaret"
                    name="metode_pelunasan"
                    onChange={handleChange}
                    value="Via Indomaret"
                    className="hidden peer"
                    required
                    checked={
                      formik.values.metode_pelunasan == 'Via Indomaret'
                        ? true
                        : false
                    }
                  />
                  <label
                    htmlFor="indomaret"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Via Indomaret
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="bri"
                    name="metode_pelunasan"
                    onChange={handleChange}
                    value="BRI"
                    className="hidden peer"
                    required
                    checked={
                      formik.values.metode_pelunasan == 'BRI' ? true : false
                    }
                  />
                  <label
                    htmlFor="bri"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Bank BRI
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="bca"
                    name="metode_pelunasan"
                    onChange={handleChange}
                    value="BCA"
                    className="hidden peer"
                    required
                    checked={
                      formik.values.metode_pelunasan == 'BCA' ? true : false
                    }
                  />
                  <label
                    htmlFor="bca"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Bank BCA
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="alfamart"
                    name="metode_pelunasan"
                    onChange={handleChange}
                    value="Via Alfamart"
                    className="hidden peer"
                    required
                    checked={
                      formik.values.metode_pelunasan == 'Via Alfamart'
                        ? true
                        : false
                    }
                  />
                  <label
                    htmlFor="alfamart"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Via Alfamart
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="mandiri"
                    name="metode_pelunasan"
                    onChange={handleChange}
                    value="Bank Mandiri"
                    className="hidden peer"
                    required
                    checked={
                      formik.values.metode_pelunasan == 'Bank Mandiri'
                        ? true
                        : false
                    }
                  />
                  <label
                    htmlFor="mandiri"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Bank Mandiri
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="bni"
                    name="metode_pelunasan"
                    onChange={handleChange}
                    value="Bank BNI"
                    className="hidden peer"
                    required
                    checked={
                      formik.values.metode_pelunasan == 'Bank BNI'
                        ? true
                        : false
                    }
                  />
                  <label
                    htmlFor="bni"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Bank BNI
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import axios from 'axios';
import { useEffect, useState } from 'react';

export const SecondForm = ({ handleChange, formik }) => {
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [kabKota, setKabKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);

  const [selectedKota, setSelectedKota] = useState(formik.values.kota || '');
  const [selectedKecamatan, setSelectedKecamatan] = useState(
    formik.values.kecamatan || ''
  );


  // eslint-disable-next-line no-unused-vars
  const [idProvinsi, setIdProvinsi] = useState('');

  const fetchApi = async () => {
    const response = await axios.get(
      'https://dev.farizdotid.com/api/daerahindonesia/provinsi'
    );
    setDataProvinsi(response.data.provinsi);
  };

  const fetchKabKota = async (id) => {
    const response = await axios.get(
      `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`
    );
    setKabKota(response.data.kota_kabupaten);
  };
  const fetchKecamatan = async (id) => {
    const response = await axios.get(
      `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`
    );
    setKecamatan(response.data.kecamatan);
  };

  useEffect(() => {
    fetchApi();
    localStorage.setItem('step2', true);
    if (formik.values.provinsi) {
      const selectedProvinsi = dataProvinsi.find(
        (item) => item.nama === formik.values.provinsi
      );
      setSelectedKota(formik.values.kota || ''); // Set selectedKota state based on formik values
      if (selectedProvinsi) {
        setIdProvinsi(selectedProvinsi.id);
        fetchKabKota(selectedProvinsi.id);
      }
    }
    if (formik.values.kota) {
      const selectedKota = kabKota.find((item) => item.nama === formik.values.kota);
      setSelectedKecamatan(formik.values.kecamatan || ''); // Set selectedKecamatan state based on formik values
      if (selectedKota) {
        fetchKecamatan(selectedKota.id);
      }
    }
  }, [formik.values.provinsi, formik.values.kota, formik.values.kecamatan, dataProvinsi]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-white rounded p-10">
        <h1 className="text-2xl font-semibold mb-5">Informasi Kelompok Tani</h1>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap  requireds"
          >
            Pengalaman Bertani
          </label>
          <div>
            <div>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="kurang-1tahun"
                    name="pengalaman_tani"
                    onChange={handleChange}
                    value={'Kurang dari 1 Tahun'}
                    className="hidden peer"
                    required
                    checked={
                      formik.values.pengalaman_tani == 'Kurang dari 1 Tahun'
                        ? true
                        : false
                    }
                  />
                  <label
                    htmlFor="kurang-1tahun"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Kurang dari 1 Tahun
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="lebih_1tahun"
                    name="pengalaman_tani"
                    onChange={handleChange}
                    value={'Lebih dari 1 Tahun'}
                    className="hidden peer"
                    required
                    checked={
                      formik.values.pengalaman_tani == 'Lebih dari 1 Tahun'
                        ? true
                        : false
                    }
                  />
                  <label
                    htmlFor="lebih_1tahun"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Lebih dari 1 Tahun
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className="col-span-2 text-md whitespace-nowrap requireds"
          >
            Sudah Bergabung dalam kelompok tani?
          </label>
          <div>
            <div>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="sudah"
                    value={'Sudah Bergabung'}
                    className="hidden peer"
                    required
                    name="kelompok_tani"
                    onChange={handleChange}
                    checked={
                      formik.values.kelompok_tani === 'Sudah Bergabung'
                    }
                  />
                  <label
                    htmlFor="sudah"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Sudah Bergabung
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="belum_bergabung"
                    value={'Belum Bergabung'}
                    className="hidden peer"
                    required
                    name="kelompok_tani"
                    onChange={handleChange}
                    checked={
                      formik.values.kelompok_tani === 'Belum Bergabung'
                    }
                  />
                  <label
                    htmlFor="belum_bergabung"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Belum Bergabung
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {formik.values.kelompok_tani === 'Sudah Bergabung' && (
          <>
            <div className="flex flex-col gap-2 mb-3">
              <label
                htmlFor="#"
                className="col-span-2 text-md whitespace-nowrap requireds"
              >
                Nama Kelompok Tani
              </label>
              <input
                required
                name="nama_kelompok"
                onChange={handleChange}
                value={formik.values.nama_kelompok}
                placeholder="Masukkan Nama Kelompok Tani"
                type="text"
                className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label
                htmlFor="#"
                className="col-span-2 text-md whitespace-nowrap requireds"
              >
                Jumlah Kelompok Tani
              </label>
              <input
                required
                value={formik.values.jumlah_anggota}
                placeholder="Masukkan Jumlah Anggota Kelompok Tani"
                name="jumlah_anggota"
                type="text"
                onChange={handleChange}
                className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
              />
            </div>
          </>
        )}
      </div>
      <div className="bg-white rounded p-10">
        <h1 className="text-2xl font-semibold mb-5">Informasi Lahan</h1>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap  requireds"
          >
            Status Kepemilikan Lahan
          </label>
          <div>
            <div>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="lahan_pribadi"
                    value={'Lahan Pribadi'}
                    className="hidden peer"
                    required
                    name="status_lahan"
                    onChange={handleChange}
                    checked={
                      formik.values.status_lahan == 'Lahan Pribadi'
                        ? true
                        : false
                    }
                  />
                  <label
                    htmlFor="lahan_pribadi"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Lahan Pribadi
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="lahan_swa"
                    value={'Lahan Sewa'}
                    className="hidden peer"
                    required
                    name="status_lahan"
                    checked={
                      formik.values.status_lahan == 'Lahan Sewa' ? true : false
                    }
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="lahan_swa"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-investa-primary-50 peer-checked:text-investa-primary-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        Lahan Sewa
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Luas Lahan
          </label>
          <div className="flex gap-3">
            <input
              required
              onChange={handleChange}
              name="luas_lahan"
              type="text"
              value={formik.values.luas_lahan}
              className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
            />
            <div className="w-[50px] border border-investa-primary-50 font-bold flex items-center justify-center">
              m <sup>2</sup>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-semibold text-2xl">Alamat lahan</h1>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Pilih Provinsi
          </label>
          <select
            name="provinsi"
            id="komoditas"
            onChange={(e) => {
              formik.handleChange(e);
              const selectedProvinsiNama = e.target.value; // Nama Provinsi
              const selectedProvinsi = dataProvinsi.find(item => item.nama === selectedProvinsiNama);
              fetchKabKota(selectedProvinsi.id); // Ambil ID Provinsi untuk mendapatkan data kota
            }}
            value={formik.values.provinsi}
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          >
            <option value="" selected disabled hidden>
              Pilih Provinsi
            </option>
            {dataProvinsi.map((item, index) => {
              return (
                <option key={index} value={item.nama}>
                  {item.nama}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Pilih Kota
          </label>
          <select
            name="kota"
            onChange={(e) => {
              formik.handleChange(e);
              setSelectedKota(e.target.value); // Update selectedKota state
              const selectedKotaNama = e.target.value; // Nama Kota
              const selectedKota = kabKota.find(
                (item) => item.nama === selectedKotaNama
              );
              fetchKecamatan(selectedKota.id); // Ambil ID Kota untuk mendapatkan data kecamatan
            }}
            value={selectedKota} // Use selectedKota state variable
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          >
            <option value="" selected disabled hidden>
              Pilih Kab/Kota
            </option>
            {kabKota?.map((item) => {
              return (
                <option value={item.nama} key={item.id}>
                  {item.nama}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Pilih Kecamatan
          </label>
          <select
            name="kecamatan"
            onChange={(e) => {
              formik.handleChange(e);
              setSelectedKecamatan(e.target.value); // Update selectedKecamatan state
            }}
            value={selectedKecamatan} // Use selectedKecamatan state variable
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          >
            <option value="" selected disabled hidden>
              Pilih Kecamatan
            </option>
            {kecamatan?.map((item) => {
              return (
                <option value={item.nama} key={item.id}>
                  {item.nama}
                </option>
              );
            })}
          </select>

        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Kode Pos
          </label>
          <input
            required
            name="kode_pos"
            onChange={handleChange}
            value={formik.values.kode_pos}
            type="text"
            placeholder="Masukkan Kode POS"
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="#"
            className=" col-span-2 text-md whitespace-nowrap requireds "
          >
            Alamat
          </label>
          <input
            required
            name="alamat"
            onChange={handleChange}
            value={formik.values.alamat}
            placeholder="Masukkan alamat lengkap"
            type="text"
            className="w-full capitalize rounded md:col-span-10 border-1 border-investa-primary-50 placeholder:italic"
          />
        </div>
      </div>
    </div>
  );
};

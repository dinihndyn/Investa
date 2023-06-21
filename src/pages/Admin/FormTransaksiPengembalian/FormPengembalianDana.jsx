import { Label, Select, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const FormPengembalianDana = ({ params, dataForm, setDataForm, handleSubmit }) => {

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex max-w-md flex-col gap-4'>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="tanggal"
            value="Tanggal"
          />
        </div>
        <TextInput
          id="tanggal"
          name="tanggal"
          placeholder="Masukan tanggal"
          type="date"
          value={dataForm.tanggal}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="deskripsi"
            value="Deskripsi"
          />
        </div>
        <Select
          id="deskripsi"
          name="deskripsi"
          placeholder="Masukan deskripsi"
          type="text"
          value={dataForm.deskripsi}
          onChange={handleChange}
        >
          <option>
            Pilih Deskripsi
          </option>
          <option value={"Verifikasi Pembayaran Petani"} >
            Verifikasi Pembayaran Petani
          </option>
          <option value={"Pengembalian Dana Investor"}>
            Pengembalian Dana Investor
          </option>
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="status"
            value="Status"
          />
        </div>
        <Select
          id="status"
          name="status"
          placeholder="Masukan status"
          type="text"
          value={dataForm.status}
          onChange={handleChange}
        >
          <option>
            Pilih Status
          </option>
          <option value={"Sukses"} >
            Sukses
          </option>
          <option value={"Ditunda"}>
            Ditunda
          </option>
          <option value={"Gagal"}>
            Gagal
          </option>
        </Select>
      </div>
      <div className='grid grid-cols-2'>
        <Button type='submit'>Simpan</Button>
        <Link
          to={"/admin/tracking_proyek/" + params.id + "/form"}
          className="border bg-white   border-investa-primary-50 py-2.5 px-5 rounded text-investa-primary-50 hover:bg-investa-primary-50 hover:text-white transition-all text-center"
        >
          Kembali
        </Link>
      </div>
    </form>
  )
}

export default FormPengembalianDana
import React, { useEffect } from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import { Container } from '../../../component/atom/Container/Container'
import TitleForDetail from '../../../component/molecules/Admin/TitleForDetail'

export const DetailPersetujuan = () => {

  useEffect(() => {
    (async () => {
    })()
  }, [])

  return (
    <Layouts title="Detail Proyek" bg='bg-[#fffff]'>
      <Sidebar>
        <Container>
          <TitleForDetail label="Pertanian Cabe" />
        </Container>
        <div className='h-0.5 w-full bg-gray-300'></div>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
              <img className='rounded-3xl' src="https://placehold.co/600x400" alt="" />
              <div className='flex text-sm md:text-lg mt-6'>
                <p className='font-bold' >Lokasi :</p>
                <p className='ml-2'>Desa Kramat-Njarakan Kecamatan Nganjuk,Kabupaten Nganjuk.</p>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-2 mb-2'>
                <p>Rp. 50.000.000</p>
                <p className='text-right md:text-left'>0</p>
              </div>
              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}>45%</div>
              </div>
              <div className='grid grid-cols-3 my-2' >
                <div>
                  <p>Tenor</p>
                  <p className='font-bold'>6 Bulan</p>
                </div>
                <div>
                  <label className='block mb-2 text-sm text-gray-900 dark:text-white'>Imbal Hasil</label>
                  <select className='block p-1 px-2 mb-6 md:mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                    <option value="50%">5%</option>
                    <option value="50%">3%</option>
                    <option value="50%">1%</option>
                  </select>
                </div>
                <div>
                  <p>Harga per Unit</p>
                  <p className='font-bold'>Rp. 10.000</p>
                </div>
              </div>
              <p>1 Januari sampai 1 Juni 2023</p>
              <hr className='my-2' />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10'>
                <div>
                  <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                  <select id="small" class="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Sedang Diverifikasi">Sedang Diverifikasi</option>
                    <option value="Proyek Berjalan">Proyek Berjalan</option>
                    <option value="Proyek Ditolak">Proyek Ditolak</option>
                  </select>
                </div>
                <div>
                  <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resiko</label>
                  <select id="small" class="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Tiggi">Tinggi</option>
                    <option value="Sedang">Sedang</option>
                    <option value="Rendah">Rendah</option>
                  </select>
                </div>
              </div>
              <hr className='my-2' />
              <div className='grid grid-cols-3 my-2' >
                <div>
                  <p>Pengembalian</p>
                  <p className='font-bold'>6 Bulan</p>
                </div>
                <div>
                  <label className='block mb-2 text-sm text-gray-900 dark:text-white'>Jumlah Unit</label>
                  <select className='block p-1 px-2 mb-6 md:mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-investa-primary-500 focus:border-investa-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-investa-primary-500 dark:focus:border-investa-primary-500' >
                    <option value="120">120</option>
                    <option value="100">100</option>
                    <option value="50">50</option>
                  </select>
                </div>
                <div>
                  <p>Unit Tersedia</p>
                  <p className='font-bold'>Rp. 10.000</p>
                </div>
              </div>
              <hr className='my-2 mb-4' />
              <h5 className='font-bold'>Perhatian</h5>
              <p className='my-1'>Resiko kredit atau gagal bayar ditanggung sepenuhnya oleh pendana. Mohon mempelajari risiko pendanaan sebelum mendanai.</p>

              <h5 className='font-bold mt-10'>Rincian Proyek</h5>
              <textarea name="" id="" className='w-full my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Tulis Rincian Proyek ..." cols="30" rows="5"></textarea>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 mt-10'>
            <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Kembali</button>

            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Selanjutnya</button>
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  )
}

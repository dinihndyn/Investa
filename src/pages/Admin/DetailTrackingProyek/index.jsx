import React from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import { Container } from '../../../component/atom/Container/Container'
import TitleForDetail from '../../../component/molecules/Admin/TitleForDetail'
import { Link } from 'react-router-dom'

export const DetailTrackingProyek = () => {
  return (
    <Layouts title="Detail Tracking Proyek" >
      <Container>

        <div class="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='p-14 pb-10'>
            <TitleForDetail label="Pertanian Cabe" />
          </div>
          <div className='h-0.5 w-full bg-gray-300'></div>
          <div className='grid grid-cols-1 md:grid-cols-3 py-16 px-14'>
            <div className='md:px-4'>
              <img src="https://placehold.co/381x201" alt="" className='rounded-2xl w-full' />
              <div className='flex gap-2 py-4'>
                <p className='font-bold text-gray-900'>Lokasi:</p>
                <p>Desa Kramat-Njarakan Kecamatan Nganjuk,Kabupaten Nganjuk.</p>
              </div>
            </div>
            <div className='mr-10'>
              <div className='grid grid-cols-2 justify-items-start'>
                <p>Rp. 20.000.000</p>
                <p className='justify-self-center'>Rp. 0</p>
              </div>
              <div class="w-full my-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
              </div>
              <h5 className='font-bold'>Pendanaan yang terkumpul</h5>
              <div className='grid grid-cols-3 py-5 text-sm w-full'>
                <div>
                  <p>Tenor</p>
                  <p className='font-bold'>6 Bulan</p>
                </div>
                <div className='justify-self-center'>
                  <p>Imbalan Hasil</p>
                  <p className='font-bold'>5%</p>
                </div>
                <div className='justify-self-end'>
                  <p>Harga per Unit</p>
                  <p className='font-bold'>Rp. 10.000</p>
                </div>
              </div>
              <p>1 Januari sampai 1 Juni 2023</p>
              <hr />
              <div className='grid grid-cols-3 py-5 text-sm w-full'>
                <div>
                  <p>Status</p>
                  <p className='font-bold'>Sedang Diverifikasi</p>
                </div>
                <div className='justify-self-center'>
                  <p>Jumlah Unit</p>
                  <p className='font-bold'>20 Unit</p>
                </div>
                <div className='justify-self-end'>
                  <p>Unit Tersedia</p>
                  <p className='font-bold'>0 Unit</p>
                </div>
              </div>
              <hr className='my-2' />
              <p>Pengembalian</p>
              <strong>6 Bulan</strong>
              <hr className='my-2' />
              <h5 className='font-bold' >Perhatian</h5>
              <p>
                Resiko kredit atau gagal bayar ditanggung sepenuhnya oleh pendana. Mohon mempelajari risiko pendanaan sebelum mendanai.
              </p>
              <h5 className='mt-6 font-bold'>Rincian Proyek</h5>
              <p>Pertanian cabai di Nganjuk merupakan sektor penting dalam perekonomian daerah tersebut. Varietas jagung yang dibudidayakan meliputi varietas hibrida dan lokal. Petani menggunakan metode penanaman langsung dan melakukan pemeliharaan rutin seperti penyiangan gulma, pengendalian hama dan penyakit, serta pengairan yang cukup. Panen dilakukan setelah tanaman mencapai kematangan fisiologis. Tantangan yang dihadapi petani termasuk serangan hama dan penyakit, perubahan iklim, serta akses terbatas terhadap teknologi dan pembiayaan. Namun, dengan inovasi teknologi pertanian, pelatihan petani, dan dukungan pemerintah, pertanian jagung di Nganjuk memiliki potensi untuk terus berkembang</p>
            </div>
            <div>
              <Link to="form" className='focus:outline-none text-white bg-investa-primary-50 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 text-xl' >Form Transaksi</Link>
            </div>
          </div>
        </div>

      </Container>
    </Layouts>
  )
}

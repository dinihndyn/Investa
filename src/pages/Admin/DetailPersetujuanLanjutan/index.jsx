import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import { Container } from '../../../component/atom/Container/Container'
import { Button } from 'flowbite-react'
import { Link, useParams } from 'react-router-dom'
import { useAuthHeader, useSignOut } from 'react-auth-kit'
import { getDetailPengajuan } from '../DetailPersetujuan/data'
import { dateFormatInvesta, toRupiahInvesta } from '../../../utils/function'

const CardWrapper = ({ children, className = "bg-white" }) => {
  return (
    <div className={"max-w-full p-6  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " + className}>
      {children}
    </div>
  )
}

export const DetailPersetujuanLanjutan = () => {
  const [data, setData] = useState()
  const params = useParams()
  const token = useAuthHeader()
  const logout = useSignOut();
  useEffect(() => {
    (async () => {
      try {
        const data = await getDetailPengajuan(params.id, token());
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        if (error.response.status == 401) {
          logout()
        }
      }
    })()
  }, [])
  return (
    <div className="bg-[#ECEAEA]">
      <Sidebar withLogo>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6' >
            <CardWrapper>
              <div className='grid grid-cols-2'>
                <h5 className="mb-2  col-span-2  text-xl font-bold tracking-tight text-gray-900 dark:text-white">Info Petani</h5>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Nama Akun/Petani</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.user.name}</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Pengalaman Bertani</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.info_tani.pengalaman_tani || '-'}</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Status Kelompok Tani</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.info_tani.nama_kelompok || "Belum bergabung"}</p>
                <h5 className="mb-2 col-span-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Rencana Pinkaman</h5>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Nama Proyek Pinjaman</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.pengajuan_name}</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Estimasi Lama Proyek Berlangsung</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{dateFormatInvesta(data?.estimasi_pengembalian)}</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Foto Proyek Pinjaman</p>
                <div className="mb-3.5">
                  <img src="https://placehold.co/600x400" className='w-full' alt="" />
                </div>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Komoditas Tanam</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.komoditas}</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Barang Kebutuhan</p>
                <div className="mb-3.5">
                  {
                    data?.kebutuhan.map((item, index) => (
                      <div key={index} className='grid grid-cols-2'>
                        <p className="font-bold text-base text-gray-700 dark:text-gray-400">{item.nama}</p>
                        <p className="font-bold text-base text-gray-700 dark:text-gray-400">{item.jumlah}</p>
                      </div>
                    ))
                  }
                </div>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Jumlah Nominal Pinjaman</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{toRupiahInvesta(data?.total_pengajuan || 0)}</p>
              </div>
            </CardWrapper>
            <CardWrapper>
              <div className='grid grid-cols-2'>
                <h5 class="mb-2  col-span-2  text-xl font-bold tracking-tight text-gray-900 dark:text-white">Informasi Lahan</h5>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Status Kepemilikan Lahan</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.info_tani.status_lahan}</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Luas Lahan</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.info_tani.luas_lahan} Meter</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Alamat Lahan</p>
                <p className="mb-3.5 mt-2 font-bold text-base text-gray-700 dark:text-gray-400">{data?.info_tani.alamat} Kec.{data?.info_tani.kecamatan} Kota.{data?.info_tani.kota}</p>
                <h5 className="mb-2 col-span-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Rencana Pengembalian</h5>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Estimasi Tanggal Pembayaran</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{dateFormatInvesta(data?.estimasi_pengembalian)}</p>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Jangka Waktu Pinjam (Tenor)</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">{data?.tenor}</p>
                <CardWrapper className={"col-span-2 bg-[#FEE1A5] mb-3.5 grid grid-cols-2"} >
                  <p className="font-normal text-base text-gray-700 dark:text-gray-400">Imbalan hasil perbulan</p>
                  <p className="font-normal text-base text-gray-700 dark:text-gray-400">{data?.imbal_hasil || '-'}%</p>
                  <p className="font-normal text-base text-gray-700 dark:text-gray-400">Total Pengembalian</p>
                  <p className="font-normal text-base text-gray-700 dark:text-gray-400">{toRupiahInvesta(data?.total_pengembalian || 0)}</p>
                </CardWrapper>
                <p className="mb-3.5 font-normal text-base text-gray-700 dark:text-gray-400">Metode Pelunasan</p>
                <p className="mb-3.5 font-bold text-base text-gray-700 dark:text-gray-400">Via {data?.metode_pelunasan}</p>
              </div>
            </CardWrapper>
          </div>
          <Link to={"/admin/persetujuan/" + params.id}>
            <Button className='mt-10' outline color="warning">
              <p className='text-yellow-600 px-24 text-lg hover:text-white'>
                Kembali
              </p>
            </Button>
          </Link>
        </Container>
      </Sidebar >
    </div>
  )
}

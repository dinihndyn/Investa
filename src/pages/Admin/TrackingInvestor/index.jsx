import React, { useEffect, useState } from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import { Container } from '../../../component/atom/Container/Container'
import { API_URL } from '../../../utils/constant'
import RowTable from './RowTable'

export const TrackingInvestor = () => {
  const [listInvestor, setListInvestor] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2FkbWluL2FkbWlubG9naW4iLCJpYXQiOjE2ODY3NTg2ODQsImV4cCI6MTY4Njc2MjI4NCwibmJmIjoxNjg2NzU4Njg0LCJqdGkiOiI1aUFMR2tCSmx2RXRMN1ZtIiwic3ViIjoiMSIsInBydiI6ImRmODgzZGI5N2JkMDVlZjhmZjg1MDgyZDY4NmM0NWU4MzJlNTkzYTkifQ.wmzeESaLV42jcRn8gh-wr15CggB4JKf-23x4F7Bncyk");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        const resutlAPI = await fetch(API_URL + "/tracking/getInvestor", requestOptions);
        const resultData = await resutlAPI.json()
        console.log(resultData)
        if (!resultData.error) {
          setListInvestor(resultData)
        }
        console.log(listInvestor)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <Layouts title="Tracking Investor">
      <Sidebar>
        <Container>
          <h1 className='font-bold text-xl mb-3'>Permintaan Persetujuan Akun</h1>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-sm uppercase bg-white dark:bg-gray-900 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                  </th>
                  <th scope="col" class="px-6 py-3 text-uppercase">
                    Nama
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Proyek
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Dana Invest
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Taggal
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tenor
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  (listInvestor.length > 0) ? (
                    listInvestor.map((item, index) => {
                      <RowTable key={index} danaInvest="12.000.000" img="https://placehold.co/100" name="Dinda" proyek="Cabai" tanggal="23/06/2023" tenor="6" />
                    })
                  ) : (
                    <tr className='py-6'>
                      <td colSpan="6" className='text-center py-6 font-medium text-base' >Belum ada investor</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  )
}

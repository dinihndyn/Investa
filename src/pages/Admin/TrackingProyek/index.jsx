import React, { useEffect, useState } from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import { Container } from '../../../component/atom/Container/Container'
import { API_URL } from '../../../utils/constant'

export const TrackingProyek = () => {
  const [listProyek, setListProyek] = useState([])
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
        const resutlAPI = await fetch(API_URL + "/tracking/getProyek", requestOptions);
        const resultData = await resutlAPI.json()
        console.log(resultData)
        if (!resultData.error) {
          setListProyek(resultData)
        }
        console.log(listProyek)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <Layouts title="Tracking Investor">
      <Sidebar>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start relative">
            {
              (listProyek.length > 0) ? (listProyek.map((item, index) => {
                return <CardProyek
                  id={item.id}
                  key={index}
                  danaTerkumpul={item.dana_terkumpul}
                  status={item.status}
                  kebutuhanDana={item.total_pengajuan}
                  image={"https://placehold.co/600x400"}
                  title={item.pengajuan_name}
                  lokasi={item?.info_tani.kota}
                  imbalanHasil={item.imbalan_hasil}
                  resiko={item.resiko}
                />
              })) : (
                <div>
                  Belum Memiliki Pengajuan
                </div>
              )
            }
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  )
}

import React, { useState } from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import { Container } from '../../../component/atom/Container/Container'
import { CardProyek } from '../../../component/molecules/Admin/CardProyek'
import { useEffect } from 'react'
import { useAuthHeader } from 'react-auth-kit'
import { API_URL } from '../../../utils/constant'

export const Persetujuan = () => {
  const [listProyek, setListProyek] = useState([]);

  const token = useAuthHeader()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token())
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2FkbWluL2FkbWlubG9naW4iLCJpYXQiOjE2ODY3MzY0NDksImV4cCI6MTY4Njc0MDA0OSwibmJmIjoxNjg2NzM2NDQ5LCJqdGkiOiJPSWdONEcya0NRRXU2TTk4Iiwic3ViIjoiMSIsInBydiI6ImRmODgzZGI5N2JkMDVlZjhmZjg1MDgyZDY4NmM0NWU4MzJlNTkzYTkifQ.Xs0WRDwworgYP1E67Dl2oAKl4fwfSwnU0VrLClkANc0");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        const resultAPI = await fetch(API_URL + "/pengajuan/getPengajuanSeluruhnya", requestOptions)
        const resultData = await resultAPI.json()
        console.log(resultData)
        setListProyek(resultData);
      } catch (error) {
        cosole.log(error)
      }
    };
    fetchData();
  }, [])

  return (
    <Layouts title="Admin Dashboard">
      <Sidebar>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start relative">
            {
              listProyek.map((item, index) => {
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
              })
            }
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  )
}

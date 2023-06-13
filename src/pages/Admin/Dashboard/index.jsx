import React, { useEffect, useState } from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import { Container } from '../../../component/atom/Container/Container'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import Dashboard1 from './assets/dashboard-1.png';
import Dashboard2 from './assets/dashboard-2.png';
import { LineChartAdmin } from '../../../component/molecules/Admin/LineChartAdmin';
import { CardProyek } from '../../../component/molecules/Admin/CardProyek';
import axios from 'axios';

const CardDashboard = ({ label, value, image }) => {
  return (
    <div
      className="block flex items-center justify-start gap-5 max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      href="#"
    >
      <div>
        <img class="rounded-lg w-[60px]" src={image} alt={label} />
      </div>
      <div>
        <p className="font-normal text-xl text-gray-900 dark:text-gray-400">
          <p>
            {label}
          </p>
        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            {value}
          </p>
        </h5>
      </div>
    </div>
  )
}

const dataChart = [
  { name: 'Januari', investor: 40, proyek: 20 },
  { name: 'Februari', investor: 30, proyek: 60 },
  { name: 'Maret', investor: 40, proyek: 10 },
  { name: 'April', investor: 5, proyek: 40 }
];

export const AdminDashboard = () => {
  const [dataProyek, setDataProyek] = useState([]);
  const [dataDashboard, setDataDashboard] = useState({});
  useEffect(() => {
    const fetchDataCardProyek = async () => {
      try {
        const response = await fetch('http://localhost:3000/proyek');
        const jsonData = await response.json();
        setDataProyek(jsonData)
      } catch (error) {
        console.log('Error:', error);
      }
    };
    const fetchDataCardDashboard = async () => {
      try {
        const response = await fetch('http://localhost:3000/dashboard');
        const jsonData = await response.json();
        setDataDashboard(jsonData)
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchDataCardDashboard()
    fetchDataCardProyek()
  }, [])
  return (
    <Layouts title="Admin Dashboard" bg='bg-[#FEE1A5]'>
      <Sidebar>
        <Container>
          <div className='grid gap-4'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
              <CardDashboard label="Total Dana" value={dataDashboard.total_dana} image={Dashboard1} />
              <CardDashboard label="Jumlah Petani" value={dataDashboard.jumlah_petani} image={Dashboard2} />
              <CardDashboard label="Investor" value={dataDashboard.investor} image={Dashboard2} />
            </div>
            <div>
              <LineChartAdmin data={dataDashboard.dataChart} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-start'>
              {dataProyek.map((item, index) => (
                <CardProyek key={index} status={item.status} title={item.name} danaTerkumpul={item.dana_tekumpul} kebutuhanDana={item.kebutuhan_dana} image={item.image} />
              ))}
            </div>
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  )
}

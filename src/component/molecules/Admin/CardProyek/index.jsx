import React, { useState } from "react"

export const CardProyek = ({ title, danaTerkumpul, kebutuhanDana, image, status, key }) => {

  return (
    <div className="relative max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <a href="#">
        <img className="rounded-lg w-full" src={image} alt="" />
      </a>
      <div>
        <div className='p-3 group'>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <div className={`mb-2 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-2 grid-flow-row hidden group-hover:grid`}>
            <p>Expektasi Imbal Hasil</p>
            <p className='text-right'>5.50%</p>
            <p className=''>Lokasi</p>
            <p className='text-right'>Nganjuk</p>
            <p className=''>Resiko</p>
            <p className='text-right'>Sedang</p>
            <div className="w-full bg-gray-200 col-span-2 mt-2 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }} > 45%</div>
            </div>
          </div>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-2 grid-flow-row">
            <p>Dana Terkumpul</p>
            <p className='text-right'>{danaTerkumpul}</p>
            <p className='font-bold'>Kebutuhan Dana</p>
            <p className='text-right font-bold'>{kebutuhanDana}</p>
          </p>
        </div>
        <a href="#" className="button block w-full items-center justify-center px-3 py-2 text-sm font-bold text-center bg-gray-300 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          {status}
        </a>
      </div>
    </div>
  )
}
import React from 'react'

const RowTable = ({ img, name, proyek, danaInvest, tanggal, tenor }) => {
  return (
    <tr class="border-b text-sm bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" class="px-6 py-4 flex justify-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img src={img} alt="" />
      </th>
      <td class="px-6 py-4 font-bold">
        {name}
      </td>
      <td class="px-6 py-4">
        {proyek}
      </td>
      <td class="px-6 py-4">
        Rp. {danaInvest}
      </td>
      <td class="px-6 py-4">
        {tanggal}
      </td>
      <td class="px-6 py-4">
        {tenor} Bulan
      </td>
    </tr>
  )
}

export default RowTable
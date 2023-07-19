const RowTable = ({ img, name, proyek, danaInvest, tanggal, imbal }) => {
  return (
    <tr className="border-b text-sm bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 flex justify-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className=" w-10 h-10 object-cover rounded-full"
          src={img}
          alt=""
        />
      </th>
      <td className="px-6 py-4 font-bold">{name}</td>
      <td className="px-6 py-4">{proyek}</td>
      <td className="px-6 py-4">{danaInvest}</td>
      <td className="px-6 py-4">{tanggal}</td>
      <td className="px-6 py-4">{imbal}%</td>
    </tr>
  );
};

export default RowTable;

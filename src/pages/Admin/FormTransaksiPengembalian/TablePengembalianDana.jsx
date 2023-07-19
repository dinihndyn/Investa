import { Table } from 'flowbite-react';
import { dateFormatInvesta, toRupiahInvesta } from '../../../utils/function';

const TablePengembalianDana = ({ data }) => {
  function hitungTotalJumlahPembayaran(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].harga || 0;
    }
    return total;
  }

  const total = hitungTotalJumlahPembayaran(data);
  return (
    <div className="my-2">
      <Table>
        <Table.Head>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Tanggal
          </Table.HeadCell>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Nama Produk
          </Table.HeadCell>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Jumlah
          </Table.HeadCell>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Total Harga
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item, index) => {
            return (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {dateFormatInvesta(item.created_at)}
                </Table.Cell>
                <Table.Cell>{item.nama_produk}</Table.Cell>
                <Table.Cell>{item.jumlah} kg</Table.Cell>
                <Table.Cell>{toRupiahInvesta(item.harga)}</Table.Cell>
              </Table.Row>
            );
          })}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Total
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>{toRupiahInvesta(total)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TablePengembalianDana;

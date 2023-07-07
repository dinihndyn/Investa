import { Table } from 'flowbite-react';
import { dateFormatInvesta, toRupiahInvesta } from '../../../utils/function';

const TableInfoPinjaman = ({ data, totalHasil, imbal_hasil }) => {
  return (
    <div className="my-2">
      <Table>
        <Table.Head>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Tanggal
          </Table.HeadCell>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Jumlah
          </Table.HeadCell>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Nama Barang yang di Beli
          </Table.HeadCell>
          <Table.HeadCell className="bg-investa-primary-50 text-white">
            Harga
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.length == 0 ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell colSpan={4} className="text-center">
                Belum ada data
              </Table.Cell>
            </Table.Row>
          ) : null}
          {data.map((item, index) => {
            return (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {dateFormatInvesta(item.created_at)}
                </Table.Cell>
                <Table.Cell>{item.jumlah}</Table.Cell>
                <Table.Cell>{item.barang}</Table.Cell>
                <Table.Cell>{toRupiahInvesta(item.total)}</Table.Cell>
              </Table.Row>
            );
          })}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              TOTAL + Imbal Hasil : {imbal_hasil}%
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>{toRupiahInvesta(totalHasil)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableInfoPinjaman;

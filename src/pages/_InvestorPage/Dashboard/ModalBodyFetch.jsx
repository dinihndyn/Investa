// Import lainnya seperti yang telah Anda sebutkan sebelumnya
import { toRupiahInvesta } from '../../../utils/function';
import topup from './assets/credit-card.png';
import withdraw from './assets/no-credit-card.png';
import invest from './assets/transaction.png';
import revenue from './assets/transaction_revenue.png';


export const ModalBodyFetch = ({ data, setOpenModal }) => {
    const { historiWallet, historiInvest, historiRevenue } = data;
    if (!Array.isArray(historiWallet) || !Array.isArray(historiInvest) || !Array.isArray(historiRevenue)) {
        return <div>Belum terdapat transaksi yang dilakukan</div>;
    }
    const separateDateAndTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const date = dateTime.toLocaleDateString('id-ID');
        const time = dateTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        return { date, time };
    };

    return (
        <>
            {/* Tampilkan informasi histori wallet */}
            <div>
                <p className="text-center font-bold mb-2">
                    Transaksi
                </p>
                {historiWallet
                    .slice(0, 5)
                    .map((item) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="flex items-center">
                                {item.tipe === 'Deposit' ? (
                                    <img
                                        className="w-[30px] object-cover rounded-full h-[30px] mr-3"
                                        src={topup} // Gambar untuk tipe deposit
                                        alt="deposit"
                                    />
                                ) : item.tipe === 'Withdraw' ? (
                                    <img
                                        className="w-[30px] object-cover rounded-full h-[30px] mr-3"
                                        src={withdraw} // Gambar untuk tipe withdraw
                                        alt="withdraw"
                                    />
                                ) : null}
                                <div>
                                    <p className="font-semibold">{item.tipe}</p>
                                    {item.tipe === 'Deposit' ? (
                                        <p style={{ color: 'green' }}>+ {toRupiahInvesta(item.jumlah_deposit)}</p> // Jumlah deposit
                                    ) : item.tipe === 'Withdraw' ? (
                                        <p style={{ color: 'red' }}>- {toRupiahInvesta(item.jumlah_withdraw)}</p> // Jumlah withdraw
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex flex-col items-end justify-end">
                                <div className="text-right">Tanggal: {separateDateAndTime(item.created_at).date}</div>
                                <div className="text-right">Jam: {separateDateAndTime(item.created_at).time}</div>
                            </div>
                        </div>
                    ))}
            </div>
            <hr className="mb-5 mt-5" />
            {/* Tampilkan informasi histori invest */}
            <div>
                <p className="text-center font-bold mb-2">
                    Investasi
                </p>
                {historiInvest
                    .slice(0, 5)
                    .map((item) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="my-3 flex item-center">
                                <img
                                    className="w-[30px] object-cover rounded-full h-[30px] mr-3"
                                    src={invest} // Gambar untuk tipe withdraw
                                    alt="invest"
                                />
                                <div>
                                    <p className="font-semibold">Investasi - {item.pengajuan.pengajuan_name}</p>
                                    <p style={{ color: 'red' }}>- {toRupiahInvesta(item.amount)}</p>
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="text-right">Tanggal: {separateDateAndTime(item.created_at).date}</div>
                                <div className="text-right">Jam: {separateDateAndTime(item.created_at).time}</div>

                            </div>
                            {/* ... tampilkan informasi lainnya sesuai kebutuhan */}
                        </div>
                    ))}
            </div>
            <hr className="mb-5 mt-5" />
            <div>
                <p className="text-center font-bold mb-2">
                    Revenue
                </p>
                {historiRevenue
                    .slice(0, 5)
                    .map((item) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div className="my-3 flex item-center">
                                {item.tipe === 'Pengembalian' ? (
                                    <img
                                        className="w-[30px] object-cover rounded-full h-[30px] mr-3"
                                        src={revenue} // Gambar untuk tipe withdraw
                                        alt="revenue"
                                    />
                                ) : null}
                                <div>
                                    <p className="font-semibold">Revenue Investasi - {item.note}</p>
                                    <p style={{ color: 'green' }}>+ {toRupiahInvesta(item.jumlah_revenue)}</p>
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="text-right">Tanggal: {separateDateAndTime(item.created_at).date}</div>
                                <div className="text-right">Jam: {separateDateAndTime(item.created_at).time}</div>

                            </div>
                            {/* ... tampilkan informasi lainnya sesuai kebutuhan */}
                        </div>
                    ))}
            </div>

            <hr />
            {/* Tombol Batal */}
            <div className="w-full flex items-center justify-end">
                <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="bg-white border border-investa-primary-50 px-10 py-2 ms-5 font-bold text-investa-primary-50 rounded-lg mt-5"
                >
                    Kembali
                </button>
            </div>
        </>
    );
};

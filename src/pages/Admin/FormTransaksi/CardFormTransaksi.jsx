import { Link } from 'react-router-dom';

export const CardFormTransaksi = ({ img, href, label, status }) => {
  return (
    <div>
      {status == 'Menunggu Konfirmasi' ||
      (status == 'Proyek Berjalan' && label == 'Form Pembayaran') ? (
        <button
          disabled
          className="w-full cursor-not-allowed hover:scale-105 transition-all"
        >
          <div className="bg-white border border-investa-primary-50 rounded-lg p-5">
            <img src={img} alt="form-transaksi-icon" className="mx-auto" />
            <div className="bg-investa-primary-50 mt-5 w-[80%] text-center mx-auto  rounded-lg font-semibold text-white p-3">
              <button className="cursor-not-allowed">{label}</button>
            </div>
          </div>
        </button>
      ) : (
        <Link to={href} className="w-full ">
          <div className="bg-white border border-investa-primary-50 rounded-lg p-5 hover:scale-105 transition-all">
            <img src={img} alt="form-transaksi-icon" className="mx-auto" />
            <div className="bg-investa-primary-50 mt-5 w-[80%] text-center mx-auto  rounded-lg font-semibold text-white p-3">
              <Link to={href}>{label}</Link>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

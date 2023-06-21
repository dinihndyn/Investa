import React from 'react';
import { useNavigate } from 'react-router-dom';

function TitleForDetail({ label }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-end md:justify-between">
      <h1 className="text-3xl  font-medium">{label}</h1>
      <a
        href="#"
        onClick={() => navigate("/admin/tracking_proyek")}
        className="text-investa-primary-50 md:text-right md:pr-24 text-xl font-bold"
      >
        Klik untuk proyek lain
      </a>
    </div>
  );
}

export default TitleForDetail;

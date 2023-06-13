export const ListPengajuan = ({ number, title, description }) => {
  return (
    <div className="flex gap-3 mb-6">
      <div>
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-investa-primary-50 text-white">
          {number}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

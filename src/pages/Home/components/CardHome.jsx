export const CardHome = ({ image, header, description }) => {
  return (
    <div className="text-center shadow-lg rounded-lg p-5">
      <img className="mx-auto" src={image} alt={header} />
      <h1 className="text-2xl font-bold mb-3">{header}</h1>
      <p>{description}</p>
    </div>
  );
};

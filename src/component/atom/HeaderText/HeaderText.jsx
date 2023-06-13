export const HeaderText = ({ header, description }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl font-medium mb-3">{header}</h1>
      <h5 className="mb-3 font-thin">{description}</h5>
    </div>
  );
};

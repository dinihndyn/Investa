import checkCircle from '../assets/check_circle.svg';
export const ListCheck = ({ label }) => {
  return (
    <div className="grid  grid-cols-12 items-center  gap-3">
      <div>
        <img
          className="w-[30px] mx-auto"
          src={checkCircle}
          alt="circle-check-logo"
        />
      </div>
      <p className="col-span-10 ">{label}</p>
    </div>
  );
};

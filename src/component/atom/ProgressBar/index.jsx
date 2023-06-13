export const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`bg-investa-primary-50 text-xs font-medium ${
          percentage > 10 ? 'text-white' : 'text-black'
        } text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${percentage}%` }}
      >
        {' '}
        {percentage}%
      </div>
    </div>
  );
};

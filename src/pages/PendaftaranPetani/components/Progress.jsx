export const Progress = ({ num }) => {
  return (
    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
      <span className="flex items-center justify-center w-10 h-10 bg-white border border-investa-primary-50 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
        {num}
      </span>
    </li>
  );
};

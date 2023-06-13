export const End = ({ done, num }) => {
  return (
    <>
      {done ? (
        <li className="flex items-center ">
          <span className="flex items-center justify-center w-10 h-10 bg-investa-primary-50 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </li>
      ) : (
        <li className="flex items-center ">
          <span className="flex items-center justify-center w-10 h-10 bg-white border border-investa-primary-50 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            {num}
          </span>
        </li>
      )}
    </>
  );
};

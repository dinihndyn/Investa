export const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-full bg-transparent border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-1 text-xl p-3 font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          Tunggu sebentar...
        </div>
      </div>
    </div>
  );
};

export const Checkbox = ({ label, name, onChange, value, required }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <input
          id={name}
          type="checkbox"
          value={value}
          name={name}
          onChange={onChange}
          required={required ? true : false}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={name}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

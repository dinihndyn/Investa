export const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  errorMsg,
  withoutMargin,
  className,
}) => {
  return (
    <div className={withoutMargin ? '' : 'mb-6'}>
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        className={`bg-gray-50 border ${className} ${
          errorMsg ? 'border-red-600 border-2' : 'border-investa-primary-50'
        } text-gray-900 text-sm rounded-lg focus:ring-investa-primary-50 focus:border-investa-primary-50 block w-full p-2.5 `}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
      <span className="text-sm text-red-600 ">{errorMsg}</span>
    </div>
  );
};

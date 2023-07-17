function Input({
  type,
  label,
  placeholder,
  value,
  cb,
  leftIcon,
  rightIcon,
  options,
  show,
  required,
  defaultValue,
  disabled,
  name,
  id,
  max,
}) {
  return (
    show && (
      <div className="flex flex-col">
        {label && (
          <label className="text-sm mb-2 text-neutral-800 font-medium">
            {label}
            {required && <span className="text-red-600">*</span>}
          </label>
        )}
        {options ? (
          <div className="inline-flex gap-2 flex-wrap">
            {options?.map((option, index) => {
              return (
                <button
                  className={`p-2 ${
                    (option.value ?? option.label) === value
                      ? "primary-btn"
                      : "sidebar-link"
                  }`}
                  onClick={(e) => {
                    e?.preventDefault();
                    cb((prev) => option.value ?? option.label);
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        ) : (
          <div
            className={`p-2 px-1 ${leftIcon && "pl-2"} ${
              rightIcon && "pr-2"
            } border border-neutral-300 focus-within:border-neutral-400 bg-transparent w-full inline-flex rounded-[18px] font-poppins`}
          >
            {leftIcon}
            {type === "textarea" ? (
              <textarea
                onChange={(e) => {
                  e?.preventDefault();
                  if (cb) {
                    cb((prev) => e.target.value);
                  }
                }}
                max={max}
                name={name}
                id={id}
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholder}
                className="p-2 w-full bg-transparent focus-within:outline-none focus-within:border-none"
              />
            ) : (
              <input
                disabled={disabled}
                min={0}
                max={max}
                name={name}
                id={id}
                defaultValue={defaultValue}
                type={type}
                onChange={(e) => {
                  e?.preventDefault();
                  cb((prev) => type === 'file' ? {file: e.target.files[0], value: e.target.value} : e.target.value);
                }}
                value={value}
                placeholder={placeholder}
                className="p-2 w-full bg-transparent focus-within:outline-none focus-within:border-none disabled:text-neutral-500 file:bg-blue-600 file:border-none file:outline-none file:text-white file:font-bold file:rounded-md file:px-4 file:py-2 file:cursor-pointer file:shadow-lg file:hover:bg-blue-600 file:transition-colors file:duration-300 file:ease-in-out file:disabled:bg-blue-500"
              />
            )}
            {rightIcon}
          </div>
        )}
      </div>
    )
  );
}

export default Input;

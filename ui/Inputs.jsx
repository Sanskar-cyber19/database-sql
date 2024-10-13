export function Input({ type, value, name, onChange, required, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  );
}

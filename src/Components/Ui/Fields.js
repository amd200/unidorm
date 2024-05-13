import React from "react";

export function Input({
  name,
  placeholder,
  validations,
  customClass,
  type,
  value,
  onChange,
}) {
  return (
    <input
      name={name}
      validations={validations}
      type={type}
      value={value}
      placeholder={placeholder}
      className={`form-control  input-form mb-4 ${
        customClass ? customClass : ""
      }`}
      onChange={onChange}
    />
  );
}

export function TextArea({ customClass, placeholder,row }) {
  return (
    <textarea
      placeholder={placeholder}
      className={`form-control mb-4  ${customClass ? customClass : ""}`}
      rows={row ? row : 10}
    ></textarea>
  );
}

export function Select({ options, customClass }) {
  return (
    <select
      className={`form-select mb-4 input-form ${
        customClass ? customClass : ""
      }`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

import React from "react";

export function Input({ placeholder, customClass, type }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`form-control mb-4 input-form ${customClass ? customClass : ""}`}
    />
  );
}

export function TextArea({ title, customClass }) {
  return (
    <textarea
      placeholder={title}
      className={`form-control input-form ${customClass ? customClass : ""}`}
    ></textarea>
  );
}

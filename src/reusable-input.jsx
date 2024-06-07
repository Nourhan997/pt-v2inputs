// Input.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./reusable-input.css";

const Input = ({ type, className, errorMessage, ...props }) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    // Example validation: field is required
    if (props.required && !event.target.value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const inputClassName = `default-input ${className || ""} ${error ? "error-input" : ""
    }`;

  return (
    <div className="input-wrapper">
      <input
        type={type}
        className={inputClassName}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <p className="error-message">
          {errorMessage || "This field is required."}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  className: "",
  errorMessage: "",
  required: false,
  onBlur: null,
};

export default Input;

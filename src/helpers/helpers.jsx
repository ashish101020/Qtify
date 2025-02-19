import React from "react";

const truncate = ({ text, maxLength, className }) => {
  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return <p className={className}>{truncate(text, maxLength)}</p>;
};

export default truncate;

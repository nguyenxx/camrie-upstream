import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CustomButton.css'; 

const CustomButton = ({ variant, icon, text, className, style, ...props }) => {
  return (
    <Button
      variant={variant}
      className={`custom-purple-button ${className}`}
      style={style}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: "8px" }} />}
      {text}
    </Button>
  );
};

export default CustomButton;

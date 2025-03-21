import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CmrButton.css'; 

const CustomButton = ({ variant, icon, text, className, style, ...props }) => {
  return (
    <Button
      variant={variant}
      className={`${className}`}
      style={style}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: "12px" }} />}
      {text}
    </Button>
  );
};

export default CustomButton;

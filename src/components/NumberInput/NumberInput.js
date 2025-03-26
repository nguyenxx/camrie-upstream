import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";

const NumberInput = ({ 
    label = "", 
    min = 2, 
    max = 128, 
    step = 1, 
    defaultValue = 20 
}) => {
    const [value, setValue] = useState(defaultValue);

    // Update the state if the defaultValue prop changes
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        let newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            setValue(newValue);
        }
    };

    return (
        <Form.Group className="d-flex align-items-center mb-4">
            <Form.Label className="me-2">{label}</Form.Label>
            <InputGroup className="w-auto">
                <Form.Control
                    type="number"
                    value={value}
                    onChange={handleChange}
                    min={min}
                    max={max}
                    step={step}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                    className="text-center"
                />
            </InputGroup>
        </Form.Group>
    );
};

export default NumberInput;

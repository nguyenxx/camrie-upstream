import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const RadioButtonGroup = ({ groupLabel, values, name, onSelectionChange, defaultChecked = false }) => {
    // Initialize state based on defaultChecked prop
    const [selectedValue, setSelectedValue] = useState(defaultChecked ? values[0] : '');

    // Effect to call onSelectionChange when defaultChecked is enabled
    useEffect(() => {
        if (defaultChecked && onSelectionChange) {
            onSelectionChange(values[0]);
        }
    }, [defaultChecked, onSelectionChange, values]);

    // Handle selection change
    const handleSelectionChange = (value) => {
        setSelectedValue(value);
        if (onSelectionChange) {
            onSelectionChange(value);
        }
    };

    return (
        <div className="mb-3">
            <Form.Label style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{groupLabel}</Form.Label>
            <div>
                {values.map((value, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        id={value}
                        name={name}
                        label={value}
                        value={value}
                        checked={selectedValue === value}
                        onChange={() => handleSelectionChange(value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RadioButtonGroup;


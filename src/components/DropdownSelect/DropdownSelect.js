import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";

const DropdownSelect = ({ label, values, onChange, defaultSelected }) => {
    const [selectedValue, setSelectedValue] = useState(defaultSelected ? values[0] : ""); // Use the first option if defaultSelected is true

    useEffect(() => {
        if (defaultSelected && !selectedValue) {
            setSelectedValue(values[0]); // Ensure the first value is selected if defaultSelected is true
        }
    }, [defaultSelected, values, selectedValue]);

    const handleChange = (event, newValue) => {
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue); // Pass value to parent if needed
        }
    };

    return (
        <Autocomplete
            options={values}
            value={selectedValue}
            onChange={handleChange}
            sx={{ minWidth: 350 }} // Set min-width
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
};

export default DropdownSelect;

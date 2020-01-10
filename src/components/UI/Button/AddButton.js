import React from 'react';
import { Button } from '@material-ui/core';

const AddButton = ({ text }) => {
    return <Button variant="outlined" color="primary" size="small">{text}</Button>
}

export default AddButton;
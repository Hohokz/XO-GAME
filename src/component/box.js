import React from 'react';
import './box.css';

export const Box = ({ value, onClick }) => {
    const xoStyle = value === "X" ? "box x" : "box o";
    return (
        <button className={xoStyle} onClick={onClick}>{value}</button>
    )
}

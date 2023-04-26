import React from 'react';
import './borad.css';
import { Box } from './box.js'

export const Borad = ({ borad, onClick }) => {
    return (
        <div className='borad'>
            {borad.map((value, idx) => {
                return <Box value={value} onClick={() => value === null && onClick(idx)} />
            })}
        </div>

    )
}

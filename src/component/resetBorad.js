import React from 'react'
import './resetBorad.css'

export const ResetBorad = ({ resetBorad }) => {
    return (
        <button className='resetborad-btn' onClick={resetBorad}> Reset </button>
    )
}

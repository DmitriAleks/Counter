import React, {useState} from 'react';
import RangeNumber from './RangeNumber/RangeNumber';
import './Settings.css';

function Settings() {
    return (
        <div className="corpsSettings">
            <div className='tableSettings'><RangeNumber/></div>
            <div className='corpsTableSettings'><button>set</button></div>
        </div>
    )
}

export default Settings
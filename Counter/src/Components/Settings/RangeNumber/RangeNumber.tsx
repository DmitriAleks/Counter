import React, {useState} from 'react';
import s from './RangeNumber.module.css'

function RangeNumber() {
    return (


        <div className={s.global}>
            <span >Максим значен<input type="number"  /></span>
            <div >Миним значен<input type="number" /></div>

        </div>
    )
}

export default RangeNumber
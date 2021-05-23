import React, {ChangeEvent, useState} from 'react';
import s from './RangeNumber.module.css'

// type RangeNumberType= {
//     ChangeValue:(minNumber:number,maxNumber:number)=>void
// }

function RangeNumber() {

    let[maxValue,setMaxValue]=useState<string>(" ")
    let[minValue,setMinValue]=useState<string>(" ")
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
    }
// const setNewMaxMinValue =(minNumber:number,maxNumber:number)=>{
//         props.ChangeValue(minNumber,maxNumber)
// }

    return (


        <div className={s.global}>
            <span >Максим значен<input type="number" value={maxValue} onChange={onChangeMaxValue}/></span>
            <div >Миним значен<input type="number"  value={minValue} onChange={onChangeMinValue}/></div>

        </div>
    )
}

export default RangeNumber
import React, {ChangeEvent, useState} from 'react';
import s from './RangeNumber.module.css'

type RangeNumberType = {
    maxValue: number
    startValue:number
    error: boolean
    onChangeMinValue:(e: ChangeEvent<HTMLInputElement>)=> void
    onChangeMaxValue:(e: ChangeEvent<HTMLInputElement>)=> void
}

function RangeNumber(props: RangeNumberType) {
    const [er, setEr]= useState<boolean>(false)
    const checkError = () => {
        if(props.maxValue <= props.startValue){
            setEr(true)
        } else {
            setEr(false)
        }
    }
    return (
    (props.error) ? <div className={s.global}>
            <span>Максим значен<input type="number"  className={s.error} value={props.maxValue} onChange={props.onChangeMaxValue}/></span>
            <div>Миним значен<input type="number"  className={s.error} value={props.startValue} onChange={props.onChangeMinValue}/></div>
    </div>
        :<div className={s.global}>
            <span>Максим значен<input type="number"  value={props.maxValue} onChange={props.onChangeMaxValue}   /></span>
            <span>Миним значен<input type="number" value={props.startValue} onChange={props.onChangeMinValue}/></span>
        </div>
    )
}

export default RangeNumber
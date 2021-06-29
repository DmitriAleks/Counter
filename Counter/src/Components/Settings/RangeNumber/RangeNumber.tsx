import React, {ChangeEvent} from 'react';
import s from './RangeNumber.module.css'

type RangeNumberType = {
    ChangeValue: (minNumber: number, maxNumber: number) => void
    maxValue: number
    setValueSettings:any
    startValue:number
    setStartValue:any
    error: boolean
    onChangeMinValue:(e: ChangeEvent<HTMLInputElement>)=> void
    onChangeMaxValue:(e: ChangeEvent<HTMLInputElement>)=> void
}

function RangeNumber(props: RangeNumberType) {





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
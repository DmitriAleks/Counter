import React, {ChangeEvent, useState} from 'react';
import s from './RangeNumber.module.css'
import ButtonAll from "../../Counter/Buttons/ButtonAll";

type RangeNumberType = {
    ChangeValue: (minNumber: number, maxNumber: number) => void
    maxValue: number
    setValueSettings:any
    startValue:number
    setStartValue:any
}

function RangeNumber(props: RangeNumberType) {


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
        props.setValueSettings(Number(e.currentTarget.value))
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
        props.setStartValue(Number(e.currentTarget.value))
    }


    return (
        <div className={s.global}>
            <span>Максим значен<input type="number" value={props.maxValue} onChange={onChangeMaxValue}/></span>
            <div>Миним значен<input type="number" value={props.startValue} onChange={onChangeMinValue}/></div>
        </div>
    )
}

export default RangeNumber
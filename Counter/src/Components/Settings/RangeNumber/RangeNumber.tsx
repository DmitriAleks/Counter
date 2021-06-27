import React, {ChangeEvent, useState} from 'react';
import s from './RangeNumber.module.css'

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
    const setNewMaxMinValue = () => {//функция передаём значения на вверх
        props.ChangeValue(props.startValue, props.maxValue)
    }

    return (
        <div className={s.global}>
            <span>Максим значен<input type="number" value={props.maxValue} onChange={onChangeMaxValue}/></span>
            <div>Миним значен<input type="number" value={props.startValue} onChange={onChangeMinValue}/></div>
            <button onClick={setNewMaxMinValue}>click</button>

        </div>
    )
}

export default RangeNumber
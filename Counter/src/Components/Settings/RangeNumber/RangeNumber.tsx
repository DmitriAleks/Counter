import React, {ChangeEvent, useState} from 'react';
import s from './RangeNumber.module.css'

type RangeNumberType = {
    ChangeValue: (minNumber: string, maxNumber: string) => void
}

function RangeNumber(props: RangeNumberType) {

    let [maxValue, setMaxValue] = useState<string>(" ")//стейт для хранения значений
    let [minValue, setMinValue] = useState<string>(" ")//стейт для хранения значений
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
        setMaxValue(e.currentTarget.value)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
        setMinValue(e.currentTarget.value)
    }
    let getMaxValue: string = maxValue//на прямую не получилось, создали переменые что бы передать значения
    let getMinValue: string = minValue//в функции на верх
    const setNewMaxMinValue = () => {//функция передаём значения на вверх
        props.ChangeValue(getMinValue, getMaxValue)
    }

    return (
        <div className={s.global}>
            <span>Максим значен<input type="number" value={maxValue} onChange={onChangeMaxValue}/></span>
            <div>Миним значен<input type="number" value={minValue} onChange={onChangeMinValue}/></div>
            <button onClick={setNewMaxMinValue}>click</button>

        </div>
    )
}

export default RangeNumber
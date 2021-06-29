import React, {ChangeEvent} from 'react';
import RangeNumber from './RangeNumber/RangeNumber';
import './Settings.css';
import ButtonAll from "../Counter/Buttons/ButtonAll";
import s from '../../Components/Counter/Buttons/Button.module.css'

type SettingsType = {
    ChangeValue: (minNumber: number, maxNumber: number) => void
    maxValue: number
    setValueSettings: any
    startValue: number
    setStartValue: any
    error: boolean
}

function Settings(props: SettingsType) {
    const setNewMaxMinValue = () => {//функция передаём значения на вверх
        props.ChangeValue(props.startValue, props.maxValue)
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
        props.setStartValue(Number(e.currentTarget.value))
        alert('focus')
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
        props.setValueSettings(Number(e.currentTarget.value))
    }

    return (
        <div className="corpsSettings">
            <div className='tableSettings'>
                <RangeNumber
                    ChangeValue={props.ChangeValue}
                    maxValue={props.maxValue}
                    setValueSettings={props.setValueSettings}
                    startValue={props.startValue}
                    setStartValue={props.setStartValue}
                    error={props.error}
                    onChangeMinValue={onChangeMinValue}
                    onChangeMaxValue={onChangeMaxValue}
                />
            </div>
            <div className='corpsTableSettings'>
                <div className={s.button}>
                    <ButtonAll activity={setNewMaxMinValue} nameButton={"set"} error={false}/>
                </div>
            </div>
        </div>
    )
}

export default Settings
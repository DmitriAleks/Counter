import React, {ChangeEvent, useState} from 'react';
import RangeNumber from './RangeNumber/RangeNumber';
import './Settings.css';
import ButtonAll from "../Counter/Buttons/ButtonAll";
import s from '../../Components/Counter/Buttons/Button.module.css'

type SettingsType = {
    maxValue: number
    startValue: number
    error: boolean
    errorSetButton: boolean
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    setNewMaxMinValue: () => void
}

function Settings(props: SettingsType) {
    const [er, setEr]= useState<boolean>(false)
    const checkError = () => {
        if(props.maxValue <= props.startValue){
            setEr(true)
        } else {
            setEr(false)
        }
    }

    return (
        <div className="corpsSettings">
            <div className='tableSettings'>
                <RangeNumber
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    error={props.error}
                    onChangeMinValue={props.onChangeMinValue}
                    onChangeMaxValue={props.onChangeMaxValue}
                />
            </div>
            <div className='corpsTableSettings'>
                <div className={s.button}>
                    <ButtonAll activity={props.setNewMaxMinValue} nameButton={"set"} error={false}/>
                </div>
            </div>
        </div>
    )
}

export default Settings
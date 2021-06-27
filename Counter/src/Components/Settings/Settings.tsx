import React from 'react';
import RangeNumber from './RangeNumber/RangeNumber';
import './Settings.css';

type SettingsType = {
    ChangeValue: (minNumber: number, maxNumber: number) => void
    maxValue: number
    setValueSettings: any
    startValue: number
    setStartValue:any
}

function Settings(props: SettingsType) {

    return (
        <div className="corpsSettings">
            <div className='tableSettings'>
                <RangeNumber
                    ChangeValue={props.ChangeValue}
                                                        maxValue={props.maxValue}
                                                        setValueSettings={props.setValueSettings}
                                                        startValue={props.startValue}
                    setStartValue={props.setStartValue}/></div>

            <div className='corpsTableSettings'>
                <button>set</button>
            </div>
        </div>
    )
}

export default Settings
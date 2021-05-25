import React from 'react';
import RangeNumber from './RangeNumber/RangeNumber';
import './Settings.css';

type SettingsType = {
    ChangeValue: (minNumber: string, maxNumber: string) => void
}

function Settings(props: SettingsType) {

    return (
        <div className="corpsSettings">
            <div className='tableSettings'><RangeNumber ChangeValue={props.ChangeValue}/></div>
            <div className='corpsTableSettings'>
                <button>set</button>
            </div>
        </div>
    )
}

export default Settings
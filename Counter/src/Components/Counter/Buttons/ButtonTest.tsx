import React from 'react';
import s from './Button.module.css'
import ButtonAll from './ButtonAll';


type TypeButton = {
    addPlusNumber: () => void
    updateNumber: () => void
    statusInc: boolean
    error: boolean
}

function ButtonTest(props: TypeButton) {
    return (
        (props.statusInc) ?
            <div className={s.button}>
                <button disabled={props.statusInc}>INC</button>
                <ButtonAll activity={props.updateNumber} nameButton={"Reset"} error={props.error}/>
            </div>
            :
            <div className={s.button}>
                <ButtonAll activity={props.addPlusNumber} nameButton={"INC"} error={props.error}/>
                <ButtonAll activity={props.updateNumber} nameButton={"Reset"} error={props.error}/>
            </div>
    )
}

export default ButtonTest


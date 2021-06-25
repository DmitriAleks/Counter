import React, {useState} from 'react';
import s from './Button.module.css'
import ButtonInc from './ButtonInc/ButtonInc';
import ButtonReset from "./ButtonReset/ButtonReset";


type TypeButton = {
    addPlusNumber: () => void
    updateNumber: () => void
    statusInc: boolean
    error: boolean
}

function ButtonTest(props: TypeButton) {
    return (<div className={s.button}>
        <ButtonInc addPlusNumber={props.addPlusNumber} statusInc={props.statusInc} error={props.error}/>
        <ButtonReset updateNumber={props.updateNumber} error={props.error}/>

    </div>)
}

export default ButtonTest
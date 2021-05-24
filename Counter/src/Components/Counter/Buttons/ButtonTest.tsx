import React, {useState} from 'react';
import s from './Button.module.css'
import ButtonInc from './ButtonInc/ButtonInc';
import ButtonReset from "./ButtonReset/ButtonReset";


type TypeButton = {
    addPlusNumber: () => void
    updateNumber: () => void
    statusInc: boolean
}

function ButtonTest(props: TypeButton) {
    return (<div className={s.button}>
        <ButtonInc addPlusNumber={props.addPlusNumber} statusInc={props.statusInc}/>
        <ButtonReset updateNumber={props.updateNumber}/>

    </div>)
}

export default ButtonTest
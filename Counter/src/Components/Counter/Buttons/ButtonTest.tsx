import React, {useState} from 'react';
import s from './Button.module.css'
import ButtonAll from './ButtonAll';
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
        {/*<ButtonInc addPlusNumber={props.addPlusNumber} statusInc={props.statusInc} error={props.error}/>*/}
        {/*<ButtonReset updateNumber={props.updateNumber} error={props.error}/>*/}
        (props.statusInc) ?
        <ButtonAll  item={props.addPlusNumber} nameButton={"test"} error={props.error} />
        <ButtonAll item={props.updateNumber} nameButton={"test2"} error={props.error} />
    </div>)
}

export default ButtonTest
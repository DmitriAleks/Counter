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
    return (
        (props.statusInc) ?

            <div className={s.button}>
<button disabled={props.statusInc}>INC</button>
                <ButtonAll item={props.updateNumber} nameButton={"Reset"} error={props.error} />
            </div>
            :
            <div className={s.button}>
                <ButtonAll  item={props.addPlusNumber} nameButton={"INC"} error={props.error} />
                <ButtonAll item={props.updateNumber} nameButton={"Reset"} error={props.error} />
    </div>
    )
}

export default ButtonTest


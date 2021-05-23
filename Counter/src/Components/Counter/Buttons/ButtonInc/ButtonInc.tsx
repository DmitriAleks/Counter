import React , { useState }from 'react';
import s from '../ButtonDisabled.module.css'


type TypeButton = {
addPlusNumber:()=> void
    statusInc: boolean
}
function ButtonInc(props: TypeButton) {
    return(<div className={props.statusInc? s.disabled: ''}>
        <button
            disabled={props.statusInc} onClick={(e)=>props.addPlusNumber()}
        >inc</button>
</div>)
}
export default ButtonInc
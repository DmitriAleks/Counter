import React , { useState }from 'react';
import s from '../ButtonDisabled.module.css'


type TypeButton = {
    updateNumber:()=> void
    statusReset:boolean
}
function ButtonReset(props: TypeButton) {
    return(<div className={props.statusReset? s.disabled: ''} >
    <button
        disabled={props.statusReset} onClick={(e)=>props.updateNumber()}> reset</button>

</div>)
}
export default ButtonReset
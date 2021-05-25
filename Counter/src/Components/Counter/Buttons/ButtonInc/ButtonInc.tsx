import React , { useState }from 'react';
import s from '../ButtonDisabled.module.css'


type TypeButton = {
addPlusNumber:()=> void
    statusInc: boolean
    error:boolean
}

function ButtonInc(props: TypeButton) {
    const addPlusNumberCallback = () => {
        props.addPlusNumber()
    }
    const errorDisable = props.error
    return(
        (errorDisable) ? <button
                disabled={props.error}
                onClick={addPlusNumberCallback}
            >inc</button>
            :<button
                disabled={props.statusInc} 
                onClick={addPlusNumberCallback}
            >inc</button>
    )
}
export default ButtonInc

import React, {useState} from 'react';
import s from '../ButtonDisabled.module.css'


type TypeButton = {
    updateNumber: () => void
    error:boolean
}

function ButtonReset(props: TypeButton) {
    const updateNumberCallback = ()=>{props.updateNumber()
    }
    return (
        (props.error) ? <div ><button
                disabled={props.error}
                onClick={updateNumberCallback}> reset
            </button></div>
            :<button
                onClick={updateNumberCallback}> reset
            </button>
    )
}

export default ButtonReset


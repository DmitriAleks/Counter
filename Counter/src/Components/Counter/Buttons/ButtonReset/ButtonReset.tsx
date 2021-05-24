import React, {useState} from 'react';
import s from '../ButtonDisabled.module.css'


type TypeButton = {
    updateNumber: () => void
}

function ButtonReset(props: TypeButton) {
    return (<div>
        <button
            onClick={(e) => props.updateNumber()}> reset
        </button>

    </div>)
}

export default ButtonReset
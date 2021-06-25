import React, {useState} from 'react';


type TypeButton = {
    updateNumber: () => void
    error: boolean

}

function ButtonReset(props: TypeButton) {
    console.log('reset')
    const updateNumberCallback = () => {
        props.updateNumber()
    }
    return (
        (props.error) ? <div>
                <button
                    disabled={props.error}
                    onClick={updateNumberCallback}> reset
                </button>
            </div>
            : <button
                onClick={updateNumberCallback}> reset
            </button>
    )
}

export default ButtonReset


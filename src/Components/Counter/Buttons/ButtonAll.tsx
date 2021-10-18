import React from 'react';


type TypeButtonAll = {
    activity: () => void
    error: boolean
    nameButton: string
}

function ButtonAll(props: TypeButtonAll) {
    const addPlusNumberCallback = () => {
        props.activity()
    }
    return (
        (props.error) ? <button
                disabled={props.error}
                onClick={addPlusNumberCallback}
            >{props.nameButton}</button>
            : <button
                onClick={addPlusNumberCallback}
            >{props.nameButton}</button>
    )
}

export default ButtonAll

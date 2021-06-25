import React from 'react';


type TypeButton = {
addPlusNumber:()=> void
    statusInc: boolean
    error:boolean

}

function ButtonInc(props: TypeButton) {
    console.log('inc')
    const addPlusNumberCallback = () => {
        props.addPlusNumber()
    }
    return(
        (props.error) ? <button
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

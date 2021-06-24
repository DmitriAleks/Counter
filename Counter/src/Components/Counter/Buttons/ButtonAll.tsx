import React from 'react';


type TypeButtonAll = {
addPlusNumber:()=> void
    statusInc: boolean
    error:boolean
    nameButton: string
    updateNumber: () => void
}

function ButtonAll(props: TypeButtonAll) {

    return(
        <button
            disabled={props.statusInc}
            onClick={props.addPlusNumber}
        >{props.nameButton}</button>


    )
}
export default ButtonAll

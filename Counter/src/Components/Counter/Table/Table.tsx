import React from 'react';
import s from './Table.module.css'

type TypeTable = {
    numberTable: number
    valueSettings: number
    error: boolean
    errorMessage:string
}



function Table(props: TypeTable) {
    const errorMessage = props.error
        ? <div style={{color: 'red'}}>{props.errorMessage}</div>
        : null

    return (
        (errorMessage) ? <div>{errorMessage}</div> :
            <div className={props.numberTable === props.valueSettings ? s.table : ''}>{props.numberTable}
            </div>
    )

}

export default Table



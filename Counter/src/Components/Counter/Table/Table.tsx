import React from 'react';
import s from './Table.module.css'

type TypeTable = {
    numberTable: number
    valueSettings: number
    error: boolean
}

function Table(props: TypeTable) {
    const errorMessage = props.error
        ? <div style={{color: 'red'}}>Ошибка ввода</div>
        : null

    return (
        (errorMessage) ? <div>{errorMessage}</div> :
            <div className={props.numberTable === props.valueSettings ? s.table : ''}>{props.numberTable}
            </div>
    )

}

export default Table



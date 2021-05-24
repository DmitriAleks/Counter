import React, {useState} from 'react';
import s from './Table.module.css'

type TypeTable = {
    numberTable: number
    valueSettings: number
}

function Table(props: TypeTable) {
    let [error, setError] = useState<boolean>(true)
    const errorMessage = error
        ? <div style={{color: 'red'}}>Ошибка ввода</div>
        : null

    return (
        (props.numberTable === props.valueSettings) ? <div className={s.table}>{props.numberTable}</div> :
        <div>{props.numberTable}{errorMessage}
        </div>)

}

export default Table



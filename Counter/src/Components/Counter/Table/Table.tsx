import React, {useState} from 'react';
import s from './Table.module.css'
type TypeTable ={
    numberTable:number
}

 function Table(props: TypeTable) {
      return(
          (props.numberTable===5) ?  <div className={s.table}>{props.numberTable}</div>:<div >{props.numberTable}</div>
      )
}
export default  Table


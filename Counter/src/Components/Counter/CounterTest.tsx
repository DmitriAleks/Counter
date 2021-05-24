import React , { useState }from 'react';
import './Counter.css';
import Table from "./Table/Table";
import ButtonTest from "./Buttons/ButtonTest";

type CounterType ={
    startValue:number
    limitValue:number
    valueSettings:number
}

function CounterTest(props:CounterType) {
    let [numberTable, setNumberTable]=useState<number>(props.startValue)
    let [statusInc, setNewStatusInc]=useState<boolean>(false)
    let [statusReset, setNewStatusReset]=useState<boolean>(false)
function addPlusNumber() {
       numberTable++;
       if(numberTable>=props.limitValue){//сравниваем наше число с максимальным позволеным
           return numberTable = props.limitValue//если фолс то стопит на максимальном числе
       }
    setNumberTable(numberTable)//++1
    statusButtonInc(numberTable);//проверка на дизейбл, если число равно максим, кнопка дизейблится
    statusButtonReset(numberTable)//снимаем дизейбл, если раньше нажали reset
    console.log('Я добавляю')
}
function updateNumber() {
    setNumberTable(props.startValue)//сбрасывание стейта на минимальное значение
    statusButtonInc(props.startValue);//сбрасываем дизейбл с дабавлния
    statusButtonReset(props.startValue)//дизейблим кнопку
    console.log('Я удаляю')

}
function statusButtonInc(numberTable:number)  {
    if (numberTable === props.valueSettings ) {//проверка на дизейбл, если число равно максим, кнопка дизейблится

        return setNewStatusInc(true)
    } else  {
        return setNewStatusInc(false )
    }
}
    function statusButtonReset(numberTable:number)  {
        if (numberTable === props.startValue) {//дизейблим кнопку, если число минимально
            return setNewStatusReset(true)
        } else  {
            return setNewStatusReset(false )
        }
    }
    return (

        <div >
            <div className="corps">
                <div className='Table'>
                    <Table numberTable={numberTable}/>

                </div>
                <div className='corpsTable'>
                    <div className='button'>
                        <ButtonTest
                            addPlusNumber={addPlusNumber}
                            updateNumber={updateNumber}
                            statusInc={statusInc}
                      />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterTest;

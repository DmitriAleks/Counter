import React , { useState }from 'react';
import './Counter.css';
import Table from "./Table/Table";
import ButtonTest from "./Buttons/ButtonTest";


function App() {
    let [numberTable, setNumberTable]=useState<number>(0)
    let [statusInc, setNewStatusInc]=useState<boolean>(false)
    let [statusReset, setNewStatusReset]=useState<boolean>(false)
function addPlusNumber() {
       numberTable++;
       if(numberTable>=6){
           return numberTable = 5
       }
    setNumberTable(numberTable)
    statusButtonInc(numberTable);
    statusButtonReset(numberTable)
    console.log('Я добавляю')
}
function updateNumber() {
    setNumberTable(0)
    statusButtonInc(0);
    statusButtonReset(0)
    console.log('Я удаляю')

}
function statusButtonInc(numberTable:number)  {
    if (numberTable === 5) {
        return setNewStatusInc(true)
    } else  {
        return setNewStatusInc(false )
    }
}
    function statusButtonReset(numberTable:number)  {
        if (numberTable === 0) {
            return setNewStatusReset(true)
        } else  {
            return setNewStatusReset(false )
        }
    }


    return (

        <div className="App">
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
                            statusReset={statusReset}
                      />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import CounterTest from './Components/Counter/CounterTest';
import Settings from "./Components/Settings/Settings";


function App() {
    let [valueSettings, setValueSettings] = useState<number>(11)//стартовые значения, обновляются с помощию функции
    let [startValue, setStartValue] = useState<number>(4)//стартовые значения, обновляются с помощию функции
    const ChangeValue = (minNumber: string, maxNumber: string) => {//функция обновляющая, стартовые значения
        let getMaxValue = Number(maxNumber)//снизу идёт строка
        let getMinValue = Number(minNumber)//преобразуем в число
        setValueSettings(getMaxValue)//переписываем максим стартовое число
        setNumberTable(getMinValue)//переписываем минимальное стартовое число
        setStartValue(getMinValue)//переписываем минимальное число которое отображается в счетчике
    }
    ///..........................................................................
    let [numberTable, setNumberTable] = useState<number>(startValue)// стейт в котором храним отбражающее число в счетчике
    let [statusInc, setNewStatusInc] = useState<boolean>(false)//стейт в котором храним статус кнопки
    function addPlusNumber() {//функция по увеличения числа в счетчике
        numberTable++;
        setNumberTable(numberTable)//++1
        statusButtonInc(numberTable);//проверка на дизейбл, если число равно максим, кнопка дизейблится
        console.log(numberTable)
    }

    function updateNumber() {//функция по сбрасыванию числа
        setNumberTable(startValue)//сбрасывание стейта на минимальное значение
        statusButtonInc(startValue);//сбрасываем дизейбл с добавлния
        console.log('Я удаляю')
    }

    function statusButtonInc(numberTable: number) {//фукнция по изменению статуса кнопки (Дизейбл)
        if (numberTable === valueSettings) {//проверка на дизейбл, если число равно максим, кнопка дизейблится
            return setNewStatusInc(true)
        } else {
            return setNewStatusInc(false)
        }
    }

    return (
        <div className="App">
            <Settings ChangeValue={ChangeValue}/>
            <CounterTest
                valueSettings={valueSettings}
                numberTable={numberTable}//наше прибавленое число, которое мы видим
                addPlusNumber={addPlusNumber}//кнопк добавления
                updateNumber={updateNumber}//кнопка удаления
                statusInc={statusInc}//статус кнпоки
            />
        </div>
    );
}

export default App;

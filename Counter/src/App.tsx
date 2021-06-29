import React, {useEffect, useState} from 'react';
import './App.css';
import CounterTest from './Components/Counter/CounterTest';
import Settings from "./Components/Settings/Settings";


function App() {
    let [valueSettings, setValueSettings] = useState<number>(11)//стартовые значения, обновляются с помощию функции
    let [startValue, setStartValue] = useState<number>(1)//стартовые значения, обновляются с помощию функции
    let [errorMessage, setErrorMessage] = useState<string>('')//текс ошибки либо предупреждения закончит ввод данных
    console.log(startValue)
    ///...........................................LocalStorage......................//
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValueMin')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValueMin', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValueMax')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValueSettings(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValueMax', JSON.stringify(valueSettings))
    }, [valueSettings])
    ///...........................................LocalStorage......................//
    const ChangeValue = (minNumber: number, maxNumber: number) => {//функция обновляющая, стартовые значения
        setValueSettings(maxNumber)//переписываем максим стартовое число
        setNumberTable(minNumber)//переписываем минимальное стартовое число
        setStartValue(minNumber)//переписываем минимальное число которое отображается в счетчике
        controlError(maxNumber, minNumber)//вызываем функцию проверки ошибки
    }
    ///..........................................................................
    console.log(startValue)

    let [numberTable, setNumberTable] = useState<number>(startValue)// стейт в котором храним отбражающее число в счетчике
    let [statusInc, setNewStatusInc] = useState<boolean>(false)//стейт в котором храним статус кнопки
    let [error, setError] = useState<boolean>(false)//булевый стейт, контролируем ошибки
    const controlError = (maxValue: number, minValue: number) => {//функция контроля ошибки
        if (maxValue <= minValue || minValue <= 0) {//если максимальное число меньше минимального возвращает в стейт с ерорам тру
            setError(true)
            setErrorMessage("Ошибка ввода")
        } else {
            setError(false)
        }
    }
    // useEffect(() => { // бесполезеая херня)) следит за тем(может пригодится)
    //     setNumberTable(startValue)
    // }, [startValue])


    function addPlusNumber() {//функция по увеличения числа в счетчике
        numberTable++;
        setNumberTable(numberTable) //++1
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
            <Settings ChangeValue={ChangeValue}
                      maxValue={valueSettings}//максим значение в ипуты
                      setValueSettings={setValueSettings}//функция хука по смене макс значения
                      startValue={startValue}//миним значение в ипуты
                      setStartValue={setStartValue}//функция хука по смене мин значения
                      error={error}
            />

            <CounterTest
                valueSettings={valueSettings}
                numberTable={numberTable}//наше прибавленое число, которое мы видим
                addPlusNumber={addPlusNumber}//кнопк добавления
                updateNumber={updateNumber}//кнопка удаления
               statusInc={statusInc}//статус кнпоки
                error={error}// статус ошибки
                errorMessage={errorMessage}

            />
        </div>
    );
}

export default App;

import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import CounterTest from './Components/Counter/CounterTest';
import Settings from "./Components/Settings/Settings";
import {addPlusNumberAC, changeValueAC, onChangeMaxValueAC} from './store/counter-reducer';
import {AppRootStateType} from "./store/store";


function AppWithReducer() {

const valueSettings= useSelector<AppRootStateType,number> (
    state=> state.counter.valueSettings
)
    // let [valueSettings, setValueSettings] = useState<number>(11)//стартовые значения, обновляются с помощию функции

    let [startValue, setStartValue] = useState<number>(1)//стартовые значения, обновляются с помощию функции
    let [errorMessage, setErrorMessage] = useState<string>('')//текс ошибки либо предупреждения закончит ввод данных
    let [numberTable, setNumberTable] = useState<number>(startValue)// стейт в котором храним отбражающее число в счетчике
    let [statusInc, setNewStatusInc] = useState<boolean>(false)//стейт в котором храним статус кнопки
    let [error, setError] = useState<boolean>(false)//булевый стейт, контролируем ошибки
    let [errorSetButton, setErrorSetButton] = useState<boolean>(false)//булевый стейт, контролируем set button
    const dispatch = useDispatch()
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
    // useEffect(() => {// отключено с переходом на редакс
    //     let valueAsString = localStorage.getItem('counterValueMax')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValueSettings(newValue)
    //     }
    // }, [])

    useEffect(() => {
        localStorage.setItem('counterValueMax', JSON.stringify(valueSettings))
    }, [valueSettings])
    const ChangeValue = (minNumber: number, maxNumber: number) => {//функция обновляющая, стартовые значения
        dispatch(changeValueAC(minNumber,maxNumber))
    }
    // useEffect(() => { // следит за изменением числа в импутах и выводит надлежащее сообщение
    //     controlError(valueSettings,startValue)
    // }, [startValue,valueSettings])
    //////                                    Функции Settings                      ///////
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeMaxValueAC(Number(e)))
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
       setStartValue(Number(e.currentTarget.value))
        setError(true)
        setErrorMessage('Введите значение')
       // controlError(valueSettings,startValue)
    }
    const setNewMaxMinValue = () => {//функция передаём значения на вверх
        ChangeValue(startValue, valueSettings)

    }
    //////                        Функции Settings                             ///////
    // const controlError = (maxValue: number, minValue: number) => {//функция контроля ошибки//не актуальна
    //     if (maxValue <= minValue || minValue < 0) {//если максимальное число меньше минимального возвращает в стейт с ерорам тру
    //         setError(true)
    //         setErrorMessage("Ошибка ввода")
    //     } else {
    //         setError(false)
    //     }
    // }

    useEffect(() => { // следит за сохранием числа в табле, после обновления
        setNumberTable(startValue)
    }, [startValue])

    // useEffect(() => { // тест
    //     controlError( valueSettings, startValue)
    // }, [startValue,valueSettings])

    function addPlusNumber() {//функция по увеличения числа в счетчике
        console.log('click')
       dispatch(addPlusNumberAC())

    }

    function updateNumber() {//функция по сбрасыванию числа
        setNumberTable(startValue)//сбрасывание стейта на минимальное значение
        statusButtonInc(startValue);//сбрасываем дизейбл с добавлния
    }

    function statusButtonInc(numberTable: number) {//фукнция по изменению статуса кнопки (Дизейбл)
        if (numberTable >= valueSettings) {//проверка на дизейбл, если число равно максим, кнопка дизейблится
            return setNewStatusInc(true)
        } else {
            return setNewStatusInc(false)
        }
    }

    return (
        <div className="App">
            <Settings
                      maxValue={valueSettings}//максим значение в ипуты
                      startValue={startValue}//миним значение в ипуты
                      setStartValue={setStartValue}//функция хука по смене мин значения
                      error={error}
                      errorSetButton={errorSetButton}
                      onChangeMaxValue={onChangeMaxValue}
                      onChangeMinValue={onChangeMinValue}
                      setNewMaxMinValue={setNewMaxMinValue}
                      setErrorSetButton={setErrorSetButton}
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

export default AppWithReducer;

import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import CounterTest from './Components/Counter/CounterTest';
import Settings from "./Components/Settings/Settings";
import {
    addPlusNumberAC,
    changeValueAC,
    onChangeMaxValueAC,
    onChangeMinValueAC,
    updateNumberAC
} from './store/counter-reducer';
import {AppRootStateType} from "./store/store";


function AppWithRedux() {

    const startMaxValue = useSelector<AppRootStateType, number>(//стартовые значения, обновляются с помощию функции
        state => state.counter.startMaxValue)
    const startMinValue = useSelector<AppRootStateType, number>(//стартовые значения, обновляются с помощию функции
        state => state.counter.startMinValue)
    const errorMessage = useSelector<AppRootStateType, string>(//текс ошибки либо предупреждения закончит ввод данных
        state => state.counter.errorMessage)
    const currentNumber = useSelector<AppRootStateType, number>(// стейт в котором храним отбражающее число в счетчике
        state => state.counter.currentNumber)
    const statusInc = useSelector<AppRootStateType, boolean>(//стейт в котором храним статус кнопки
        state => state.counter.statusInc)
    const error = useSelector<AppRootStateType, boolean>(//булевый стейт, контролируем ошибки
        state => state.counter.error)
    const errorSetButton = useSelector<AppRootStateType, boolean>(//булевый стейт, контролируем set button
        state => state.counter.errorSetButton)
    const dispatch = useDispatch()
    ///...........................................LocalStorage......................//
    // useEffect(() => {//отключен с переходм на редакс
    //     let valueAsString = localStorage.getItem('counterValueMin')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setStartValue(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('counterValueMin', JSON.stringify(startMinValue))
    // }, [startMinValue])
    // useEffect(() => {// отключено с переходом на редакс
    //     let valueAsString = localStorage.getItem('counterValueMax')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValueSettings(newValue)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('counterValueMax', JSON.stringify(startMaxValue))
    // }, [startMaxValue])
    const ChangeValue = (minNumber: number, maxNumber: number) => {//функция обновляющая, стартовые значения
        dispatch(changeValueAC(minNumber, maxNumber))
    }
    // useEffect(() => { // следит за изменением числа в импутах и выводит надлежащее сообщение
    //     controlError(valueSettings,startValue)
    // }, [startValue,valueSettings])
    //////                                    Функции Settings                      ///////
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxValueAC(Number(e.currentTarget.value)))
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {//функции для изменения значений
        dispatch(onChangeMinValueAC(Number(e.currentTarget.value)))
    }
    const setNewMaxMinValue = () => {//функция передаём значения на вверх
        ChangeValue(startMinValue, startMaxValue)

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

    // useEffect(() => { // следит за сохранием числа в табле, после обновления // отключен с переходм на редакс
    //     setNumberTable(startValue)
    // }, [startValue])

    // useEffect(() => { // тест
    //     controlError( valueSettings, startValue)
    // }, [startValue,valueSettings])

    function addPlusNumber() {//функция по увеличения числа в счетчике
        console.log(startMaxValue)
        dispatch(addPlusNumberAC())

    }

    function updateNumber() {//функция по сбрасыванию числа
        dispatch(updateNumberAC())
    }

    // function statusButtonInc(numberTable: number) {//фукнция по изменению статуса кнопки (Дизейбл)
    //     if (numberTable >= valueSettings) {//проверка на дизейбл, если число равно максим, кнопка дизейблится
    //         return setNewStatusInc(true)
    //     } else {
    //         return setNewStatusInc(false)
    //     }
    // }

    return (
        <div className="App">
            <Settings
                maxValue={startMaxValue}//максим значение в ипуты
                startValue={startMinValue}//миним значение в ипуты
                error={error}
                errorSetButton={errorSetButton}
                onChangeMaxValue={onChangeMaxValue}
                onChangeMinValue={onChangeMinValue}
                setNewMaxMinValue={setNewMaxMinValue}
            />

            <CounterTest
                valueSettings={startMaxValue}
                numberTable={currentNumber}//наше прибавленое число, которое мы видим
                addPlusNumber={addPlusNumber}//кнопк добавления
                updateNumber={updateNumber}//кнопка удаления
                statusInc={statusInc}//статус кнпоки
                error={error}// статус ошибки
                errorMessage={errorMessage}

            />
        </div>
    );
}

export default AppWithRedux;

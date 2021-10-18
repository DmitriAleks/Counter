import React, {ChangeEvent} from 'react';
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

    const ChangeValue = (minNumber: number, maxNumber: number) => {//функция обновляющая, стартовые значения
        dispatch(changeValueAC(minNumber, maxNumber))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxValueAC(Number(e.currentTarget.value)))
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMinValueAC(Number(e.currentTarget.value)))
    }
    const setNewMaxMinValue = () => {
        ChangeValue(startMinValue, startMaxValue)
    }

    function addPlusNumber() {
        dispatch(addPlusNumberAC())
    }

    function updateNumber() {
        dispatch(updateNumberAC())
    }

    return (
        <div className="App">
            <Settings
                maxValue={startMaxValue}
                startValue={startMinValue}
                error={error}
                errorSetButton={errorSetButton}
                onChangeMaxValue={onChangeMaxValue}
                onChangeMinValue={onChangeMinValue}
                setNewMaxMinValue={setNewMaxMinValue}
            />

            <CounterTest
                valueSettings={startMaxValue}
                numberTable={currentNumber}
                addPlusNumber={addPlusNumber}
                updateNumber={updateNumber}
                statusInc={statusInc}
                error={error}
                errorMessage={errorMessage}
            />
        </div>
    );
}

export default AppWithRedux;

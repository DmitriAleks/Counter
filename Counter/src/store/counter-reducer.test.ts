import {
    addPlusNumberAC,
    changeValueAC,
    counterReducer,
    initialStateType,
    onChangeMaxValueAC,
    updateNumberAC
} from './counter-reducer';
import {ChangeEvent} from "react";

let startState: initialStateType

beforeEach(()=>{
    startState = {
        startMinValue:0,
        startMaxValue:1,
        currentNumber: 4,
        errorMessage: '',
        statusInc: false,
        error:false,
        errorSetButton: false,
    };
})
test('correct add new number', () => {

    const action = addPlusNumberAC();
    const endState = counterReducer(startState, action)

    expect(endState.currentNumber).toEqual(5);
    expect(endState.statusInc).toEqual(true);
});

test('correct update number', () => {

    const action = updateNumberAC();
    const endState = counterReducer(startState, action)

    expect(endState.currentNumber).toEqual(0);
    expect(endState.statusInc).toEqual(false);
});
test('correct change value', () => {

    const action = changeValueAC(4, 9);
    const endState = counterReducer(startState, action)

    expect(endState.currentNumber).toEqual(4);
    expect(endState.startMinValue).toEqual(4);
    expect(endState.startMaxValue).toEqual(9);
    expect(endState.error).toEqual(false);
    expect(endState.errorMessage).toEqual("Ошибка ввода");
    expect(endState.statusInc).toEqual(false);
});
test('no correct change value', () => {

    const action = changeValueAC(11, 9);
    const endState = counterReducer(startState, action)

    expect(endState.currentNumber).toEqual(11);
    expect(endState.startMinValue).toEqual(11);
    expect(endState.startMaxValue).toEqual(9);
    expect(endState.error).toEqual(true);
    expect(endState.errorMessage).toEqual("Ошибка ввода");
    expect(endState.statusInc).toEqual(false);
});
test(' correct change max value', () => {

    const action = onChangeMaxValueAC('5' as any);
    const endState = counterReducer(startState, action)

    expect(endState.currentNumber).toEqual(4);
    expect(endState.startMinValue).toEqual(0);
    expect(endState.startMaxValue).toEqual(5);
    expect(endState.error).toEqual(true);
    expect(endState.errorMessage).toEqual('Введите значение');
});
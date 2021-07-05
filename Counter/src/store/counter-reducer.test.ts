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
        startValue:0,
        valueSettings:1,
        numberTable: 4,
        errorMessage: '',
        statusInc: false,
        error:false,
        errorSetButton: false,
    };
})
test('correct add new number', () => {

    const action = addPlusNumberAC();
    const endState = counterReducer(startState, action)

    expect(endState.numberTable).toEqual(5);
    expect(endState.statusInc).toEqual(true);
});

test('correct update number', () => {

    const action = updateNumberAC();
    const endState = counterReducer(startState, action)

    expect(endState.numberTable).toEqual(0);
    expect(endState.statusInc).toEqual(false);
});
test('correct change value', () => {

    const action = changeValueAC(4, 9);
    const endState = counterReducer(startState, action)

    expect(endState.numberTable).toEqual(4);
    expect(endState.startValue).toEqual(4);
    expect(endState.valueSettings).toEqual(9);
    expect(endState.error).toEqual(false);
    expect(endState.errorMessage).toEqual("Ошибка ввода");
    expect(endState.statusInc).toEqual(false);
});
test('no correct change value', () => {

    const action = changeValueAC(11, 9);
    const endState = counterReducer(startState, action)

    expect(endState.numberTable).toEqual(11);
    expect(endState.startValue).toEqual(11);
    expect(endState.valueSettings).toEqual(9);
    expect(endState.error).toEqual(true);
    expect(endState.errorMessage).toEqual("Ошибка ввода");
    expect(endState.statusInc).toEqual(false);
});
test(' correct change max value', () => {

    const action = onChangeMaxValueAC('5' as any);
    const endState = counterReducer(startState, action)

    expect(endState.numberTable).toEqual(4);
    expect(endState.startValue).toEqual(0);
    expect(endState.valueSettings).toEqual(5);
    expect(endState.error).toEqual(true);
    expect(endState.errorMessage).toEqual('Введите значение');
});
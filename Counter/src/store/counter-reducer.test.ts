
import {addPlusNumberAC, counterReducer, initialStateType, updateNumberAC} from './counter-reducer';

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
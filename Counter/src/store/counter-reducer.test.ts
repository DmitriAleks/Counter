
import {addPlusNumberAC, counterReducer, initialStateType} from './counter-reducer';

let startState: initialStateType

beforeEach(()=>{
    startState = {
        startValue:0,
        valueSettings:1,
        numberTable: 0,
        errorMessage: '',
        statusInc: false,
        error:false,
        errorSetButton: false,
    };
})
test('correct task should be deleted from correct array', () => {


    const action = addPlusNumberAC();

    const endState = counterReducer(startState, action)

    expect(endState.numberTable).toEqual(1);
});
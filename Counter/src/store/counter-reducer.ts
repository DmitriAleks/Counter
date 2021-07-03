const ADD_PLUS_NUMBER = 'ADD-PLUS-NUMBER'
const UPDATE_NUMBER = 'UPDATE-NUMBER'
type ActionUnionType = RemoveTaskAT|UpdateNumberAT

type RemoveTaskAT = {
    type: 'ADD-PLUS-NUMBER',
}
type UpdateNumberAT = {
        type: 'UPDATE-NUMBER',
}

export type initialStateType ={
    startValue:number,
    valueSettings:number,
    numberTable: number,
    errorMessage: string,
    statusInc: boolean,
    error: boolean,
    errorSetButton: boolean,

}

export let initialState:initialStateType = {
    startValue:0,
    valueSettings:1,
    numberTable: 0,
    errorMessage: '',
    statusInc: false,
    error:false,
    errorSetButton: false,
}


export const counterReducer = (state = initialState, action: ActionUnionType):initialStateType => {
    switch (action.type) {
        case ADD_PLUS_NUMBER:
            return {
                ...state,
                numberTable: state.numberTable+1,
            }
        case UPDATE_NUMBER:
            return {
                ...state,
                numberTable: state.numberTable = state.startValue,
            }
        default:
            return state
    }
}
export const addPlusNumberAC = ():RemoveTaskAT => {
    return {type: 'ADD-PLUS-NUMBER'}
}
export const updateNumberAC = ():UpdateNumberAT => {
    return {type: 'UPDATE-NUMBER'}
}
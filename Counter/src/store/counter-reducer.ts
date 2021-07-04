const ADD_PLUS_NUMBER = 'ADD-PLUS-NUMBER'
const UPDATE_NUMBER = 'UPDATE-NUMBER'
const CHANGE_VALUE = 'CHANGE-VALUE'

type ActionUnionType = RemoveTaskAT | UpdateNumberAT | ChangeValueAT

type RemoveTaskAT = {
    type: 'ADD-PLUS-NUMBER',
}
type UpdateNumberAT = {
    type: 'UPDATE-NUMBER',
}
type ChangeValueAT = {
    type: 'CHANGE-VALUE',
    minNumber: number,
    maxNumber: number,
}

export type initialStateType = {
    startValue: number,
    valueSettings: number,
    numberTable: number,
    errorMessage: string,
    statusInc: boolean,
    error: boolean,
    errorSetButton: boolean,

}

export let initialState: initialStateType = {
    startValue: 0,
    valueSettings: 1,
    numberTable: 0,
    errorMessage: '',
    statusInc: false,
    error: false,
    errorSetButton: false,
}


export const counterReducer = (state = initialState, action: ActionUnionType): initialStateType => {
    switch (action.type) {
        case ADD_PLUS_NUMBER:
            return {
                ...state,
                numberTable: state.numberTable + 1,
                statusInc: state.numberTable >= state.valueSettings
            }
        case UPDATE_NUMBER:
            return {
                ...state,
                numberTable: state.numberTable = state.startValue,
                statusInc: state.statusInc = false
            }
        case CHANGE_VALUE:
            return {
                ...state,
                startValue: state.startValue = action.minNumber,
                valueSettings: state.valueSettings = action.maxNumber,
                numberTable: state.numberTable = action.minNumber,
                error: action.maxNumber <= action.minNumber || action.minNumber < 0,
                errorMessage: state.errorMessage = "Ошибка ввода"
            }
        default:
            return state
    }
}
export const addPlusNumberAC = (): RemoveTaskAT => {
    return {type: 'ADD-PLUS-NUMBER'}
}
export const updateNumberAC = (): UpdateNumberAT => {
    return {type: 'UPDATE-NUMBER'}
}
export const changeValueAC = (minNumber: number, maxNumber: number): ChangeValueAT => {
    return {
        type: 'CHANGE-VALUE',
        minNumber,
        maxNumber,
    }
}
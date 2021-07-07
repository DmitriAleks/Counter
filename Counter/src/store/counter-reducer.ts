import {ChangeEvent} from "react";

const ADD_PLUS_NUMBER = 'ADD-PLUS-NUMBER'
const UPDATE_NUMBER = 'UPDATE-NUMBER'
const CHANGE_VALUE = 'CHANGE-VALUE'
const ON_CHANGE_MAX_VALUE = 'ON_CHANGE_MAX_VALUE'
const ON_CHANGE_MIN_VALUE = 'ON_CHANGE_MIN_VALUE'

type ActionUnionType = RemoveTaskAT | UpdateNumberAT | ChangeValueAT|OnChangeMaxValueAT|OnChangeMinValueAT

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
type OnChangeMaxValueAT = {
    type: 'ON_CHANGE_MAX_VALUE'
    e: number
}
type OnChangeMinValueAT = {
    type: 'ON_CHANGE_MIN_VALUE'
    e: number
}


export type initialStateType = {
    startMinValue: number,
    startMaxValue: number,
    currentNumber: number,
    errorMessage: string,
    statusInc: boolean,
    error: boolean,
    errorSetButton: boolean,

}

export let initialState: initialStateType = {
    startMinValue: 0,
    startMaxValue: 5,
    currentNumber: 0,
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
                currentNumber: state.currentNumber + 1,
                statusInc: state.currentNumber >= state.startMaxValue -1
            }
        case UPDATE_NUMBER:
            return {
                ...state,
                currentNumber: state.currentNumber = state.startMinValue,
                statusInc: state.statusInc = false
            }
        case CHANGE_VALUE:
            return {
                ...state,
                startMinValue: state.startMinValue = action.minNumber,
                startMaxValue: state.startMaxValue = action.maxNumber,
                currentNumber: state.currentNumber = action.minNumber,
                error: action.maxNumber <= action.minNumber || action.minNumber < 0,
                errorMessage: state.errorMessage = "Ошибка ввода"
            }
        case ON_CHANGE_MAX_VALUE:
            return {
                ...state,
                startMaxValue: state.startMaxValue = Number(action.e),
                error: state.error = true,
                errorMessage: state.errorMessage = 'Введите значение',
            }
        case ON_CHANGE_MIN_VALUE:
            return {
                ...state,
                startMinValue: state.startMinValue = Number(action.e),
                error: state.error = true,
                errorMessage: state.errorMessage = 'Введите значение',
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
export const onChangeMaxValueAC = ( e: number ): OnChangeMaxValueAT => {
    return {
        type: 'ON_CHANGE_MAX_VALUE',
        e:e,
    }
}
export const onChangeMinValueAC = ( e: number ): OnChangeMinValueAT => {
    return {
        type: 'ON_CHANGE_MIN_VALUE',
        e:e,
    }
}
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
    valueSettings: 5,
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
                startValue: state.startValue + 1,
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
        case ON_CHANGE_MAX_VALUE:
            return {
                ...state,
                valueSettings: state.valueSettings = Number(action.e),
                error: state.error = true,
                errorMessage: state.errorMessage = 'Введите значение',
            }
        case ON_CHANGE_MIN_VALUE:
            return {
                ...state,
                startValue: state.startValue = Number(action.e),
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
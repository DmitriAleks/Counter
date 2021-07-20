export enum ACTIONS_TYPE {
    ADD_PLUS_NUMBER = 'ADD-PLUS-NUMBER',
    UPDATE_NUMBER = 'UPDATE-NUMBER',
    CHANGE_VALUE = 'CHANGE-VALUE',
    ON_CHANGE_MAX_VALUE = 'ON_CHANGE_MAX_VALUE',
    ON_CHANGE_MIN_VALUE = 'ON_CHANGE_MIN_VALUE',
}
//as as//

type ActionUnionType = RemoveTaskAT | UpdateNumberAT | ChangeValueAT | OnChangeMaxValueAT | OnChangeMinValueAT

type RemoveTaskAT = {
    type: ACTIONS_TYPE.ADD_PLUS_NUMBER,
}
type UpdateNumberAT = {
    type: ACTIONS_TYPE.UPDATE_NUMBER,
}
type ChangeValueAT = {
    type: ACTIONS_TYPE.CHANGE_VALUE,
    minNumber: number,
    maxNumber: number,
}
type OnChangeMaxValueAT = {
    type: ACTIONS_TYPE.ON_CHANGE_MAX_VALUE,
    newMaxValue: number
}
type OnChangeMinValueAT = {
    type: ACTIONS_TYPE.ON_CHANGE_MIN_VALUE,
    newMinValue: number
}


export let initialState = {
    startMinValue: 0,
    startMaxValue: 5,
    currentNumber: 0,
    errorMessage: '',
    statusInc: false,
    error: false,
    errorSetButton: false,
    controlSettings: false,
}
export type initialStateType = typeof initialState


export const counterReducer = (state = initialState, action: ActionUnionType): initialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_PLUS_NUMBER:
            return {
                ...state,
                currentNumber: state.currentNumber + 1,
                statusInc: state.currentNumber >= state.startMaxValue - 1
            }
        case ACTIONS_TYPE.UPDATE_NUMBER:
            return {
                ...state,
                currentNumber: state.currentNumber = state.startMinValue,
                statusInc: state.statusInc = false
            }
        case ACTIONS_TYPE.CHANGE_VALUE:
            return {
                ...state,
                currentNumber: state.currentNumber = action.minNumber,
                error: action.maxNumber <= action.minNumber || action.minNumber < 0,
                errorMessage: state.errorMessage = "Ошибка ввода"
            }
        case ACTIONS_TYPE.ON_CHANGE_MAX_VALUE:
            return {
                ...state,
                startMaxValue: state.startMaxValue = Number(action.newMaxValue),
                error: state.error = true,
                errorMessage: state.errorMessage = 'Введите значение',
            }
        case ACTIONS_TYPE.ON_CHANGE_MIN_VALUE:
            return {
                ...state,
                startMinValue: state.startMinValue = Number(action.newMinValue),
                error: state.error = true,
                errorMessage: state.errorMessage = 'Введите значение',
            }
        default:
            return state
    }
}
export const addPlusNumberAC = (): RemoveTaskAT => {
    return {type: ACTIONS_TYPE.ADD_PLUS_NUMBER}
}
export const updateNumberAC = (): UpdateNumberAT => {
    return {type: ACTIONS_TYPE.UPDATE_NUMBER}
}
export const changeValueAC = (minNumber: number, maxNumber: number): ChangeValueAT => {
    return {
        type: ACTIONS_TYPE.CHANGE_VALUE,
        minNumber,
        maxNumber,
    }
}
export const onChangeMaxValueAC = (newMaxValue: number): OnChangeMaxValueAT => {
    return {
        type: ACTIONS_TYPE.ON_CHANGE_MAX_VALUE,
        newMaxValue,
    }
}
export const onChangeMinValueAC = (newMinValue: number): OnChangeMinValueAT => {
    return {
        type: ACTIONS_TYPE.ON_CHANGE_MIN_VALUE,
        newMinValue,
    }
}
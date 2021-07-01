const ADD_PLUS_NUMBER = 'ADD-PLUS-NUMBER'
type ActionUnionType = RemoveTaskAT

type RemoveTaskAT = {
    type: 'ADD-PLUS-NUMBER',
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
                numberTable: +1,
            }
        default:
            return state
    }
}
export const addPlusNumberAC = ():RemoveTaskAT => {
    return {type: 'ADD-PLUS-NUMBER'}
}
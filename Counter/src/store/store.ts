import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from "../utils/localStorage-utils";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer, loadState());


store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

// @ts-ignore
window.store = store;

import {combineReducers, createStore} from 'redux';
import { counterReducer } from './counter-reducer';


const rootReducer = combineReducers({
    counter: counterReducer,
})
let preloadedState;
const persistedTodosString = localStorage.getItem('state-app');
if(persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, preloadedState);



store.subscribe( ()=>{
    localStorage.setItem('state-app', JSON.stringify(store.getState()))
  //  localStorage.setItem('value', JSON.stringify(store.getState().counter.startMinValue))
})


// @ts-ignore
window.store = store;
import React , { useState }from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";


function App() {
    let [valueSettings, setValueSettings]=useState<number>(10)
    let [startValue, setStartValue]=useState<number>(4)
    let limitValue = valueSettings + 1
    const ChangeValue=(minNumber:string,maxNumber:string)=>{
        let getMaxValue = Number(maxNumber)
        let getMinValue = Number(minNumber)
        setValueSettings(getMaxValue)
        setStartValue(getMinValue)
    }



    return (
        <div className="App">
           <Settings ChangeValue={ChangeValue}/>
            <Counter startValue={startValue} limitValue={limitValue} valueSettings={valueSettings}/>

        </div>


    );
}

export default App;

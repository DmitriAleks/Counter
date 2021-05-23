import React , { useState }from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";


function App() {

    return (
        <div className="App">
           <Settings/>
            <Counter/>

        </div>


    );
}

export default App;

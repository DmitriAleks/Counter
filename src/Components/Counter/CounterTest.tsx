import React from 'react';
import './Counter.css';
import Table from "./Table/Table";
import ButtonTest from "./Buttons/ButtonTest";

type CounterType = {
    numberTable: number
    addPlusNumber: () => void
    updateNumber: () => void
    statusInc: boolean
    valueSettings: number
    error: boolean
    errorMessage: string
}

function CounterTest(props: CounterType) {
    return (
        <div>
            <div className="corps">
                <div className='Table'>
                    <Table numberTable={props.numberTable} valueSettings={props.valueSettings} error={props.error}
                           errorMessage={props.errorMessage}/>
                </div>
                <div className='corpsTable'>
                    <div className='button'>
                        <ButtonTest
                            addPlusNumber={props.addPlusNumber}
                            updateNumber={props.updateNumber}
                            statusInc={props.statusInc}
                            error={props.error}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterTest;

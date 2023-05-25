import React, {useReducer} from "react"
import {useState} from "react";

export default function Reduce() {

    // console.log(props)

    const [count, countDispatch] = useReducer(countReducer, 0)
    const [number, setNumber] = useState(1)

    function down() {
        countDispatch({ type: 'down', number: number })
    }

    function reset() {
        countDispatch({ type: 'reset', number: number })
    }

    function up() {
        countDispatch({ type: 'up', number: number })
    }

    function countReducer(oldCount, action) {
        if (action.type === 'up') {
            return oldCount + action.number
        } else if(action.type === 'down') {
            return oldCount - action.number
        } else {
            return 0;
        }
    }

    function changeNumber (event) {
        setNumber(Number(event.target.value))
    }

    return (
        <div className={"reduce"}>
            <h2>Reduce</h2>

            <div>
                <input type={"button"} value={"_"} onClick={down}/>
                <input type={"button"} value={"0"} onClick={reset}/>
                <input type={"button"} value={"+"} onClick={up}/>
                <input type={"text"} value={number} onChange={changeNumber}/>
                <span>{count}</span>
            </div>
            <hr />
        </div>
    )
}



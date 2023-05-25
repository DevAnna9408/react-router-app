import React from "react";
import {createStore} from "redux";
import {Provider, useDispatch, useSelector} from "react-redux";

const initialState = { value: 0 }

function reducer (state, action) {

    if (action.type === 'UP') {
        return {...state, value: state.value + action.step}
    }

    return state
}

const store = createStore(reducer, initialState)

function Counter() {

    const count = useSelector(state => state.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>ReactReduxComponent</h1>
            <button onClick={() => {
                dispatch({ type: 'UP', step:2 })
            }}>+</button>{count}
        </div>
    )
}

export default function ReactReduxComponent() {
    return (
        <div>
            <Provider store={store}>
            <Counter />
            </Provider>
        </div>
    )
}

import React from "react";
import {createStore} from "redux";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "../../store/store";
import counterSlice from "../../store/counterSlice";

function Counter() {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>ReactToolkitComponent</h1>
            <button onClick={() => {
                // slice들 중에서 이름이 counterSlice인 slice의 up method를 실행시킨다.
                dispatch(counterSlice.actions.up(2))
            }}>+</button>{count}
        </div>
    )
}

export default function ReactToolkitComponent() {
    return (
        <div>
            <Provider store={store}>
            <Counter />
            </Provider>
        </div>
    )
}

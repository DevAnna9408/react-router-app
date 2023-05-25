import { React, useState } from "react";
import '../../index.css'
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

/*
* Provider: state를 어떤 컴포넌트들에게 제공 할 것인가?
* * */

const store = createStore(reducer)

function reducer(currentState, action) {

    // 현재 state가 정해지지 않았을 때의 초기값
    if(currentState === undefined) {
        return {
            number: 1
        }
    }

    // 현재 state들을 복사
    const newState = {...currentState}

    if(action.type === 'PLUS') {
        newState.number++;
    }

    return newState

}

export default function ReduxComponent() {

    // console.log(props)

    function Left1(props) {
        return (
            <div>
                <h1>Left1 : {props.number}</h1>
                <Left2 number = {props.number}/>
            </div>
        )
    }

    function Left2(props) {
        return (
            <div>
                <h1>Left2 : { props.number }</h1>
                <Left3 number = { props.number }/>
            </div>
        )
    }

    function Left3(props) {
        // useSelector: 함수를 인자로 받아 어떤 state를 사용하고 싶은지 선택한다.
        const number = useSelector(state => state.number)

        return (
            <div>
                <h1>Left3 : { number }</h1>
            </div>
        )
    }

    function Right1() {
        return (
            <div>
                <h1>Right1</h1>
                <Right2 />
            </div>
        )
    }

    function Right2() {
        return (
            <div>
                <h1>Right2</h1>
                <Right3 />
            </div>
        )
    }

    function Right3() {
        const dispatch = useDispatch()
        return (
            <div>
                <h1>Right3</h1>
                <input type={"button"} value={"+"} onClick={() => {
                    dispatch({ type: 'PLUS' })

                }}/>
            </div>
        )
    }

    return(
        <div className={"reduxComponent"}>
            <h1>Redux Component</h1>
            <div id = "grid">
                <Provider store={store}>
                <Left1/>
                <Right1 />
                </Provider>
            </div>
        </div>
    )
}

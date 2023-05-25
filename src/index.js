import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {NavLink, BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import styled from 'styled-components'
import Reduce from "./views/reduce/Reduce";
import ReduxComponent from "./views/redux/ReduxComponent";
import ReactReduxComponent from "./views/redux/ReactReduxComponent";
import ReactToolkitComponent from "./views/redux/ReactToolkitComponent";
const SimpleButton = styled.button`
    color: white;
    background-color: black;
`

const InterfaceButton = styled(SimpleButton)`
    font-size: 50px;
`

// styledComponent는 고유한 className을 가지기 때문에
// 일반 컴포넌트를 styled 상속 받으려면
// className을 props로 받아서 기재 해 줘야 한다.
const NormalButton = props => {
    return <button className={props.className}>{props.children}</button>

}
const ReactNormalButton = styled(NormalButton)`
    font-size: 50px;
`

const DynamicButton = styled.button`
    color: ${function (props) {
        return props.props
}}
`

const content = [
    { id:1, title:'HTML', des:'html is..' },
    { id:2, title:'JS', des:'js is..' },
    { id:3, title:'React', des:'react is..' }

]

function Home() {
    return(
        <div>
                <h2>Home</h2>
                Home..
                <SimpleButton>Small</SimpleButton>
                <InterfaceButton>Large</InterfaceButton>
                <NormalButton>React</NormalButton>
                <ReactNormalButton>React</ReactNormalButton>
                <DynamicButton props = 'red'>Dynamic</DynamicButton>
        </div>
    )
}

function Topics() {

    var list = []
    for(var c of content) {
        list.push(
            <li key={c.id}>
                <NavLink to={"/topics/" + c.id}>
                    {c.title}
                </NavLink>
            </li>
        )
    }

    return(
        <div>
            <h2>Topics</h2>
                <ul>
                    { list }
                </ul>
            <Routes>
                <Route path={"/:topic_id"} element={<Topic />}/>
            </Routes>
        </div>
    )
}

function Topic () {
    const params = useParams()
    const topic_id = params.topic_id
    let selected_topic = {
        title: 'Sorry',
        des: 'Not Found'
    }

    for(var c of content) {
        if (c.id === Number(topic_id)) {
            selected_topic = c
            break
        }
    }

    return(
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.des}
        </div>
    )

}

function Contact() {
    return(
        <div>
            <h2>Contact</h2>
            Contact..
        </div>
    )
}

function App() {
    return(
        <div>
            <h2>Route Basic</h2>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            <Home />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/topics"}>
                            <Topics />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"}>
                            <Contact />
                        </NavLink>
                    </li>
                </ul>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/topics/*"} element={<Topics />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/*"} element={"Not Found"}/>
            </Routes>
            <hr />
            <Reduce />
            <ReduxComponent />
            <hr />
            <ReactReduxComponent />
            <hr />
            <ReactToolkitComponent />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

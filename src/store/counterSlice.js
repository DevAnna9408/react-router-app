import { createSlice } from "@reduxjs/toolkit";

// store에 담을 각각의 기능들
const counterSlice = createSlice({

    // 기능의 이름
    name: 'counterSlice',

    // 기능의 초기값, vuex의 state
    initialState: { value:0 },

    // 기능, 함수명을 작성하고 인자로 state와 action을 받는다. vuex의 actions
    reducers: {
        up: (state, action) => {
            state.value = state.value + action.payload
        },
        down: (state, action) => {
            state.value = state.value - action.step
        }
    }
})

export default counterSlice

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataLogin: {},
    dataRegister: {},
    dataChangePassword: {},
    user: {},
    token: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = {...action.payload}
        },
        addDataRegister: (state, action) => {
            state.dataRegister = {...action.payload}
        },
        addDataLogin: (state, action) => {
            state.dataLogin = {...action.payload}
        },
        addDataChangePassword: (state, action) => {
            state.dataChangePassword = {...action.payload}
        },
        setToken: (state, action) => {
            state.token = {...action.payload}
        }
    }
})

export const {addUser, addDataRegister, addDataLogin, setToken, addDataChangePassword} = UserSlice.actions

export default UserSlice.reducer
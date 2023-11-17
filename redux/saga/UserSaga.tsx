import {fork, put, call, takeLatest} from 'redux-saga/effects'
import { changePassword, login, register } from '../action/UserAction'
import { addDataChangePassword, addDataLogin, addDataRegister, addUser, setToken } from '../reducer/UserSlice'


// worker sagas

interface UserResponse {
    result: boolean;
    user: {}; // Replace 'any' with the actual type of user
    token: string;
    message: string;
    // Add other properties as needed
}


function* doLogin(action: any) {
    try {
        console.log("doLogin")
        const [email, password] = action.payload
        console.log("doLogin Email: "+email+" doLogin password: "+password)

        const res: UserResponse = yield call(login, email, password)
        // console.log("login: "+JSON.stringify(res))

        yield put(addDataLogin(res))
        console.log("doLogin addDataLogin: ",JSON.stringify(res))

        yield put(addUser(res.user))
        console.log("doLogin addUser: ",res.user)

        yield put(setToken(res.token))
        console.log("doLogin setToken: ",res.token)
        
    } catch (err) {
        console.error("Error in doLogin:", err);
    }  
}

function*  doRegister(action: any) {
    try {
        const [name, email, password] = action.payload
        console.log(name, email, password)

        const res: UserResponse = yield call(register, name, email, password)

        yield put(addDataRegister(res))
        console.log("doRegister addDataRegister: ",JSON.stringify(res))

    } catch (err) {
        console.error("Error in doRegister:", err);
    }  
}

function* doChangePassword(action: any) {
    try {
        console.log("doChangePassword")
        const [email, newPassword, currentPassword] = action.payload
        console.log("email: "+email+" newPassword: "+newPassword+" currentPassword: "+currentPassword)

        const res: UserResponse = yield call(changePassword, newPassword, currentPassword, email)
        // console.log("login: "+JSON.stringify(res))

        yield put(addDataChangePassword(res))
        console.log("doChangePassword addDataLogin: ",JSON.stringify(res))

        yield put(addUser(res.user))
        console.log("doChangePassword addUser: ",res.user)
    } catch (err) {
        console.error("Error in doChangePassword:", err);
    }  
}



// watcher sagas

function* watchLogin() {
    console.log('watchLogin')
    yield takeLatest("LOGIN", doLogin)
}

function* watchRegister() {
    console.log('watchRegister')
    yield takeLatest("REGISTER", doRegister)
}

function* watchChangePassword() {
    console.log('watchChangePassword')
    yield takeLatest("CHANGE-PASSWORD", doChangePassword)
}

export default function* UserSaga() {
    yield fork(watchLogin)
    yield fork(watchRegister)
    yield fork(watchChangePassword)
}
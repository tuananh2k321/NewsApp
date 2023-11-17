import {fork, put, call, takeLatest} from 'redux-saga/effects'
import { login, register } from '../action/UserAction'
import { getDetailNews, getListNews } from '../action/NewsAction';
import { addDataDetailNews, addDataListNews } from '../reducer/NewsSlice';




// worker sagas

interface GetListNewsResponse {
    result: boolean;
    news: []; 
    message: string;
}

interface GetDetailNewsResponse {
    result: boolean;
    news: {}; 
    message: string;
}


function* doGetListNews() {
    try {
        const res: GetListNewsResponse = yield call(getListNews)
        //console.log('doGetListNews: '+JSON.stringify(res))
        yield put(addDataListNews(res))
    } catch (err) {
        console.error("Error in doGetListNews:", err);
    }  
}

function*  doGetDetailNews(action: any) {
    try {
        const [id] = action.payload
        console.log('id: '+id)

        const res: GetDetailNewsResponse = yield call(getDetailNews, id)
        console.log('doGetDetailNews: '+res)
        yield put(addDataDetailNews(res))

    } catch (err) {
        console.error("Error in doGetDetailNews:", err);
    }  
}

// watcher sagas

function* watchGetListNews() {
    console.log('watchGetListNews')
    yield takeLatest("GET-LIST-NEWS", doGetListNews)
}

function* watchDetailNews() {
    console.log('watchRegister')
    yield takeLatest("GET-DETAIL-NEWS", doGetDetailNews)
}

export default function* NewsSaga() {
    yield fork(watchGetListNews)
    yield fork(watchDetailNews)
}
import {fork, all} from 'redux-saga/effects'
import UserSaga from './UserSaga'
import NewsSaga from './NewsSaga'

export default function* sagas() {
    yield all([
        fork(UserSaga),
        fork(NewsSaga)
    ])
}
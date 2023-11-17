import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import UserSlice from "../reducer/UserSlice";
import sagas from "../saga/RootSaga";
import NewsSlice from "../reducer/NewsSlice";

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

export const Store = configureStore({
    reducer: {
        user: UserSlice,
        news: NewsSlice
    },
    middleware
})

sagaMiddleware.run(sagas)
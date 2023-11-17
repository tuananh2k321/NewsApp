import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataListNews: {},
    dataDetailNews: {}
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addDataListNews: (state, action) => {
            //console.log('NewsSlice: '+action.payload)
            state.dataListNews = {...action.payload}
        },
        addDataDetailNews: (state, action) => {
            state.dataDetailNews = {...action.payload}
        },
        
    }
})

export const {addDataDetailNews, addDataListNews} = NewsSlice.actions

export default NewsSlice.reducer
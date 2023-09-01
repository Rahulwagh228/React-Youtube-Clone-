const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResult: [],
    nextPageToken: null,
    recommendedVideos: [],
};

const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {},
    extraReducer: (builder) => {}
});

const store = configureStore({
    reducer: {
        youtubeApp: youtubeSlice.reducer
    }
});

const RootState = store.getState;
const AppDispatch = store.dispatch;

module.exports = {
    store,
    RootState,
    AppDispatch
};

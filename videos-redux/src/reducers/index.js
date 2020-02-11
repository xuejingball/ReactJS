import {combineReducers} from 'redux';

const videoReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_YOUTUBE':
            return action.payload;
        default:
            return state;
    }
}

const selectVideoReducer = (selectedVideo = null, action) => {
    switch(action.type) {
        case 'VIDEO_SELECTED':
            return action.payload;
        default:
            return selectedVideo;
    }
}

export default combineReducers({
    videos: videoReducer,
    selectedVideo: selectVideoReducer
})
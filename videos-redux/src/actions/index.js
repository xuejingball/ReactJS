import Youtube from '../apis/youtube';

const KEY = 'AIzaSyDsm0XccyQKKUsNlUIDj4j3diSvnLCy4jk';

const fetchYoutube = text => async dispatch => {
    console.log(text)
    const response = await Youtube.get('/search', {
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: `${KEY}`,
            q: text
        }
    });
    dispatch({ type: 'FETCH_YOUTUBE', payload: response.data.items });
}

export const selectVideo = videoSelected => {
    return {
        type: "VIDEO_SELECTED",
        payload: videoSelected
    }
}

export const fetchYoutubeAndSelectFirst = text => async (dispatch, getState) => {
    await dispatch(fetchYoutube(text));
    dispatch(selectVideo(getState().videos[0]));
}
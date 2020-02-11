import React from 'react';
import {connect} from 'react-redux';
import {fetchYoutubeAndSelectFirst} from '../actions';

import VideoItem from './VideoItem';

class VideoList extends React.Component {
    componentDidMount() {
        //https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&key=AIzaSyDsm0XccyQKKUsNlUIDj4j3diSvnLCy4jk&q=buildings
        this.props.fetchYoutubeAndSelectFirst('buildings'); // init the search with building
        // by default, select the first video as selected video
        // this.props.selectVideo(this.props.videos[0]);
    }

    renderList() {
        return this.props.videos.map(video => {
            return(
                <VideoItem key={video.id.videoId} video={video}/>
            );
        });
    }

    render() {
        if (!this.props.videos) {
            return <div>Loading...</div>
        }
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}
export default connect(mapStateToProps, {fetchYoutubeAndSelectFirst})(VideoList);
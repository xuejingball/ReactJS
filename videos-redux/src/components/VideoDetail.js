import { connect } from 'react-redux';
import React from 'react';


class VideoDetail extends React.Component {
    render() {
        if (!this.props.selectedVideo) {
            return <div>Loading...</div>
        }
        const video = this.props.selectedVideo;
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc}></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedVideo: state.selectedVideo
    }
}

export default connect(mapStateToProps)(VideoDetail);
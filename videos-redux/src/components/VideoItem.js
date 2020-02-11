import './VideoItem.css'
import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';

class VideoItems extends React.Component {   
    onVideoSelect(video) {
        this.props.selectVideo(video);
    }

    render() {
        const video = this.props.video;
        return (
            <div onClick={() => this.onVideoSelect(video)} className="video__item item">
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { selectVideo })(VideoItems);
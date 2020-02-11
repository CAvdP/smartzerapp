import React, { Component } from 'react';
import Video from './Video';
import Overlay from './Overlay';

// Main container of the video App //
class VideoApp extends Component {
    render(){
        return(
            <div className="video-app">
                <Video />
                <Overlay />
            </div>
        )
    }
}

export default VideoApp;
import React, { Component } from 'react';
import ReactPlayer from 'react-player'

// Change the settings of the video player here //
class Video extends Component {
    render () {
      return <div className="video-container"> 
                <ReactPlayer 
                className="video-player container-child" 
                url='http://127.0.0.1:1337/' 
                controls
                width='100%'
                height='100%'
                />
            </div>
    }
}

export default Video;
import React, { Component } from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';

class VideoPlayer extends Component {
  render() {
    return <ReactWebMediaPlayer
      title="My own video player"
      video="https://any-link.com/my-video.mp4"
      thumbnail="https://any-link.com/video-thumbnail.jpg"
    />
  }
}
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)}>
      <div>
        <img src={imageUrl} alt="thumbnail" />
        <h5>{video.snippet.title}</h5>
      </div>
    </li>
  )
}

export default VideoListItem;
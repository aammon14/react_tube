import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className='listItemComp' onClick={() => onVideoSelect(video)}>
      <div>
        <div className='listImg'>
          <img src={imageUrl} alt="thumbnail" />
        </div>
        <div className='desc'>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
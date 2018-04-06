import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(video)
  return (
    <div className='videoDetailComp'>
      <iframe width="560" height="315" title="main video" type="text/html" src={url} />
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  )
}

export default VideoDetail;
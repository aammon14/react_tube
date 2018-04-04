import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
// import './App.css';
import Searchbar from './components/Searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'React JS'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
      console.log('in app.js, videos: ', videos);
      console.log('in app.js, selectedVideo: ', this.state.selectedVideo)
    });
  }

  render () {
    return (
      <div>
        <Searchbar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import Searchbar from './components/Searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('React JS')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div className="appMain">
        <Searchbar onSearchTermChange={videoSearch} />
        <div className='videoAndList'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDEKcFhd0ic7EK0i2LP9bre3oXKDz-_-Sk';

// Create a new component to produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state= { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos } );
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Render in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

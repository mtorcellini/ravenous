import React from 'react';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

// import yelp
import yelp from './util/Yelp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses : []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  // search yelp function
  searchYelp(term, location, sortBy) {
    // console.log(`searchYelp(term: ${term}, location: ${location}, sortBy: ${sortBy})`);
    yelp.search(term, location, sortBy)
      .then(returnedBusinesses => {
        console.log(">>>", returnedBusinesses);
        this.setState({businesses : returnedBusinesses})
      });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchFunc={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;

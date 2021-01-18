import React from 'react';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
// import logo from './logo.svg';
import './App.css';
// import Business from './components/Business/Business.js';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [business, business, business, business, business, business]

class App extends React.Component {

  // search yelp function

  searchYelp(term, location, sortBy) {
    console.log(`searchYelp(term: ${term}, location: ${location}, sortBy: ${sortBy})`);


  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchFunc={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;

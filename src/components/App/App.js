import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'

//This is the static data for the app if, I do not use Yelp API

// const business = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// //An array holding which should hold all references to the business obj.

// const businesses = [business, business,business,business,business,business]

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: []
    }

    this.searchYelp = this.searchYelp.bind(this)

  }

  searchYelp(term,location,sortBy){
    //console.log(`Searching Yeap ${term} ${location} ${sortBy}`)
    Yelp.search(term,location,sortBy).then((businesses) => {
      this.setState({businesses: businesses})
    })
  }
  
  render(){

  return (
    <div className="App">
      <h1>Resto-Finder</h1>
      
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/>
    </div>
  );
  }
}



export default App;

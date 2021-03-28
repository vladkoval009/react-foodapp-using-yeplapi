import React from 'react';
import './SearchBar.css'



class SearchBar extends React.Component {

    constructor(props){
        super(props)
        //Setting up the initial state of the search bar. Setting up the obj. state: temr & location are set up to empty strings. Each key value will be changed with 
        //my own methods written below. See handleTermChange & handleLocationChange & 
        this.state = {
            term : '',
            location : '',
            sortBy : 'best_match'
        };
        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        }
        //Binding the methods for the event listeners. I MUST bind a method to an event handler.
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }

    //Handling Search when a user click on the button (onClick event)

    handleSearch(event){
        event.preventDefault()
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
        
        
    }
    //This one is giving the user a visual feedback.
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
          return 'active';
        }
        return '';
      }
    
    
    //These three methods bleow will be changign the state with .setState 
    handleSortByChange(sortByOption){
        this.setState({
            sortBy : sortByOption
        })
        
    }

    handleTermChange(event){
        this.setState({
            term : event.target.value 
        })

    }

    handleLocationChange(event){
        this.setState({
            location : event.target.value
        })


    }

    // This method will render an <li> element which will be placed inside <ul> in return().
    renderSortByOptions(){
        return(Object.keys(this.sortByOptions)).map(sortByOption => {

            let sortByOptionValue = this.sortByOptions[sortByOption];

            return(<li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>)

        });
    }
    //Now create the structure fo my SearchBar Component.
    render(){
        return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
            </div>
            </div>
        )
    }
}



export default SearchBar;
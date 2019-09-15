import React, { Component } from 'react';
import SearchArea from './SearchArea';


// constructor that inputs the value from the form
class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }
    // method that  handles the state of whatever was typed into input 
    handleSearch = (e) =>{
        console.log(e.target.value);
        this.setState({ searchField: e.target.value})
    }

    render(){
        return(
            <div>
                <SearchArea handleSearch = {this.handleSearch}/>
            </div>
        );

    }
}

export default Books;
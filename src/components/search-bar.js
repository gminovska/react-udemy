import React, { Component } from 'react';

//this is a functional (dumb) component. 

/*const SearchBar = () => {
    return <input />;
};*/

//This is class based component, that has internal record keeping (state)
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    render() {
        return <input onChange = {this.onInputChange.bind(this)}/>
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }
}

export default SearchBar;
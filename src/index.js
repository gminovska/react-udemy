import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = "AIzaSyBvsYzlS3LDq8QUS29BKlB_dSTanN-LvKo";
//Create a new component. It should produce some HTML

//this is a class, a factory for producing elements
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};
//we need to instantiate our components before they can be inserted into the DOM
// <App />


//Take the generated HTML and insert it into the DOM. We need to specify where React should render the element
ReactDOM.render(<App />, document.querySelector('.container'));
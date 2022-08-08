import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header'
import './App.css';

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {

    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: []
    };

    handleInputChange = (inputText) => {
        this.setState({headerExpanded: !(inputText.length > 0), suggestedNames: inputText ? name(inputText) : [],
        });
    }

    render () {
        // console.log(name("cloud"))
        return (
            <div>
                <Header headTitle={this.state.headerText} 
                headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}


export default App
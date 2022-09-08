// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  searchBarTextFunc = event => {
    this.setState({searchText: event.target.value})
  }

  goToButton = uniqueId => {
    const {suggestionsList} = this.props
    for (let i = 0; i < suggestionsList.length; i += 1) {
      if (suggestionsList[i].id === uniqueId) {
        this.setState({searchText: suggestionsList[i].suggestion})
        break
      }
    }
  }

  render() {
    const {searchText} = this.state
    const {suggestionsList} = this.props

    const filteredResults = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )
    console.log(searchText)
    console.log(filteredResults)

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-bar-and-items-container">
          <div className="search-bar-container">
            <img
              className="search-logo"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.searchBarTextFunc}
              value={searchText}
            />
          </div>
          <ul className="suggestions-container">
            {filteredResults.map(item => (
              <li key={item.id} className="list-item">
                <SuggestionItem
                  suggestionItem={item}
                  gotoButton={this.goToButton}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

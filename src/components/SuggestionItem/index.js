// Write your code here

import './index.css'

function SuggestionItem(props) {
  const {suggestionItem, gotoButton} = props

  const onGoTo = () => {
    gotoButton(suggestionItem.id)
  }

  return (
    <div className="suggestion-container">
      <p className="suggestion">{suggestionItem.suggestion}</p>
      <button className="suggestion-button" type="button" onClick={onGoTo}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </div>
  )
}

export default SuggestionItem

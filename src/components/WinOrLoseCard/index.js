import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainTriggered} = props
  let {totalScore} = props
  const onPlayAgain = () => {
    playAgainTriggered()
  }
  const img =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const wonOrLoseText = score === 12 ? 'You Won' : 'You Lose'
  totalScore = score === 12 ? 12 : totalScore
  return (
    <div className="win-or-lose-container">
      <img className="win-lose-emoji" alt="win or lose" src={img} />
      <div className="matters-con">
        <h1 className="win-or-lose-heading">{wonOrLoseText}</h1>
        <p className="para">Best Score</p>
        <p className="score">
          {score}/{totalScore}
        </p>
        <button onClick={onPlayAgain} className="play-button" type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard

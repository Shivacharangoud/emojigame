import './index.css'

const NavBar = props => {
  const {score, totalScore} = props

  return (
    <nav className="navbar-background">
      <div className="logo-con">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      {score === 12 ? (
        ''
      ) : (
        <div className="score-con">
          <p className="score-para">Score: {score}</p>
          <p className="total-score-para">Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar

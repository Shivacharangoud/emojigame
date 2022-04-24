/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList
 every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, idPushList: [], gameOver: false}

  playAgainTriggered = () => {
    const {score, totalScore} = this.state
    this.setState({score: 0})
    this.setState({gameOver: false})
    this.setState({idPushList: []})
    if (score >= totalScore) {
      this.setState({totalScore: score})
    }
  }

  emojiClicked = id => {
    const {idPushList} = this.state
    if (idPushList.includes(id)) {
      this.setState({gameOver: true})
    } else {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState(prevState => ({idPushList: [...prevState.idPushList, id]}))
    }
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojiListShuf = shuffledEmojisList()
    const {score, totalScore, idPushList, gameOver} = this.state
    console.log(idPushList)
    console.log(gameOver)

    const gameOverWonCheck = idPushList.length === 12

    return (
      <div className="total-outer-con">
        <NavBar score={score} totalScore={totalScore} />
        <div className="emoji-game-con">
          {gameOver || gameOverWonCheck ? (
            <WinOrLoseCard
              playAgainTriggered={this.playAgainTriggered}
              score={score}
              totalScore={totalScore}
            />
          ) : (
            <ul className="emojis-container-unorder">
              {emojiListShuf.map(each => (
                <EmojiCard
                  emojiClicked={this.emojiClicked}
                  emojiDetails={each}
                  key={each.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

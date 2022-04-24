import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const emojiClickedFunc = () => {
    emojiClicked(id)
  }
  return (
    <li className="emoji-card-con">
      <button type="button" onClick={emojiClickedFunc}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

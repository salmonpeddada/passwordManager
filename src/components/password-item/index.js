import './index.css'

const PasswordItem = props => {
  const {id, website, username, showTick, password, onDeletePassword} = props

  const onDelete = () => {
    onDeletePassword(id)
  }

  return (
    <li className="password-item">
      <h1 className="item-icon">{website[0].toUpperCase()}</h1>
      <div className="details">
        <p className="details-web-para">{`${website}`}</p>
        <p>{`${username}`}</p>
        {showTick ? (
          <p className="details-web-para">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        data-testid="delete"
        type="submit"
        className="delete-icon-container"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default PasswordItem

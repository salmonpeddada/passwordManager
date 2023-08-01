import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../password-item/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    showTick: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    const changedWebsite = event.target.value
    this.setState({website: changedWebsite})
  }

  onChangeUsername = event => {
    const changedUsername = event.target.value
    this.setState({username: changedUsername})
  }

  onChangePassword = event => {
    const changedPassword = event.target.value
    this.setState({password: changedPassword})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {username, website, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    // console.log(newPassword)
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onShowTick = () => {
    this.setState(prevState => ({
      showTick: !prevState.showTick,
    }))
  }

  onDeletePassword = id => {
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: updatedList})
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      passwordsList,
      showTick,
      searchInput,
      username,
      website,
      password,
    } = this.state
    // console.log(passwordsList)
    // console.log(showTick)
    const searchedList = passwordsList.filter(each =>
      each.username.toUpperCase().includes(searchInput.toUpperCase()),
    )

    return (
      <div className="password-manager">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="add-item">
          <form className="form-container" onSubmit={this.onAddPassword}>
            <h1 className="add-heading">Add New Password</h1>
            <div className="add-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="add-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="add-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website"
              />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="add-image"
          />
        </div>

        <div className="your-passwords">
          <div className="your-heading-container">
            <h1 className="add-heading">Your Passwords</h1>
            <p className="password-count">{passwordsList.length}</p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="input"
                onChange={this.onSearchChange}
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="passwords">
            <input type="checkbox" id="showpass" onClick={this.onShowTick} />
            <label htmlFor="showpass">Show passwords</label>
          </div>

          {passwordsList.length !== 0 ? (
            <ul className="password-item-container">
              {searchedList.map(each => (
                <PasswordItem
                  website={each.website}
                  username={each.username}
                  password={each.password}
                  showTick={showTick}
                  id={each.id}
                  key={each.id}
                  onDeletePassword={this.onDeletePassword}
                />
              ))}
            </ul>
          ) : (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager

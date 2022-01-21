import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-menu-mobile">
        <div className="logo-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </Link>
        </div>

        <li className="center-container">
          <Link to="/" className="home-jobs-icon-container">
            Home
          </Link>
          <Link to="/jobs" className="home-jobs-icon-container">
            Jobs
          </Link>
        </li>

        <div className="home-jobs-container">
          <ul className="nav-menu-list-mobile">
            <li className="nav-menu-item-mobile">
              <Link to="/" className="nav-link">
                <AiFillHome />
              </Link>
            </li>
            <li className="nav-menu-item-mobile">
              <Link to="/jobs" className="nav-link">
                <BsFillBriefcaseFill />
              </Link>
            </li>
          </ul>
          <div className="logout-container">
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={onClickLogout}
            >
              <FiLogOut />
            </button>
            <button
              type="button"
              className="nav-mobile-btn-lg"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const renderNavbar = (user) => {
        return(
            <div className="nav-link">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                {user.username ? <Link className="nav-link" to="/dashboard">Dashboard</Link> : <Link className="nav-link" to="/login">Login</Link>}  
            </div>
        )
} 

const NavBar = (props) => {
    return(
        
        <header>
            <div className="logo-container">
                <i className='fas fa-laptop-house'></i>
                <h2 className="logo">Remote Jobs</h2>
            </div>
            <nav>
                {renderNavbar(props.user)}
            </nav>
            <div className="follow-me">
                <a href="https://twitter.com/imoohma"><i className="fab fa-twitter-square"></i></a>
                <a href="https://www.linkedin.com/in/uma-manandhar"><i className="fab fa-linkedin"></i></a>
                <a href=" https://github.com/mdr-uma"><i className="fab fa-github-square"></i></a>
            </div>
        </header>
        
    )
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(NavBar)
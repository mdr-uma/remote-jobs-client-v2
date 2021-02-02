import React, {Component} from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import About from './About'
import JobsContainer from '../containers/JobsContainer'
import Footer from './Footer'
import UserContainer from '../containers/UserContainer'
import SearchResult from './SearchResult'
import {connect} from 'react-redux'
import { getUser } from '../actions/loginUser'


class App extends Component{

    componentDidMount() {
        this.props.getUser()
    }

    render(){
        return(
            <div className="grid-container">
                <BrowserRouter>
                <NavBar user={this.props.user}/> 
                    <Route exact path='/' component={JobsContainer} /> 
                    <Route exact path='/about' component={About} /> 
                    <Route exact path='/login' component={LoginForm} />
                    {this.props.user.username ? <Route exact path='/dashboard' component={UserContainer} /> : <Redirect to="/"/>}
                    <Route exact path='/results' component={SearchResult} />
                </BrowserRouter>
                <Footer /> 
                
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps, {getUser})(App)
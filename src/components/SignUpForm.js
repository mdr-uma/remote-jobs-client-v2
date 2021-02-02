import React from 'react'
import {createUser} from '../actions/createUser'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component{
    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createUser(this.state, () => {
            if(!this.props.user.error) {
            this.props.history.push('/dashboard')
            }
        })
        this.setState({
            username: "",
            email: "",
            password: ""
        })
    }

    render() {
        return(
            <div>
                <div className="sidebar">
                    <div className="form-container">
                        <h3>Sign Up</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username: </label>
                            <input type="text" placeholder="username" value={this.state.username} name="username" required onChange={this.handleChange}/> <br/><br/>
                            <label>Email Address: </label>
                            <input type="email" placeholder="eg@gmail.com" value={this.state.email} name="email" required onChange={this.handleChange}/> <br/><br/>
                            <label>Password: </label>
                            <input type="password" placeholder="password" value={this.state.password} name="password"required  onChange={this.handleChange}/> <br/><br/>
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps, {createUser})(withRouter(SignUpForm))
import React from 'react'
import { loginUser } from '../actions/loginUser'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    state = {
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
        this.props.loginUser(this.state, () => {
            if(this.props.user.username) {
                this.props.history.push('/dashboard')
            }
        })
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
                <div className="login-form">
                        <h3>Login</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label>Email Address: </label>
                            <input type="email" placeholder="eg@gmail.com" value={this.state.email} name="email" required onChange={this.handleChange} /> <br /><br />
                            <label>Password: </label>
                            <input type="password" placeholder="password" value={this.state.password} name="password" required onChange={this.handleChange} /> <br /><br />
                            <input type="submit" value="login"/>
                        </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}


export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm))
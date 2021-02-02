import React from 'react'
import {connect} from 'react-redux'
import DashBoard from '../components/DashBoard'
import {logoutUser} from '../actions/logoutUser'
import { userJob, removeJob } from '../actions/userJobs'

class UserContainer extends React.Component{
    componentDidMount() {
        this.props.userJob()
    }

    render() {
        return(
            <div>
                <DashBoard 
                logOut={this.props.logoutUser} 
                saveJob={this.props.saveJob}
                removeJob={this.props.removeJob}
                user={this.props.user}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ user, saveJob }) => {
    return {
        user,
        saveJob
    }
}

export default connect(mapStateToProps, {logoutUser, userJob, removeJob})(UserContainer)
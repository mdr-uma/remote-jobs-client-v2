import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm'
import BodyImage from '../components/BodyImage'
import JobList from '../components/JobList'
import JobSearch from '../components/JobSearch'
import {fetchJobs, savedJobs} from '../actions/fetchJobs'
import {connect} from 'react-redux'


class JobsContainer extends Component {
    componentDidMount() {
        this.props.fetchJobs()
    }

    render() {
        return(
            <div>
                <main>
                    <div className="content">
                        <BodyImage />
                        <SignUpForm />
                        <JobSearch />
                        <JobList 
                        jobs={this.props.jobs} 
                        user={this.props.user} 
                        savedJobs={this.props.savedJobs}
                        />
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = ({ jobs, user }) => {
    return{
        jobs: jobs.slice(1),
        user: user
    }
}

export default connect(mapStateToProps, { fetchJobs, savedJobs})(JobsContainer)

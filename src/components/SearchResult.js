import React, { Component } from 'react'
import BodyImage from './BodyImage'
import JobList from './JobList'
import { connect } from 'react-redux'
import {savedJobs} from '../actions/fetchJobs'

class SearchResult extends Component {  
    render() {
        return (
            <div className="search-container">
                <div className="search-image">
                    <BodyImage />
                </div>
                <div className="search-result">
                    <JobList jobs={this.props.jobs} user={this.props.user} savedJobs={this.props.savedJobs}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ jobs, user }) => {
    return {
        jobs: jobs.slice(1),
        user
    }
}

export default connect(mapStateToProps, {savedJobs})(SearchResult)

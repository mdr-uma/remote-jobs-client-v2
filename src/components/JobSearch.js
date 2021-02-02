import React, { Component } from 'react'
import {fetchSearchJobs} from '../actions/fetchJobs'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class JobSearch extends Component {
    state = {
        search: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchSearchJobs(this.state.search, () => {
            this.props.history.push('/results')
        })
        this.setState({
            search: ""
        })
    }

    handleOnChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder="Q  Enter a Search Term"
                        required
                        value={this.state.search}
                        onChange={this.handleOnChange}
                    />
                </form>
            </div>
        )
    }
}

export default connect(null, {fetchSearchJobs})(withRouter(JobSearch))

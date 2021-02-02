import React from 'react'
import Button from './Button'
import dateFormat from 'dateformat'
import RemoveButton from './RemoveButton'
// import LikeButton from './LikeButton'

const renderJobs = (props) => {
    return props.jobs.map((job, index) => {
            let date = job.date
            return (
                <div key={index} className="all-jobs">
                    <h5>{dateFormat(date, "mmmm dS, yyyy")}</h5>
                    <h3>{job.company}</h3>
                    <h4>{job.position}</h4>
                    <a alt="job link" href={job.url}>{job.url}</a>
                    {/* <h6>{job.description}</h6> */}
                    {/* <LikeButton /> */}
                    {job.slug ? <Button job={job} savedJobs={props.savedJobs} /> : <RemoveButton job={job} removeJob={props.removeJob}/>}
                    
                </div>
            )
    })
 }
               
const JobList = props => {
    return(
        <div className="job-container">
            {renderJobs(props)}
        </div>
    )
}

export default JobList
import React from 'react'
import { connect } from "react-redux"

const renderButton = (props) => {
    if (Object.keys(props.user).length > 0) {
        return (
            <div>
                <i className="fas fa-trash-alt" onClick={() => props.removeJob(props.job.id)}></i>
            </div>
        )
    }
}


const RemoveButton = (props) => {
    return (
        <div>
            {renderButton(props)}
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(RemoveButton)
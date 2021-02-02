import React from 'react'
import { useHistory } from "react-router-dom";
import {connect} from "react-redux"

const renderButton = (props, routeChange) => {
    if(props.user.username) {
        return(
            <div>
                <i className="fas fa-save" onClick={() => props.savedJobs(props.job, props.user, routeChange)}></i>
            </div>
        )
    }
}

const Button = (props) => {
    const history = useHistory()
    const routeChange =()=> {
        if(props.user.username){
            history.push(`/dashboard`)
        }
    }
    return(
        <div>
            {renderButton(props, routeChange)}
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(Button)
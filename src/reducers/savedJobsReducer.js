const savedJobsReducer = (state = [], action) => {
    switch (action.type) {
        case 'USER_JOB':
            return (
                action.job
            )

        case 'REMOVE_JOB':
            return (
                state.filter(job => job.id !== action.id)
            )
        
        default:
            return state
    }
}

export default savedJobsReducer
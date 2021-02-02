const JobsReducer = (state= [], action) => {
    switch(action.type) {
        
        case 'ADD_JOBS':
            return (
                action.jobs
            )

        case 'SEARCH_JOBS':
            return (
                action.jobs
            )

        default:
            return state
    }
}

export default JobsReducer
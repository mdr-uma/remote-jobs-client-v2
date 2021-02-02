export const userJob = () => {

    return (dispatch) => {
        return fetch(`https://frozen-waters-04920.herokuapp.com/jobs`, {
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },      
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                dispatch({ type: "USER_JOB", job: data})
            })
    }
}

export const removeJob = (id) => {
    return dispatch => {
        return fetch(`https://frozen-waters-04920.herokuapp.com/jobs/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            }
        })
        .then(job => {
        dispatch({type: "REMOVE_JOB", id})
        })
    }
}
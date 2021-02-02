export const loginUser = (payload, callback) => async(dispatch) => {
    const response = await fetch("https://frozen-waters-04920.herokuapp.com/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: payload })
        })
        .then(res => res.json())
        if (response.error) {
            alert(response.error)
        }
        dispatch({type: 'LOGIN_USER', payload: response})
        callback()
}

export const getUser = () => { 
    return dispatch => {   
        return fetch("https://frozen-waters-04920.herokuapp.com/currentUser", {  
            credentials: "include",         
            headers: {            
                "Content-Type": "application/json"          
                }
            })        
            .then(res => res.json())        
            .then(resp => {          
                if (resp.error) {            
                    alert(resp.error)          
                } else {            
                     dispatch({type: "CURRENT_USER", user: resp})          
                }
            })        
    }
}

export const createUser = (payload, callback) => async(dispatch) => {
    const response = await fetch('https://frozen-waters-04920.herokuapp.com/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({ user: payload })
        })
        .then(response => response.json())
        if (response.error) {
            alert(response.error)
        }
        dispatch({ type: 'CREATE_USER', payload: response })
        callback()  
}

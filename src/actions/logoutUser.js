export const logoutUser = (callback) => {
    return dispatch => {
        return fetch(`https://frozen-waters-04920.herokuapp.com/logout`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            }
        })
         .then(data => {
             dispatch({ type: "LOGOUT_USER" })
             callback()
         }
        )
    }
}
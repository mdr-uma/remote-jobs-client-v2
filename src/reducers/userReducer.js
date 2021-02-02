export default function usersReducer(state = {}, action){
    switch (action.type) {
        case 'CREATE_USER':
            return (
                action.payload
            )

        case 'LOGIN_USER':
            return (
                action.payload
            )

        case 'LOGOUT_USER':
            return {}

        case 'CURRENT_USER':
            return (
                action.user
                )
    
        default:
            return state
    }
}
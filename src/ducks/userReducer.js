import axios from 'axios'
const EXPORT_USER_DATA = 'EXPORT_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: EXPORT_USER_DATA,
        payload: data
    }
}

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case EXPORT_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user
            return {
                email, firstName, lastName
            }
        default: return state
    }
}
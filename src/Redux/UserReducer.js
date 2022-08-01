const initialState = {
    tenant: true,
    landlord: false,
    userId: 'abr14201',
    name: 'Andy B',
    email: 'andybeutler95@gmail.com',
    documents: [],
    properties: [
        {
            key: 'SC',
            address: '85 Mall Connector Rd. Greenville, SC 24056'
        },
        {
            key: 'AF',
            address: '498 S 1080 W American Fork, UT 84003'
        }
    ],
    billing: {
        currentBalance: 100.99
    }
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const UPDATE_USER = 'UPDATE_USER'

export const updateUser = () => {
    return {
        type: UPDATE_USER,
        payload: true
    }
}

export const login = user => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export default function (state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case UPDATE_USER:
            return {...state,
                tenant: payload.tenant,
                landlord: payload.landlord,
                userId: payload.userId,
                name: payload.name,
                email: payload.email,
                documents: payload.documents,
                properties: payload.properties
            }
        case LOGIN:
            return {
                payload
            }
        case LOGOUT:
            return initialState
        default:
            return state
    }
}

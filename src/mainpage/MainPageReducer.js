import axiosInstance from "../helpers/AxiosAPI";

const initialState = {
    name: 'Vinh',
    token: ''
}

export const ACTION_TYPES= {
    DISPLAY_NAME:'DisplayName',
    SET_TOKEN:'SetToken',
    LOGIN: 'Login',
    LOGIN_FAILED: 'LoginFailed'
}

//Reducers
export const MainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.DISPLAY_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case ACTION_TYPES.SET_TOKEN: {
            return {
                ...state,
                token: action.payload
            }
        }
        case ACTION_TYPES.LOGIN_FAILED: {
            return {
                ...state,
                token: ''
            }
        }
        default:
            return state;
    }
}

//Actions
export const setNewName = name => dispatch => {
    dispatch ({
        type : ACTION_TYPES.DISPLAY_NAME,
        payload: name
    })
}

export const setToken = token => dispatch => {
    dispatch ({
        type : ACTION_TYPES.SET_TOKEN,
        payload: token
    })
}

export const login = (username, password) => async (dispatch) => {
    // try {
    //     const res = await axiosInstance.post('abc', {
    //         username: username,
    //         password: password
    //     });
    //     // dispatch ({
    //     //     type: ACTION_TYPES.LOGIN,
    //     //     payload: res.data
    //     // })x
    //     console.log(res.data)
    // }
    // catch (error) {
    //     console.log(error)
    //     dispatch({
    //         type: ACTION_TYPES.LOGIN_FAILED,
    //         payload: 'test'
    //     })
    // }
    const res = axiosInstance.post('http://hieulnhcm.ddns.net:5000/api/token', {
        username: username,
        password: password,
        // refreshToken: 'string'
    });
    dispatch ({
        type: ACTION_TYPES.SET_TOKEN,
        payload: 'dumb token' // Dumb data
    })
}
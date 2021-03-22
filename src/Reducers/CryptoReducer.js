import { FETCHING_COIN_DATA, FETCING_COIN_DATA_SUCCESS, FETCING_COIN_DATA_FAIL } from './../Utils/ActionTypes'

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: null,
                data: [],
                hasError: false,
                errorMessage: null
            })
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            })
        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.error
            })
        default:
            return state;
    }
}
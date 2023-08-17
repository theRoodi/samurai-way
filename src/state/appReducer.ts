import {auth} from './authReducer';

const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS'
type ActionTypes = InitializeAppActionType

type InitializeAppActionType = {
    type: 'INITIALIZE-SUCCESS'
}

const initializeState = {
    initialized: false
};


export const appReducer = (state = initializeState, action: ActionTypes) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeSuccess = () => ({type: INITIALIZE_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(auth())
    Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccess())
        })
}

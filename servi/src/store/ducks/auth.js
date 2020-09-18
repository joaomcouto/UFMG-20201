export const Types = {
    LOGIN_REQUEST: "auth/LOGIN_REQUEST",
    LOGIN_SUCCESS: "auth/LOGIN_SUCCESS",
    LOGIN_FAIL: "auth/LOGIN_FAIL",
    
    REGISTER_REQUEST: "auth/REGISTER_REQUEST",
    REGISTER_SUCCESS: "auth/REGISTER_SUCCESS",
    REGISTER_FAIL: "auth/REGISTER_FAIL",
};

const INITIAL_STATE = {
    isLogged: false,
    waitingLogin: false,
    waitingRegister: false,
    userInfo: {},
    error: null
};

export default function sample(state = INITIAL_STATE, action){
    switch (action.type) {
        case Types.LOGIN_REQUEST:
            return{
                ...state,
                isLogged: false,
                waitingLogin: true,
                error:null,
                userInfo:{},
            }
        case Types.LOGIN_SUCCESS:
            return{
                ...state,
                isLogged: true,
                waitingLogin: false,
                error:null,
                userInfo:{}, // use action.user latter 
            }
        case Types.LOGIN_FAIL:
            return{
                ...state,
                isLogged: false,
                waitingLogin: false,
                error:null, // use action.error latter 
                userInfo:{}, 
            }
        case Types.REGISTER_REQUEST:
            return {
                ...state,
                waitingRegister:true,
                isLogged:false,
                error:null,
                userInfo:{}
            }
        case Types.REGISTER_SUCCESS:
            return {
                ...state,
                waitingRegister:false,
                isLogged:true,
                error:null,
                userInfo:{} // update
            }
        case Types.REGISTER_FAIL:
            return {
                ...state,
                waitingRegister:false,
                isLogged:false,
                error:null, //update
                userInfo:{}
            }
        default:
            return state;
    }
}


// Actions
export const Creators = {
    login_success: (user) => ({
        type: Types.LOGIN_SUCCESS,
        user
    }),
    login_request: () => ({
        type: Types.LOGIN_REQUEST,
    }),
    login_fail: (error) => ({
        type: Types.LOGIN_REQUEST,
        error
    }),
    register_success: (user) => ({
        type: Types.REGISTER_SUCCESS,
        user
    }),
    register_request: () => ({
        type: Types.REGISTER_REQUEST,
    }),
    register_fail: (error) => ({
        type: Types.REGISTER_REQUEST,
        error
    }),
}
export const Types = {
    INCREASE: "sample/INCREASE",
    DECREASE: "sample/DECREASE",
};

const INITIAL_STATE = {
    data: 0,
};

export default function sample(state = INITIAL_STATE, action){
    switch (action.type) {
        case Types.INCREASE:
            return {...state, data: state.data + 1};
        case Types.DECREASE:
            return {...state, data: state.data - 1};
        default:
            return state;
    }
}


// Actions
export const Creators = {
    increase: () => ({
        type: Types.INCREASE
    }),
    decrease: () => ({
        type: Types.DECREASE
    })
}
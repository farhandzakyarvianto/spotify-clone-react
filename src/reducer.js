export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // remove after developing
    token:
        "BQCumeELhfzANLsr8sOB6Kx3lnJQfW1Ddl-gZIxL0slQNFdSrbCd_ZwoZrtUb5gtUeZnea794SsFklHvu161ifhLo62jKO6TXOwTSwvhY3rc8PH5jklhiLwgc_JLAefwiphhRaMQV5pyR-scyIUDXK21dh23Unt-AC6P",
};

const reducer = (state, action) => {
    console.log(action);
    // Action --> type, [payload]
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
            break;
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
            break;
    }
};

export default reducer;

// reducers.js
const initialState = {
    selectedCity: '',
    weatherData: null,
    loading: false,
    error: false,
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CITY':
            return { ...state, selectedCity: action.payload,loading:true,error:null };
        case 'FETCH_WEATHER':
            return { ...state, loading: true };
        case 'SET_WEATHER':
            return { ...state, weatherData: action.payload, loading: false, error: null };
        case 'SET_ERROR':
            return { ...state, error: true, loading: false };
        default:
            return state;
    }
};


  
  export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
  });

export const selectCity=(data)=>{
    return {type: 'SELECT_CITY',
           payload: data,
}
}

export const fetchWeather = (city) => {
    return {type: 'FETCH_WEATHER',
    payload: city,
}
};

  
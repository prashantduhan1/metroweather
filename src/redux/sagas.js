import {takeEvery,call,put} from "redux-saga/effects"
import axios from "axios"

function* getWeather(action){
    
     try {
        const response = yield call(axios.get, `https://api.weatherapi.com/v1/forecast.json?key=18d6d64ca62a4b8da1260436233108&q=${action.payload}`);
        yield put({ type: 'SET_WEATHER', payload: response.data });
      } catch (error) {
        yield put({ type: 'SET_ERROR', error });
      }
    }



function* weatherSaga(){
    yield takeEvery("FETCH_WEATHER",getWeather)

}
export default weatherSaga;
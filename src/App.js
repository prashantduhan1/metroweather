// App.js
import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { weatherReducer } from './reducers';
// import rootSaga from './sagas';
 //import WeatherComponent from './WeatherComponent';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(weatherReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);
// import "./App.css"
// import {fetchWeather} from "./redux/action"
// import { useDispatch } from "react-redux"

// function App() {

//   const dispatch=useDispatch();
//   return (
    
//       <div className="App">
        
//         <button onClick={()=>dispatch(fetchWeather())}>Fetch weather</button>
       
//       </div>
    
//   );
// }

// export default App;
//import React from 'react';
//import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
// import { useDispatch } from "react-redux";
// import { fetchWeather } from "./redux/action";

// const items = [
//   {
//     key: '1',
//     label: "Chennai",
//   },
//   {
//     key: '2',
//     label: 'Mumbai'
//   },
//   {
//     key: '3',
//     label: "Bangalore"
//   },
//   {
//     key: '4',
//     label: 'New Delhi',
//   },
// ];

// function App() {
//   const dispatch = useDispatch();

//   const handleCitySelect = (key) => {
//     // Dispatch the fetchWeather action with the selected city key
//     dispatch(fetchWeather(key));
//   };

//   const menu = (
//       <>
//       {items.map(item => (
//         <button key={item.key} onClick={() => handleCitySelect(item.key)}>
//           {item.label}
//         </button>
//       ))}
//       </>
    
//   );

//   return (
//     <Dropdown overlay={menu} trigger={['click']}>
//       <Space>
//         Select City <DownOutlined />
//       </Space>
//     </Dropdown>
//   );
// }

// export default App;

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { useDispatch, useSelector} from 'react-redux'
import { fetchWeather,selectCity } from "./redux/action";
import { useEffect } from 'react';
import "./App.css"
import { CircularProgress } from '@mui/material';

const items = [
  {
    label: 'Chennai',
    key: '1',
  },
  {
    label: 'Mumbai',
    key: '2',
  },
  {
    label: 'Bengaluru',
    key: '3',
  },
  {
    label: 'New Delhi',
    key:'4'
  },
  {
    label:'Pune',
    key:'5'
  },
  {
    label:'Hyderabad',
    key:'6'
  },
  {
    label:'Indore',
    key:'7'
  }
];
function App(){
  const dispatch=useDispatch();

  const selectedCity = useSelector(state =>{ return state.weatherReducer.selectedCity; });
  const weatherData = useSelector((state) =>{ return state.weatherReducer.weatherData });
  const loading=useSelector((state)=>state.weatherReducer.loading)
  const error=useSelector((state)=>{  return state.weatherReducer.error })
 
  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchWeather(selectedCity));
    }
  }, [dispatch, selectedCity]);

  const onClick = (e) => {
    const city=items[e.key-1].label
    dispatch(selectCity(city))
  };

return (
<div className='app-container'>
<h2>Weather App</h2>
  <div className='info-container'>
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {(selectedCity)?selectedCity:'Select a city'}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  { loading?<CircularProgress color="success" />
  : weatherData && 
    <div>
    <h3>{selectedCity}</h3>
    <p>Temperature: {weatherData.current.temp_c}°C</p>
    <p>Humidity: {weatherData.current.humidity}%</p>
    <p>Weather: {weatherData.current.condition.text}</p>
  </div>
   }
   {   error && <div>Server not responding please try again</div>}
  </div>
</div>
)
  }
export default App;


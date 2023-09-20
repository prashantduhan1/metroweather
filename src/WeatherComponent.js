// // WeatherComponent.js
// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { selectCity, fetchWeather } from './actions';

// const WeatherComponent = ({ selectedCity, weatherData, loading, error, selectCity, fetchWeather }) => {
//   useEffect(() => {
//     if (selectedCity) {
//       fetchWeather(selectedCity);
//     }
//   }, [selectedCity]);

//   return (
//     <div>
//       <h1>Weather Forecast</h1>
//       <select value={selectedCity} onChange={(e) => selectCity(e.target.value)}>
//         <option value="">Select a City</option>
//         <option value="New York">New York</option>
//         {/* Add more city options */}
//       </select>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {weatherData && (
//         <div>
//           <h2>{weatherData.location.name}</h2>
//           <p>Temperature: {weatherData.current.temp_c}°C</p>
//           <p>Humidity: {weatherData.current.humidity}%</p>
//           <p>Condition: {weatherData.current.condition.text}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   selectedCity: state.selectedCity,
//   weatherData: state.weatherData,
//   loading: state.loading,
//   error: state.error,
// });

// export default connect(mapStateToProps, { selectCity, fetchWeather })(WeatherComponent);

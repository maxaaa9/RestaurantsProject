// import './App.css';
// import React from 'react';

// import RestaurantList from './RestaurantList';
// import RestaurantMenu from './RestaurantMenu';  // Make sure to import the RestaurantMenu component

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<RestaurantList />} />
//         {/* <Route path="/product/:id" element={<RestaurantMenu />} />  Define route for menu */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/restaurant/')
      .then(res => setRestaurants(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-item">
            <h2>{restaurant.name}</h2>
            <img src={'https://www.restaurant.bg/img/entities/5459/1bulgaria944.jpg'} alt={restaurant.name} />
            <button to={`/restaurant`}>
              Open Menu
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App;

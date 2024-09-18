import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
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
            {/* Use Link component to navigate */}
            {/* <Link to={`/product/${restaurant.id}`}>
              <button>Open Menu</button>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

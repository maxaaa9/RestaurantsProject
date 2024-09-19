import './Restaurants.css';
import RestaurantInfo from './RestaurantInfo';

function Restaurants({restaurants}) {
  return (
    <div className="restaurant-container">
      {restaurants.map((restaurant, index) => (
        <RestaurantInfo key={index} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default Restaurants;
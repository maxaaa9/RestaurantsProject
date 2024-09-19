import './RestaurantInfo.css';

function RestaurantInfo({ restaurant }) {
  return (
    <div className="restaurant-info-container">
      <p className="name">{restaurant.name}</p>
      <div className="restaurant-data">
        <p className="address res-data">Address: {restaurant.address}</p>
        <p className="res-data">Capacity: {restaurant.capacity}</p>
        <p className="res-data">{restaurant.isOpen ? 'Open' : 'Closed'}</p>
      </div>
    </div>
  );
}


export default RestaurantInfo;
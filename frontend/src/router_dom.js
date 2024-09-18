import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Link to={`/restaurant/${restaurant.id}`}>
        <button>View Menu</button>
      </Link>
    </div>
  );
};

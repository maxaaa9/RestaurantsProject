import './RestaurantItem.css';
import Salad from '../Images/Salad.png';
import Lemonade from '../Images/Lemonade.png';

function RestaurantItem({ item }) {
  return (
    <div className="restaurant-item">
      <div className="item-name">
        <p>{item.name}</p>
      </div>
      <img className="image" src={Salad} alt="Salad"></img>
      <div className="center-grid-text">
        <p>{item.price} $</p>
      </div>
      <div className="center-grid-text">
        <p>{item.grams} gr</p>
      </div>
      <p className="description">{item.description}</p>
    </div>
  );
}

export default RestaurantItem;
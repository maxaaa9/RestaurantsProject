import './ProductContainer.css';
import RestaurantItem from './RestaurantItem';

function ProductContainer({ products }) {
  return (
    <div className='ProductContainer'>
      {products.map((product, index) => (
        <RestaurantItem key={index} item={product} />
      ))}
    </div>
  );
}

export default ProductContainer;
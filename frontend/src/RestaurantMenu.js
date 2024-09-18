import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantMenu = () => {
  const { id } = useParams();  // Get restaurant ID from the URL
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurants/${id}/products/`)
      .then(res => setMenuItems(res.data))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
  console.log(menuItems)
  }, [menuItems])

  return (
    <div>
      <h1>Menu for Restaurant {id}</h1>
      <ul>
        {menuItems && menuItems?.map(item => (
          <li key={item.id}>
            {item.name + " "}
             
            {item.rating + "g"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

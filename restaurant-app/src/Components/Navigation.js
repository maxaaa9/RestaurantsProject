import './Navigation.css';
import Button from './Button';

function Navigation() {
  return (
    <nav className='nav-container'>
        <Button text='All Restaurants' />
        <Button text='Foods' />
        <Button text='Drinks' />
    </nav>
  );
}

export default Navigation;

import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/logo.png'; // Assuming you have a logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
        <img src={Logo} alt="Utano Health Logo" />
        <h2>Utano</h2>
      </div>

    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn1')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav1' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h2 style={{color:'orangered',listStyle:"none",fontFamily:"cursive"}}>
            jumia</h2>
          </Link>
          <button className='btn1 toggle-btn'style={{backgroundColor:"orangered"}} onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links1'>
          <li>
            <button className='link-btn1' onMouseOver={displaySubmenu}>
              diswa video
            </button>
          </li>
          <li>
            <button className='link-btn1' onMouseOver={displaySubmenu}>
              docs & tools
            </button>
          </li>
          <li>
            <button className='link-btn1' onMouseOver={displaySubmenu}>
             company
            </button>
          </li>
          <li>
            <button className='link-btn1' onMouseOver={displaySubmenu}>
             login
            </button>
          </li>
        </ul>
        <Link to='./cart'>
          <button className="btn-outline signin-btn px-2 py-1">sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

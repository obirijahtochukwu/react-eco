import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import sublinks from '../data';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <div className="nav-head mb-4">
          <h2 style={{color:'orangered',listStyle:"none",fontFamily:"cursive"}} className='close-btn1'>
            jumia
          </h2>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h5>{page}</h5>
                <hr/>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { to, icon, label } = link;
                    return (
                      <Link key={index} to={to} onClick={closeSidebar}>
                        {icon}
                        {label}
                        <hr/>
                        <hr/>
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

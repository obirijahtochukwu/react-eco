import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { Link } from "react-router-dom";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [ location, links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
       
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { to, label } = link;
            return (
              <Link key={index} to={to}>
                {label}
              </Link>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu

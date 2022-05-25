import React from 'react'
import './Style-header-DB.css'
import Logo from './assetsss/chusecret-kophong.png'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


export default function Header() {
  return (
    <div className="containerdangbai">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="logo-1" />
        </div>

        <div className="logout">
          <Link to="/login"> <Icon icon="icon-park-outline:logout" />
          </Link>
           
        </div>
      </div>
    </div>
  )
}

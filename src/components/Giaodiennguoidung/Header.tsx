import React from 'react'
import './Style-header.css'
import Logo from './assets/chusecret-kophong.png'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';



export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="logo-1" />
        </div>
        <div className="header__db">
          <Link to="/Dangbai"> <Icon icon="carbon:add-alt" /> Đăng bài</Link>
        </div>
        <div className="logout">
          <Link to="/login"> <Icon icon="icon-park-outline:logout" />
          </Link>
           
        </div>
      </div>
    </div>
  )
}

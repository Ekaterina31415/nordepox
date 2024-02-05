import React, { Component } from 'react'
import logo from '../img/logo.png'

export class Header extends Component {
  render() {
    return (
      <header>
      <div>
        <img className='logo' src={logo} alt='NORDEPOX'/>
        <ul className='nav'>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Контакты</li>
          <li className='button'>Связаться с нами</li>
        </ul> 
      </div>
    </header>
    )
  }
}

export default Header
import React from 'react'
import './Header.css'
import { Globe } from 'lucide-react';

function Header() {
  return (
    <header className="header">
      <img src="world.svg" alt='world-icon' class="worldimg"/>
      <h1 className="header-title"> My travel journal.</h1>
    </header>
  )
}

export default Header

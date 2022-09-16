import React from 'react'
import Header from './Header'
import HomeContent from './HomeContent'
import Nav from './Nav'
const Home = () => {
  const navItems = [
    { item: "A propos", ref: "#about" },
    { item: "portfolio", ref: "#projet" },
    { item: "Contact", ref: "#contact" }
  ];
  return (
    <div className="accueil grid-row">
      <div className='home-top'>
        <div className="header center">
          <Header />
          <Nav navItems={navItems} />
        </div>
      </div>
      <HomeContent />
    </div>
  )
}

export default Home
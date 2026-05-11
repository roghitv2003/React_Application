import React, { useState } from 'react'
import './Top.css'

function Top() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <h1>ShopHub</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
        <div className="nav-links">
          <button className="nav-link">Home</button>
          <button className="nav-link">Categories</button>
          <button className="nav-link">Cart (0)</button>
          <button className="nav-link">Account</button>
        </div>
      </div>
    </div>
  )
}

export default Top
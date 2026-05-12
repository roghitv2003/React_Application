import React, { useState } from 'react'
import './Mid.css'
import Product from './Product'

function Mid() {
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      image: 'https://via.placeholder.com/250?text=Headphones',
      rating: 4.5,
      reviews: 128,
      badge: 'Sale'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://via.placeholder.com/250?text=Smart+Watch',
      rating: 4.8,
      reviews: 256,
      badge: 'New'
    },
    {
      id: 3,
      name: 'USB-C Cable',
      price: 12.99,
      image: 'https://via.placeholder.com/250?text=USB+Cable',
      rating: 4.3,
      reviews: 89,
      badge: ''
    },
    {
      id: 4,
      name: 'Phone Case',
      price: 24.99,
      image: 'https://via.placeholder.com/250?text=Phone+Case',
      rating: 4.6,
      reviews: 342,
      badge: 'Sale'
    },
    {
      id: 5,
      name: 'Portable Speaker',
      price: 59.99,
      image: 'https://via.placeholder.com/250?text=Speaker',
      rating: 4.7,
      reviews: 201,
      badge: ''
    },
    {
      id: 6,
      name: 'Screen Protector',
      price: 9.99,
      image: 'https://via.placeholder.com/250?text=Screen+Protector',
      rating: 4.4,
      reviews: 512,
      badge: 'New'
    },
    {
      id: 7,
      name: 'Power Bank',
      price: 34.99,
      image: 'https://via.placeholder.com/250?text=Power+Bank',
      rating: 4.5,
      reviews: 178,
      badge: 'Sale'
    },
    {
      id: 8,
      name: 'Laptop Stand',
      price: 44.99,
      image: 'https://via.placeholder.com/250?text=Laptop+Stand',
      rating: 4.9,
      reviews: 95,
      badge: ''
    },
    {
      id: 9,
      name: 'Laptop Stand',
      price: 45.99,
      image: 'https://via.placeholder.com/250?text=Laptop+Stand',
      rating: 3.9,
      reviews: 950,
      badge: ''
    }
    
  ])

  return (
    <div className="mid-section">
      <div className="hero-banner">
        <h2>Welcome to ShopHub</h2>
        <p>Discover amazing tech products at unbeatable prices</p>
      </div>
      <div className="products-section">
        <h3>Featured Products</h3>
        <div className="products-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mid
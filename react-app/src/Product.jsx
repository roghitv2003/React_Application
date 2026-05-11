import React, { useState } from 'react'
import './Product.css'

function Product({ product }) {
  const [isInCart, setIsInCart] = useState(false)

  const handleAddToCart = () => {
    setIsInCart(true)
    setTimeout(() => setIsInCart(false), 2000)
  }

  return (
    <div className="product-card">
      {product.badge && <div className="badge">{product.badge}</div>}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="price-section">
          <span className="price">${product.price}</span>
        </div>
        <button
          className={`add-to-cart-btn ${isInCart ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {isInCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default Product
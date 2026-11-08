
import './ProductCard.css'

function ProductCard({ name, info, price, path }) {
  return (
    <>
      <div className='product-card'>
        <img src={path} alt={name || 'product image'} />
        <h3>{name}</h3>
        <p>{info}</p>
        <h2>{price}</h2>
        <div id="buttons">
          <button className='btn'>Buy</button>
          <button className='btn'>Add to Cart</button>

        </div>
      </div>
    </>
  )
}

export default ProductCard;
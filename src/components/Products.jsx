import '../components/Products.css'
import { Link,Outlet } from 'react-router-dom';
const Products = ({items,addCard}) => {
    


  return (
    <div className='products' key={items.id}>
        <div className='products-items'>
            <img src={items.imgName} alt="leading" className='img-fluid' />
            <h4>{items.name}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className='products-price'>
                <span>${items.price}/ kg</span>
                <button><Link to="/card" onClick={(e)=>addCard(items.id)} style={{textDecoration:"none",color:"#81C408"}}>  Add to card</Link></button>
            </div>
        </div>
    </div>
  )
}
export default Products
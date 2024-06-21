import BannerTitle from './BannerTitle'
import '../components/Card.css';

import { faMinus, faPlus,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
const Card = ({products,setProducts,set}) => {

    
    const [coupon, setCoupon] = useState(false);
  
    const[total,setTotal]=useState(products.filter((item) => item.card === true).reduce((total, item) => total + (item.price * item.quantity), 0));
    const title = {
        title: 'Card',
        subtitle1: "home",
        subtitle2: 'Pages',
        subtitle3: 'Card'
    }
    const totalq = products.filter((item) => item.card === true)
    .reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotal(totalq);
 
 const quantity = products.filter((item) => item.card === true)
       .reduce((sum, item) => sum + item.quantity, 0);
       set(quantity);

  const handleCoupon = (e) => {
    e.preventDefault();
    setCoupon(true);   
    e.target.reset(); 
  }
    function deleteCard(id) {
        setProducts(prevProducts =>
          prevProducts.map(item => ({
            ...item,
            card: item.id === id ? false : item.card
          }))
        );
      
      }

     function quantityChange(id, action) {
        setProducts(prevProducts =>
            prevProducts.map(item =>({
                ...item,
                quantity: item.id === id ? (action === "minus" && item.quantity > 1 ? item.quantity - 1 :action==="minus"? 1 : item.quantity + 1) : item.quantity
            })
           
        ));
      
     }
    return (
        <div>
            <BannerTitle user={title} />
            <div className='container cardTable'>
                <table width={"100%"}>
                    <thead className='heading'>
                        <tr>
                            <td>Products</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                            <td>Handle</td>
                        </tr>
                    </thead>
                    <tbody className='heading'>
                        {
                            products.filter((item) => item.card === true).map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td >
                                            <div className="img-container">
                                                <img src={item.imgName} alt="leading" className='img-fluid me-5   ' />
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td> ${item.price}</td>
                                        <td>
                                            <div className="btn-qty">
                                                    <button><FontAwesomeIcon icon={faMinus} onClick={() => quantityChange(item.id,"minus")} /></button>
                                                    <span>{item.quantity}</span>
                                                    <button><FontAwesomeIcon icon={faPlus}  onClick={() => quantityChange(item.id,"plus")} /></button>
                                            </div>
                                        </td>
                                      
                                        <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                           <FontAwesomeIcon icon={faTrash} onClick={() => deleteCard(item.id)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
             <div className='container coupon'>
               <div className='row'>
                <div className="col-lg-6">
                <form action="" className='couponForm' onSubmit={(e) => handleCoupon(e)}>
                    <input type="text" placeholder='Coupon Code' />
                     <button type='submit' onClick={() => setCoupon(true)}>Apply Coupon</button>
                </form>
                </div>
                <div className="col-lg-6">
                     <div className='cart-total'>
                        <h2>Cart Total</h2>
                        <div className='subtotal'>
                            <span>Subtotal:</span>
                            <span>${(products.filter((item) => item.card === true).reduce((totals, item) => totals + (item.price * item.quantity),0)).toFixed(2)}</span>
                        </div>
                        <div className='shipping'>
                            <span>Shipping :</span>
                            <span>Shipping to Ukraine: $ { 3} 
                            </span>
                           
                        </div>
                        <div className='total'>
                         <span>Total</span>
                         <span><span style={{textDecorationLine:"line-through",paddingRight:"10px",display:coupon?"inline":"none"}}>${total.toFixed(2)}</span> ${(total===0?0:total-(coupon? (10*total)/100:3)).toFixed(2) }</span>
                        </div>

                        <button className='proceed' >proceed checkout</button>
                     </div>
                </div>
               </div>
             </div>
        </div>
    )
}
export default Card
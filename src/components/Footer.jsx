import { useState } from 'react';
import '../components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faYoutube,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import banks from '../img/payment.png'
const Footer = () => {
    const [search,setSearch]=useState();
    console.log(search)
  return (
    <div className='footer'>
        <div className="container foot-sec1">
            <div className="row">
                <div className="col-lg-2 title-card">
                    <h3>Fruitables</h3>
                    <p>Fresh products</p>
                </div>
                <div className="col-lg-8">  
                        <div className='searchfeild2'>   
                            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder='Search'  />
                            <button className='btn btn-primary' onSubmit={(e) => e.preventDefault()}>Search</button>
                        </div>
                 </div>
                <div className="col-lg-2">
                    <div className='icon-media'>
                        <button><FontAwesomeIcon icon={faFacebookF} /></button>
                        <button><FontAwesomeIcon icon={faTwitter} /></button>
                        <button><FontAwesomeIcon icon={faYoutube} /></button>
                        <button><FontAwesomeIcon icon={faLinkedinIn} /></button>
                    </div>
                </div>
            </div>
        </div>
        <div className='container foot-sec2'>
            <div className='row'>
              <div className="col-lg-3">
                <h3>Why People Like us!</h3>
                <p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                <button className='btn'>read More</button>
              </div>
              <div className="col-lg-3">
               
                <ul style={{listStyle:'none'}}>
                <h3>Shop Info</h3>
                <li><a href='#e'>About Us</a></li>
                <li><a href='#e'>Conatct US</a></li>
                <li><a href='#e'>Privacy Policy</a></li>
                <li><a href='#e'>Terms & Condition</a></li>
                <li><a href='#e'>Return Policy</a></li>
                <li><a href='#e'>FAQs & Help</a></li>
              </ul>
              </div>
              <div className="col-lg-3">
              <h3>Account</h3>
              <div className="d-flex flex-column text-start footer-item">
                            
                            <a href='#e'  className="btn-link" >My Account</a>
                            <a href='#e' className="btn-link" >Shop details</a>
                            <a href='#e' className="btn-link" >Shopping Cart</a>
                            <a href='#e' className="btn-link" >Wishlist</a>
                            <a href='#e' className="btn-link" >Order History</a>
                            <a href='#e' className="btn-link" >International Orders</a>
                        </div>
              </div>
              <div className="col-lg-3">
              <h3>Contact</h3>
              <div className="footer-item">
                            <p>Address: 1429 Netus Rd, NY 48247</p>
                            <p>Email: Example@gmail.com</p>
                            <p>Phone: +0123 4567 8910</p>
                            <p>Payment Accepted</p>
                            <img src={banks} className="img-fluid" alt=""/>
                        </div>
              </div>
            </div>
        </div>
        <div className='container'>
           <div className='copyrights'>
            <p>Manoraj, All right reserved.</p>
           </div>
        </div>
    </div>
  )
}
export default Footer
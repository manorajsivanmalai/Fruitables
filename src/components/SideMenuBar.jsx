
import { faAppleAlt, faStar,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/SideMenuBar.css';
import { useEffect, useState ,memo,useRef} from 'react';
import feature1 from '../img/featur-1.jpg'
import feature2 from '../img/featur-2.jpg'
import feature3 from '../img/featur-3.jpg'
import bannerfruit from '../img/banner-fruits.jpg'


const SideMenuBar = ({ prod, price, set}) => {
  
    const [arr, setArr] = useState([]);

  useEffect(() => {
    const update = () => {
      const productCount = new Map();

      for (let i = 0; i < prod.length; i++) {
        const productName = prod[i].name;
          if (productCount.has(productName)) {
            productCount.set(productName, productCount.get(productName) + 1);
          } else {
            productCount.set(productName, 1);
          }
        
      }

      const newItemsProduct = Array.from(productCount, ([name, qty]) => ({ name, qty }));
      setArr(newItemsProduct);
    };

    update();
  }, [prod]);
console.log(prod)
    return (
        <div className='side-menu'>
          
            <div>
                <h3>Categories</h3>
                {arr.map((category,index) => (

                    <div className="categories" key={index}>
                        <div className='icon-category-name'>
                            <FontAwesomeIcon icon={faAppleAlt} />
                            <h6>{category.name}</h6>
                        </div>
                        <div>
                            <p>{category.qty}</p>
                        </div>
                    </div>

                ))}
            </div>

            <div className='price-range' >
                <h3>Price</h3>
                <input type="range" onChange={(e) => set(e.target.value)} />
                <p>{price}</p>
            </div>
            <div className='Additional-sort'>
                <h3>Additional</h3>
                <div>

                    <div className='checkbox-label'>
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <span htmlFor="organic">Organic</span>
                    </div>
                    <div className='checkbox-label'>
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <span htmlFor="Fresh"> Fresh</span>
                    </div>
                    <div className='checkbox-label'>
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <span htmlFor="Sales"> Sales</span>
                    </div>
                    <div className='checkbox-label'>
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <span htmlFor="Discount"> Discount</span>
                    </div>
                    <div className='checkbox-label'>
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <span htmlFor=" Expired"> Expired</span>
                    </div>
                </div>
            </div>
            <div className='featured-product'>
                <h3>Featured products</h3>
                <div className='product'>
                     <div className='row'>
                        <div className='col-lg-6'><img src={feature1} alt="loeading-feature-image" className='img-fluid'/></div>
                        <div className='col-lg-6'>
                            <h6>Big Banana</h6>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p>2.99 $ <span style={{ textDecoration: "line-through" }}>4.11 $</span></p>
                        </div>
                     </div>
                </div>
                
                <div className='product'>
                     <div className='row'>
                        <div className='col-lg-6'><img src={feature2} alt="loeading-feature-image" className='img-fluid'/></div>
                        <div className='col-lg-6'>
                            <h6>Big Banana</h6>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p>2.99 $ <span style={{ textDecoration: "line-through" }}>4.11 $</span></p>
                        </div>
                     </div>
                </div>
                
                <div className='product'>
                     <div className='row'>
                        <div className='col-lg-6'><img src={feature3} alt="loeading-feature-image" className='img-fluid'/></div>
                        <div className='col-lg-6'>
                            <h6>Big Banana</h6>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p>2.99 $ <span style={{ textDecoration: "line-through" }}>4.11 $</span></p>
                        </div>
                     </div>
                </div>
            </div>
            <button className='btn-show'>Show More</button>
            <div>
                <img src={bannerfruit} alt="leading" className='img-fluid bannerfruits'/>
            </div>
        </div>
    )
}
export default memo(SideMenuBar);
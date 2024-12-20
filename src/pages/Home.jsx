import './Home.css';
import { useContext, useState } from 'react'
import heroImg1 from '../img/hero-img-2.jpg';
import heroImg2 from '../img/hero-img-1.png';
import Products from '../components/Products.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCarSide, faUserShield, faExchangeAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../contextapi/productcontext.js';

const Home = () => {
    const [search, setSearch] = useState('');
    const {products,setProducts,setAddcardCount}=useContext(ProductContext)
    const [imgtarget, setImgtarget] = useState(heroImg1);
    const tit = ['friuts', "vegitables"];
    const [titil, setTittil] = useState(tit[0]);
    const arr = [heroImg1, heroImg2];

    function leftShiftArray(arr) {
        if (arr.length === 0) return arr;
        const firstElement = arr.shift();
        arr.push(firstElement);
        const firstElementtit = tit.shift();
        tit.push(firstElementtit);
        setImgtarget(arr[0]);
        setTittil(tit[0]);
       console.log(search)
        return arr;
    }
    function addCard(id) {
        setAddcardCount(prev=>prev+1);
        setProducts(prevProducts => prevProducts.map(item => ({ ...item, card: item.id === id ? true : item.card })));
    }
    function rightShiftArray(arr) {
        if (arr.length === 0) return arr;
        const lastElement = arr.pop();
        arr.unshift(lastElement);
        const lastElementtit = tit.pop();
        tit.unshift(lastElementtit);
        setImgtarget(arr[0])
        setTittil(tit[0]);
        return arr;
    }

  
    return (
        <div className='mt-5'>
            <div className="img-banner container-fluid">
                <div className='row' style={{ height: "100vh",display:'flex',alignItems:"center",justifyContent:'center' }}>
                    <div className='col-md-12 col-lg-6 bnrtext'>
                        <h2>100% organic food</h2>
                        <h1 className="mb-5 display-3 text-primary">Organic Veggies &amp; Fruits Foods</h1>
                        <div className='searchfeild'>
                            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
                            <button className=' btn-primary' onSubmit={(e) => e.preventDefault()}>Search</button>
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-6 img-corousel'>
                        <div className='hero-container'>
                            <img src={imgtarget} alt="efew" height={"350px"} width={"500px"} className='img-fluid' />
                            <a href='#example' style={{ textDecoration: "none",color:"#ffffff" }}><h4>{titil}</h4></a>
                            <div className='arrow'>
                                <div className='left-arrow' onClick={() => leftShiftArray(arr)}><FontAwesomeIcon icon={faArrowLeft} /></div>
                                <div className='right-arrow' onClick={() => rightShiftArray(arr)}><FontAwesomeIcon icon={faArrowRight} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="bg-light services">
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faCarSide} className='' />

                            </div>
                            <div className='text-center pt-3'>
                                <h3>Free Shipping</h3>
                                <p>Free on order over $300</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='bg-light services'>
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faUserShield} className='' />

                            </div>
                            <div className='text-center pt-3'>
                                <h3>Free Shipping</h3>
                                <p>Free on order over $300</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='bg-light services'>
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faExchangeAlt} className='' />
                            </div>
                            <div className='text-center pt-3'>
                                <h3>Free Shipping</h3>
                                <p>Free on order over $300</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='bg-light services'>
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faPhoneAlt} className='' />
                            </div>
                            <div className='text-center pt-3'>
                                <h3>Free Shipping</h3>
                                <p>Free on order over $300</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container products mt-5'>
                <div className='sortProd'>
                    <h2>Our Organic Products</h2>
                     <div className='btnsort'>
                     <button>All products</button>
                    <button>Vegetables</button>
                    <button>Fruits</button>
                    <button>Bread</button>
                    <button>Meat</button>
                     </div>
                </div>
                <div className="row">

                    {products.map((product, i) => {

                        return (<div className='col-lg-3' key={i}>
                            <Products items={product} key={product.name} addCard={addCard} />
                        </div>);
                    })}
                </div>
            </div>
        </div>

    )

}
export default Home


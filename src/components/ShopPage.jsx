
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SideMenuBar from './SideMenuBar';
import '../components/ShopPage.css';
import Products from './Products';

import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import BannerTitle from './BannerTitle';

 const title = {
  title: 'Shop',
  subtitle1: "Home",
  subtitle2: 'card',
  subtitle3: 'Shop Detail'
 
};
const ShopPage = ({products,setProducts,set,addcardCount}) => {  

        const [currentBtn, setCurrentBtn]=useState(1);

        const [splitArry, setSplitArray]=useState({start:0,end:9 });

        const [inputSearch,setinputSearch]=useState('');

        const [range, setRange] = useState(100);

        useEffect(() => {
     
          setSplitArray({
            start: (currentBtn * 9) - 9,
            end: currentBtn * 9
          });
        }, [currentBtn]); 

            const handleClick =  async (e) => {
        
              if (e.target.tagName === "BUTTON") {
                 if (e.target.value == 0 &&currentBtn!=Math.ceil(products.length/9)) {
                    setCurrentBtn(prevBtn => prevBtn + 1); 
                  } else if (e.target.value == -1 &&currentBtn!=1) {
                   setCurrentBtn(prevBtn => prevBtn - 1); 
                  } else if(e.target.value>0){
                  setCurrentBtn(parseInt(e.target.value)); 
              
                }
              
              }
            
            }
    
          function addCard(id) {
             console.log(id);
               set(prev=>prev+1);
                 setProducts(prevProducts => prevProducts.map(item => ({ ...item, card: item.id === id ? true : item.card,quantity:item.id===id? item.quantity+1:item.quantity}))); ;
                   
                   }



  return (
    <>
     <BannerTitle user={title} />

  
    <div className='container shopage'>
      <div>
        <h1>Fresh fruits shop</h1>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
        <div className='search-icon'>
            <input type="Search" placeholder="keywords" value={inputSearch} onChange={(e)=>setinputSearch(e.target.value)}/>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
        <div className='col-lg-6 sort-main'>
          <div className='sort-section'>
          <label>Default Sorting :</label>
          <select >
            <option>popularity</option>
            <option>organic</option>
            <option>fantastic</option>
            <option>Nothing</option>
          </select>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-3'>
          <SideMenuBar prod={products} price={range} set={setRange} />

        </div>
        <div className='col-lg-9 row'>
        {products.filter((pro)=>pro.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())&&range>Math.ceil(pro.price)).slice(splitArry.start,splitArry.end).map((product,i) => { 
      
         return(<div className='col-lg-4 ' key={i}>
         <Products items={product} key={product.name} addCard={addCard}/>
       </div>);
      })}
  <div className="col-lg-12" style={{height:"123px"}}>
      <Pagination btns={products.length} handleClick={handleClick} crnt={currentBtn}/>
  </div>
        </div>
      </div>
 
    </div>
    </>
  )
}
export default ShopPage;
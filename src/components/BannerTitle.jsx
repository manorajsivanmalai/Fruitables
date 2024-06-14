import '../components/BannerTitle.css';
import Home from './Home';
import { Link,Outlet } from 'react-router-dom';
const BannerTitle = (props) => {

    return (
        <>
        <div className="shop">
            <div className='shop-center'>
                <h2>{props.user.title}</h2>
                <div className='shopmenu'>
                    <ul>
                        <li><Link  to={"/"} >{props.user.subtitle1}</Link ></li>
                        <li><Link  to={props.user.subtitle2} >{props.user.subtitle2}</Link ></li>
                        <li><Link  to={props.user.subtitle3} >{props.user.subtitle3}</Link ></li>
                    </ul>
                </div>
            </div>
        </div>
        </>

    )
}
export default BannerTitle;
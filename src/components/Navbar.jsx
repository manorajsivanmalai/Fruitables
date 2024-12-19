import "../components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { useState,useContext } from "react";
import { ProductContext } from "../contextapi/productcontext";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const {addcardCount}=useContext(ProductContext);
  return (
    <>
      <nav className="navbar container-fluid">
        <div className="container navsections">
          <div className="col-lg-2 col-md-6 col-sm-12 barsmenu">
         
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h2>Fruitables</h2>
            </Link>
            <span className="bars">
              <FontAwesomeIcon icon={faBars} onClick={() => setShow(!show)} />
            </span>
          </div>
          <div
            className={`col-lg-4 col-md-6 col-sm-12 menubar1 ${
              show ? "mobile-menu" : "menuhide"
            }`}
          >
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/shopdetail"}>Shop Detail </Link>
              </li>
              <li>
                <Link to={"/card"}>Pages</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div
            className={`col-lg-4 col-md-6 col-sm-12 menubar2 ${
              show ? "mobile-menu" : "menuhide"
            }`}
          >
            <ul>
              <li className="search">
                <a href="#e">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
              <li className="cardCountmain">
                <Link to={"/card"}>
                  <FontAwesomeIcon icon={faShoppingBag} />  
                  <span className="cardcount">{addcardCount}</span>
                </Link>
              </li>
              <li className="user">
                <Link to={"/siginpage"}>
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};
export default Navbar;

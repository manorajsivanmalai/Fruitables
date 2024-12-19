import { useState } from "react";
import "../components/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import banks from "../img/payment.png";
const Footer = () => {
  const [search, setSearch] = useState();

  return (
    <div className="footer">
      <div className="container foot-sec1">
        <div className="row">
          <div className="col-lg-2 title-card">
            <h3>Fruitables</h3>
            <p>Fresh products</p>
          </div>
          <div className="col-lg-8">
            <div className="searchfeild2">
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
              <button
                className="btn btn-primary"
                onSubmit={(e) => e.preventDefault()}
              >
                Search
              </button>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="icon-media">
              <button>
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button>
                <FontAwesomeIcon icon={faYoutube} />
              </button>
              <button>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container foot-sec2">
        <div className="row">
          <div className="col-lg-3 d-flex flex-column align-items-center">
            <h3>Why People Like us!</h3>
            <p>
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the like Aldus PageMaker including of Lorem
              Ipsum.
            </p>
            <button className="btn readmore-footer">read More</button>
          </div>
          <div className="col-lg-3">
            <h3 className="text-center">Shop Info</h3>
            <div className="d-flex flex-column text-start footer-item align-items-center">
              <a href="#e">About Us</a>
              <a href="#e">Conatct US</a>
              <a href="#e">Privacy Policy</a>
              <a href="#e">Terms & Condition</a>
              <a href="#e">Return Policy</a>
              <a href="#e">FAQs & Help</a>
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="text-center">Account</h3>
            <div className="d-flex flex-column text-start footer-item align-items-center">
              <a href="#e" className="btn-link">
                My Account
              </a>
              <a href="#e" className="btn-link">
                Shop details
              </a>
              <a href="#e" className="btn-link">
                Shopping Cart
              </a>
              <a href="#e" className="btn-link">
                Wishlist
              </a>
              <a href="#e" className="btn-link">
                Order History
              </a>
              <a href="#e" className="btn-link">
                International Orders
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="text-center"> Contact</h3>
            <div className="footer-item text-center">
              <p>Address: 1429 Netus Rd, NY 48247</p>
              <p>Email: Example@gmail.com</p>
              <p>Phone: +0123 4567 8910</p>
              <p>Payment Accepted</p>
              <img src={banks} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyrights">
          {/* <p>Manoraj, All right reserved.</p> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;

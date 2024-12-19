import "./ShopDetail.css";
import BannerTitle from "../components/BannerTitle";
import SideMenuBar from "../components/SideMenuBar";
import brocoli from "../img/single-item.jpg";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext } from "react";
import contactimg from "../img/avatar.jpg";
import StarRating from "../components/StarRating";
import Products from "../components/Products";
import { ProductContext } from "../contextapi/productcontext";
import axios from "axios";
const ShopDetail = () => {
  const { products, setProducts, setAddcardCount } = useContext(ProductContext);
  const title = {
    title: "Shop Detail",
    subtitle1: "home",
    subtitle2: "Pages",
    subtitle3: "Shop Detail",
  };
  const [review, setReview] = useState([]);

  function addCard(id) {
    setAddcardCount((prev) => prev + 1);
    setProducts((prevProducts) =>
      prevProducts.map((item) => ({
        ...item,
        card: item.id === id ? true : item.card,
        quantity: item.id === id ? item.quantity + 1 : item.quantity,
      }))
    );
  }
  useEffect(() => {
    axios.get("http://localhost:5000/api/reviwes").then((response) => {
      setReview(response.data);
    });
  }, [review]);

  async function handleSubmit(e) {
    e.preventDefault();
    const currentDate = new Date();

    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    const newrevie = {
      id: review.length + 1,
      name: name,
      date: formattedDate,
      rate: rate,
      content: content,
    };

    axios
      .post("/api/reviwes", {
        newrevie,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setReview((prev) => [...prev, newrevie]);
    setName("");
    setRate(0);
    setContent("");
    setmail("");
  }
  const [divposition, setDivposition] = useState(-1000);
  function handleDrag(e) {
    e.preventDefault();
    const star = e.target.parentElement;

    if (
      star.parentElement.parentElement.parentElement.classList.contains(
        "corusel"
      )
    ) {
      const x = e.clientX;
      if (x > 0) {
        console.log(e.clientX, "odrag " + divposition);

        star.parentElement.parentElement.parentElement.style.setProperty(
          "transform",
          `translate3d(-${divposition}px, 0px, 0px)`
        );
        setDivposition(e.clientX);
      }
    }
  }

  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [content, setContent] = useState("");
  const [mail, setmail] = useState("");
  const [range, setRange] = useState(0);
  const [reviewDescription, setReviewDescription] = useState("Description");
  return (
    <div>
      <BannerTitle user={title} />
      <div className="container shop-detail">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6" style={{ height: "auto !important" }}>
                <div className="img-container">
                  <img src={brocoli} alt="" className="img-fluid rounded" />
                </div>
              </div>
              <div className="col-lg-6 vegitable-categery" style={{ height: "auto !important" }}>
                <h2>Brocoli</h2>
                <p>Category: Vegetables</p>
                <p></p>
                <p>
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <p>
                  Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                  peacock flounder; chain pickerel hatchetfish, pencilfish
                  snailfish
                </p>
                <div className="btn-qty">
                  <button>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>1</span>
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <button className="add-to-cart">Add to card</button>
              </div>
              <div className="col-lg-12">
                <nav className="navdescription">
                  <ul className="nav nav-tabs">
                    <li
                      onClick={() => setReviewDescription("Description")}
                      className={
                        reviewDescription === "Description" ? "activecolor" : ""
                      }
                    >
                      Description
                    </li>
                    <li
                      onClick={() => setReviewDescription("Reviews")}
                      className={
                        reviewDescription === "Reviews" ? "activecolor" : ""
                      }
                    >
                      Reviews
                    </li>
                  </ul>
                  <div
                    id="myTabContent"
                    className={
                      reviewDescription === "Description" ? "showtab" : ""
                    }
                  >
                    <p>
                      The generated Lorem Ipsum is therefore always free from
                      repetition injected humour, or non-characteristic words
                      etc.
                    </p>
                    <p>
                      Sabertooth peacock flounder; chain pickerel hatchetfish,
                      pencilfish snailfish filefish Antarctic icefish goldeye
                      aholehole trumpetfish pilot fish airbreathing catfish,
                      electric ray sweeper.
                    </p>
                    <table className="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <td>Weight</td>
                          <td>1 kg</td>
                        </tr>
                        <tr>
                          <td>Country of Origin</td>
                          <td>Agro Farm</td>
                        </tr>
                        <tr>
                          <td>Quality</td>
                          <td>Organic</td>
                        </tr>
                        <tr>
                          <td>Сheck</td>
                          <td>Healthy</td>
                        </tr>
                        <tr>
                          <td>Min Weight</td>
                          <td>250 Kg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    id="myTabContent2"
                    className={reviewDescription === "Reviews" ? "showtab" : ""}
                  >
                    {review.map((item) => {
                      return (
                        <div className="row review" key={item.id}>
                          <div className="col-lg-2" key={item.id}>
                           
                            <img
                              src={contactimg}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-lg-10 review-content">
                           
                              <p>{item.date}</p>
                              <div className="row">
                                <div className="col-lg-6">
                              
                                  <h4>{item.name}</h4>
                                </div>
                                <div className="col-lg-6 star">
                                 
                                  {Array(5)
                                    .fill()
                                    .map((_, i) => {
                                      if (item.rate > i) {
                                        return (
                                          <span key={i}>
                                            <FontAwesomeIcon
                                              icon={faStar}
                                              style={{ color: "gold" }}
                                            />
                                          </span>
                                        );
                                      } else {
                                        return (
                                          <span key={i}>
                                            <FontAwesomeIcon icon={faStar} />
                                          </span>
                                        );
                                      }
                                    })}
                                </div>
                              </div>
                              <p>{item.content}</p>
                           
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </nav>
              </div>
              <div className="col-lg-12">
                <h2>Leave a Reply</h2>
                <form action="post" onSubmit={handleSubmit}>
                  <div className="inputitems">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Your Email *"
                      value={mail}
                      onChange={(e) => setmail(e.target.value)}
                      required
                    />
                  </div>
                  <textarea
                    name=""
                    id=""
                    placeholder="Your Message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                  <div className="row">
                    <div className="col-lg-6 starRate">
                      <label htmlFor="please rate"> Please Rate :</label>
                      <StarRating totalStars={5} rate={rate} set={setRate} />
                    </div>
                    <div className="col-lg-6 submitForm">
                      <input type="submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <SideMenuBar prod={products} price={range} set={setRange} />
          </div>
        </div>
        <div className="container corusel-main">
          <div className="slider-corusel">
            <div className="sliders" onDrag={handleDrag}>
              <div className=" corusel coruselActive">
                {products.map((product, i) => {
                  return (
                    <div className={window.innerWidth <= 768 ?"col-lg-12":"col-lg-3"} key={i}>
                      <Products
                        items={product}
                        key={product.name}
                        addCard={addCard}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopDetail;

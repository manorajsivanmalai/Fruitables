import BannerTitle from "./BannerTitle";
import '../components/Contact.css';
import { faMapMarkerAlt,faPhoneAlt,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
    const title={
        title:'Contact',
        subtitle1:'home',
        subtitle2:'Pages',
        subtitle3:'Contact'
    }
  return (
    <div>
        <BannerTitle user={title} />
        <div className="container mt-5">
            <div className="row p-5 bg-light rounded">
                <div className="col-lg-12 text-center ">
                <h1 className="text-success font-weight-bold">Get in touch</h1>
                <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                <p><a href="https://html5up.net">HTML5 UP</a></p>
                </div>
                <div class="col-lg-12">
                            <div className="h-100 rounded">
                                <iframe className="rounded w-100" style={{height: "400px"}} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
             
              <div class="col-lg-7 mt-3">
                            <form action="" className="">
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                                <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10" placeholder="Your Message"></textarea>
                                <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-5 mt-3">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                               
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x text-primary me-4" />
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-2">123 Street New York.USA</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <FontAwesomeIcon icon={faEnvelope} className="fa-2x text-primary me-4" />
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">info@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded bg-white">   
                                <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x text-primary me-4" />
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+012) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                        </div>
        </div>
    </div>
  )
}
export default Contact
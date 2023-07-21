import { Link } from "react-router-dom";
import "./LandingMaterial/css/bootstrap.min.css";
import "./LandingMaterial/css/style.css";
import about1 from "./LandingMaterial/img/about-1.jpg";
import about2 from "./LandingMaterial/img/about-2.jpg";
import about3 from "./LandingMaterial/img/about-3.jpg";
import about4 from "./LandingMaterial/img/about-4.jpg";

import carousel1 from "./LandingMaterial/img/carousel-1.jpg";
import carousel2 from "./LandingMaterial/img/carousel-2.jpg";

import room1 from "./LandingMaterial/img/room-1.jpg";
import room2 from "./LandingMaterial/img/room-2.jpg";
import room3 from "./LandingMaterial/img/room-3.jpg";

import team1 from "./LandingMaterial/img/team-1.jpg";
import team2 from "./LandingMaterial/img/team-2.jpg";
import team3 from "./LandingMaterial/img/team-3.jpg";
import team4 from "./LandingMaterial/img/team-4.jpg";

import testimonial1 from "./LandingMaterial/img/testimonial-1.jpg";
import testimonial2 from "./LandingMaterial/img/testimonial-2.jpg";
import testimonial3 from "./LandingMaterial/img/testimonial-3.jpg";
import { AiOutlineArrowUp } from "react-icons/ai";

const Landing = () => {
  return (
    // <div className="w-full h-full flex flex-col gap-5 mb-10">
    //   <Carausel />
    //   <TopDestinations />
    //   <OurServices />
    // </div>
    <>
      <div className="container-xxl bg-white p-0">
        {/* Spinner Start */}

        {/* Spinner End */}
        {/* Header Start */}

        {/* Header End */}
        {/* Carousel Start */}
        <div className="container-fluid p-0 mb-5">
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src={carousel1} alt="Image" />

                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 700 }}>
                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                      Luxury Living
                    </h6>
                    <h1 className="display-3 text-white mb-4 animated slideInDown">
                      Discover A Brand Luxurious Hotel
                    </h1>
                    <Link
                      to={"/places"}
                      className="btn btn-primary py-md-3 px-md-5 me-3"
                    >
                      Places
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h6 className="section-title text-start text-primary text-uppercase">
                  About Us
                </h6>
                <h1 className="mb-4">
                  Welcome to{" "}
                  <span className="text-primary text-uppercase">Hotelier</span>
                </h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row g-3 pb-4">
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-hotel fa-2x text-primary mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">
                          1234
                        </h2>
                        <p className="mb-0">Rooms</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">
                          1234
                        </h2>
                        <p className="mb-0">Staffs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users fa-2x text-primary mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">
                          1234
                        </h2>
                        <p className="mb-0">Clients</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to={"/places"} className="btn btn-primary py-3 px-5 mt-2">
                  Places
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.1s"
                      src={about1}
                      style={{ marginTop: "25%" }}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.3s"
                      src={about2}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-50 wow zoomIn"
                      data-wow-delay="0.5s"
                      src={about3}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.7s"
                      src={about4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Room Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">
                Our Rooms
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-primary text-uppercase">Rooms</span>
              </h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={room1} alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Junior Suite</h5>
                      <div className="ps-2">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <small className="border-end me-3 pe-3">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="border-end me-3 pe-3">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                      <small>
                        <i className="fa fa-wifi text-primary me-2" />
                        Wifi
                      </small>
                    </div>
                    <p className="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={"/room/1"}
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={room2} alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Executive Suite</h5>
                      <div className="ps-2">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <small className="border-end me-3 pe-3">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="border-end me-3 pe-3">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                      <small>
                        <i className="fa fa-wifi text-primary me-2" />
                        Wifi
                      </small>
                    </div>
                    <p className="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={"/room/2"}
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={room3} alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">Super Deluxe</h5>
                      <div className="ps-2">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <small className="border-end me-3 pe-3">
                        <i className="fa fa-bed text-primary me-2" />3 Bed
                      </small>
                      <small className="border-end me-3 pe-3">
                        <i className="fa fa-bath text-primary me-2" />2 Bath
                      </small>
                      <small>
                        <i className="fa fa-wifi text-primary me-2" />
                        Wifi
                      </small>
                    </div>
                    <p className="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={"/room/1"}
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Room End */}
        {/* Video Start */}
        <div
          className="container-xxl py-5 px-0 wow zoomIn"
          data-wow-delay="0.1s"
        >
          <div className="row g-0">
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5">
                <h6 className="section-title text-start text-white text-uppercase mb-3">
                  Luxury Living
                </h6>
                <h1 className="text-white mb-4">
                  Discover A Brand Luxurious Hotel
                </h1>
                <p className="text-white mb-4">
                  You can find all types of hotel here
                </p>

                <Link
                  to={"/places"}
                  className="btn btn-primary py-md-3 px-md-5 me-3"
                >
                  Places
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video">
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* 16:9 aspect ratio */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowFullScreen={true}
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Start */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">
                Our Services
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-primary text-uppercase">Services</span>
              </h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-hotel fa-2x text-primary" />
                    </div>
                  </div>
                  <h5 className="mb-3">Rooms &amp; Appartment</h5>
                  <p className="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-utensils fa-2x text-primary" />
                    </div>
                  </div>
                  <h5 className="mb-3">Food &amp; Restaurant</h5>
                  <p className="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-spa fa-2x text-primary" />
                    </div>
                  </div>
                  <h5 className="mb-3">Spa &amp; Fitness</h5>
                  <p className="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-swimmer fa-2x text-primary" />
                    </div>
                  </div>
                  <h5 className="mb-3">Sports &amp; Gaming</h5>
                  <p className="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-glass-cheers fa-2x text-primary" />
                    </div>
                  </div>
                  <h5 className="mb-3">Event &amp; Party</h5>
                  <p className="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <a className="service-item rounded" href="">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-dumbbell fa-2x text-primary" />
                    </div>
                  </div>
                  <h5 className="mb-3">GYM &amp; Yoga</h5>
                  <p className="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Testimonial Start */}
        <div
          className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="owl-carousel testimonial-carousel py-5">
              <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                <p>
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                  est kasd kasd et erat magna eos
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src={testimonial1}
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
              </div>
              <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                <p>
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                  est kasd kasd et erat magna eos
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src={testimonial2}
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
              </div>
              <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                <p>
                  Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                  ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                  est kasd kasd et erat magna eos
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src={testimonial3}
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">
                Our Team
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-primary text-uppercase">Staffs</span>
              </h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={team1} alt="" />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={team2} alt="" />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={team3} alt="" />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={team4} alt="" />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}

        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <AiOutlineArrowUp />
        </a>
      </div>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
};

export default Landing;

import React from 'react';
function Landing_pg() {
  return (

    <>
<nav className="navbar navbar-expand-lg">
    <div className="container">
        <a className="navbar-brand" href="index.html">
            <i className="navbar-brand-icon bi-book me-2"></i>
            <span>ebook</span>
        </a>
           
        <div className="d-lg-none ms-auto me-3">
            <a href="#" className="btn custom-btn custom-border-btn btn-naira btn-inverted">
                <i className="btn-icon bi-cloud-download"></i>
                <span>Download</span>
            </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto me-lg-4">
                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_1">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_2">The Book</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_3">Author</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_4">Reviews</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="#section_5">Contact</a>
                </li>
            </ul>

            <div className="d-none d-lg-block">
                <a href="#" className="btn custom-btn custom-border-btn btn-naira btn-inverted">
                    <i className="btn-icon bi-cloud-download"></i>
                    <span>Download</span>
                </a>
            </div>
        </div>
    </div>
</nav>


<section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">

                <h6>Introducing ebook</h6>

                <h1 className="text-white mb-4">ebook landing page for professionals</h1>

                <a href="#section_2" className="btn custom-btn smoothscroll me-3">Discover More</a>

                <a href="#section_3" className="link link--kale smoothscroll">Meet the Author</a>
            </div>

            <div className="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
                <img src="images/education-online-books.png" className="hero-image img-fluid" alt="education online books"/>
            </div>
 
        </div>
    </div>
</section>


<section className="featured-section">
    <div className="container">
        <div className="row">

            <div className="col-lg-8 col-12">
                <div className="avatar-group d-flex flex-wrap align-items-center">
                    <img src="images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" className="img-fluid avatar-image" alt=""/>

                    <img src="images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid avatar-image avatar-image-left" alt=""/>

                    <img src="images/avatar/pretty-blonde-woman.jpg" className="img-fluid avatar-image avatar-image-left" alt=""/>

                    <img src="images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg" className="img-fluid avatar-image avatar-image-left" alt=""/>

                    <div className="reviews-group mt-3 mt-lg-0">
                        <strong>4.5</strong>

                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star"></i>

                        <small className="ms-3">2,564 reviews</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="py-lg-5"></section>


<section className="book-section section-padding" id="section_2">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12">
                <img src="images/tablet-screen-contents.jpg" className="img-fluid" alt=""/>
            </div>

            <div className="col-lg-6 col-12">
                <div className="book-section-info">
                    <h6>Modern &amp; Creative</h6>


                    <h2 className="mb-4">About The Book</h2>

                    <p>Credit goes to <a rel="nofollow" href="https://freepik.com" target="_blank">FreePik</a> for images used in this ebook landing page template. You may browse FreePik to download more free images for your website.</p>

                    <p>TemplateMo is one of the best websites to download free CSS templates for any purpose. This is an ebook landing page template using Bootstrap 5 CSS layout.</p>
                </div>
            </div>

        </div>
    </div>
</section>


<section>
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12 text-center">
                <h6>What's inside?</h6>

                <h2 className="mb-5">Preview at glance</h2>
            </div>


     

        </div>
    </div>
</section>
<section className="contact-section section-padding" id="section_5">
    <div className="container">
        <div className="row">

            <div className="col-lg-5 col-12 mx-auto">
                <form className="custom-form ebook-download-form bg-white shadow" action="#" method="post" role="form">
                    <div className="text-center mb-5">
                        <h2 className="mb-1">Get your free ebook</h2>
                    </div>

                    <div className="ebook-download-form-body">
                        <div className="input-group mb-4">
                            <input type="text" name="ebook-form-name" id="ebook-form-name" className="form-control" aria-label="ebook-form-name" aria-describedby="basic-addon1" placeholder="Your Name" required/>

                            <span className="input-group-text" id="basic-addon1">
                                <i className="custom-form-icon bi-person"></i>
                            </span>
                        </div>

                        <div className="input-group mb-4">
                            <input type="email" name="ebook-email" id="ebook-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@company.com" aria-label="ebook-form-email" aria-describedby="basic-addon2" required=""/>

                            <span className="input-group-text" id="basic-addon2">
                                <i className="custom-form-icon bi-envelope"></i>
                            </span>
                        </div>

                        <div className="col-lg-8 col-md-10 col-8 mx-auto">
                            <button type="submit" className="form-control">Download ebook</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-lg-6 col-12">
                <h6 className="mt-5">Say hi and talk to us</h6>

                <h2 className="mb-4">Contact</h2>

                <p className="mb-3">
                    <i className="bi-geo-alt me-2"></i>
                    London, United Kingdom
                </p>

                <p className="mb-2">
                    <a href="tel: 010-020-0340" className="contact-link">
                        010-020-0340
                    </a>
                </p>

                <p>
                    <a href="mailto:info@company.com" className="contact-link">
                        info@company.com
                    </a>
                </p>

                <h6 className="site-footer-title mt-5 mb-3">Social</h6>

                <ul className="social-icon mb-4">
                    <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-instagram"></a>
                    </li>

                    <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-twitter"></a>
                    </li>
                    
                    <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-facebook"></a>
                    </li>

                    <li className="social-icon-item">
                        <a href="#" className="social-icon-link bi-whatsapp"></a>
                    </li>
                </ul>

                <p className="copyright-text"/>Copyright © 2048 ebook company
                <br/><br/><a rel="nofollow" href="https://templatemo.com" target="_blank">designed by templatemo</a><p/>
            </div>

        </div>
    </div>
</section>
<script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/click-scroll.js"></script>
        <script src="js/custom.js"></script>
    </>
  );
}

export default Landing_pg;

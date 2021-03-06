import React from "react";

// Created separate Footer component so we can clean up some code in the Pages folder
const Footer = () => {
  return (
    // <>
    //   <footer>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-8 col-sm-6">
    //           <h2>Proper Watch</h2>
    //           <p>
    //             We have our social media outlets here if you want to follow us
    //             for future updates we do!
    //           </p>
    //           <ul className="list-inline">
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://www.facebook.com/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <i className="fab fa-facebook" />
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://www.twitter.com"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <i className="fab fa-twitter" />
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://www.instagram.com"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <i className="fab fa-instagram" />
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://www.pinterest.com"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <i className="fab fa-pinterest" />
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://aboutme.google.com/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <i className="fab fa-google-plus" />
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="col-md-4">
    //           <h3>Reach Out To Us!</h3>
    //           <ul className="list-unstyled">
    //             <li>
    //               <p>
    //                 <strong>
    //                   <i className="fa fa-map-marker" />
    //                   36 Hillcrest St. Ontario, CA 91761
    //                 </strong>
    //               </p>
    //             </li>
    //             <li>
    //               <p>
    //                 <strong>
    //                   <i className="fa fa-envelope" />
    //                   propermail@hotmail.com
    //                 </strong>
    //               </p>
    //             </li>
    //             <li>
    //               <p>
    //                 <strong>
    //                   <i className="fa fa-phone" />
    //                   310-432-3444
    //                 </strong>
    //               </p>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-12">
    //           <p>© 2019 Designed by Brian Shin</p>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </>
    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-pinterest fa-2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://aboutme.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google-plus fa-2x" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2019 Copyright
      </div>
    </footer>
  );
};

export default Footer;

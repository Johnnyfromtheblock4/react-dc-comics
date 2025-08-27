import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <footer>
      <TopFooter />
      <div className="middle-footer">
        <div className="container">
          <div className="row">
            <div className="col-50 menu-footer">
              <div className="col-33">
                <h2>DC COMICS</h2>
                <ul>
                  <li>
                    <a href="#">Characters</a>
                  </li>
                  <li>
                    <a href="#">Comics</a>
                  </li>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
                <h2>SHOP</h2>
                <ul>
                  <li>
                    <a href="#">Shop DC</a>
                  </li>
                  <li>
                    <a href="#">Shop DC Collectibles</a>
                  </li>
                </ul>
              </div>
              <div className="col-33">
                <h2>DC</h2>
                <ul>
                  <li>
                    <a href="#">Therms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy (New)</a>
                  </li>
                  <li>
                    <a href="#">Ad Choices</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Subscription</a>
                  </li>
                  <li>
                    <a href="#">Talent Workshop</a>
                  </li>
                  <li>
                    <a href="#">CPSC Certificates</a>
                  </li>
                  <li>
                    <a href="#">Ratings</a>
                  </li>
                  <li>
                    <a href="#">Shop Help</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-33">
                <h2>SITES</h2>
                <ul>
                  <li>
                    <a href="#">DC</a>
                  </li>
                  <li>
                    <a href="#">MAD Magazine</a>
                  </li>
                  <li>
                    <a href="#">DC Kids</a>
                  </li>
                  <li>
                    <a href="#">DC Universe</a>
                  </li>
                  <li>
                    <a href="#">DC Power Visa</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-50 background-dc"></div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-25 sign-up">
              <p>
                <a href="#">SIGN UP NOW!</a>
              </p>
            </div>
            <div className="col-75 socials">
              <h3>FOLLOW US</h3>
              <a href="#">
                <img src="./img/footer-facebook.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="./img/footer-twitter.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="./img/footer-youtube.png" alt="Youtube" />
              </a>
              <a href="#">
                <img src="./img/footer-pinterest.png" alt="Pinterest" />
              </a>
              <a href="#">
                <img src="./img/footer-periscope.png" alt="Periscope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

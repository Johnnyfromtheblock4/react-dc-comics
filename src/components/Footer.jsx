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
                  <li>Characters</li>
                  <li>Comics</li>
                  <li>Movies</li>
                  <li>TV</li>
                  <li>Games</li>
                  <li>Videos</li>
                  <li>News</li>
                </ul>
                <h2>SHOP</h2>
                <ul>
                  <li>Shop DC</li>
                  <li>Shop DC Collectibles</li>
                </ul>
              </div>
              <div className="col-33">
                <h2>DC</h2>
                <ul>
                  <li>Therms of Use</li>
                  <li>Privacy policy (New)</li>
                  <li>Ad Choices</li>
                  <li>Advertising</li>
                  <li>Jobs</li>
                  <li>Subscription</li>
                  <li>Talent Workshop</li>
                  <li>CPSC Certificates</li>
                  <li>Ratings</li>
                  <li>Shop Help</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-33">
                <h2>SITES</h2>
                <ul>
                  <li>DC</li>
                  <li>MAD Magazine</li>
                  <li>DC Kids</li>
                  <li>DC Universe</li>
                  <li>DC Power Visa</li>
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

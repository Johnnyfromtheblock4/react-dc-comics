const Header = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-25">
            <div className="logo-header">
              <img src="./img/dc-logo.png" alt="DC Logo" />
            </div>
          </div>
          <div className="col-75">
            <ul className="menu">
              <li>
                <a href="#">CHARACTERS</a>
              </li>
              <li className="active">
                <a href="#">COMICS</a>
              </li>
              <li>
                <a href="#">MOVIES</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">GAMES</a>
              </li>
              <li>
                <a href="#">COLLECTIBLES</a>
              </li>
              <li>
                <a href="#">VIDEOS</a>
              </li>
              <li>
                <a href="#">FANS</a>
              </li>
              <li>
                <a href="#">NEWS</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Header;

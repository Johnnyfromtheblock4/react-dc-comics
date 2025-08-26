const TopFooter = () => {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div className="col-100">
            <div className="icons-list">
              <div>
                <img
                  src="../img/buy-comics-digital-comics.png"
                  className="icon"
                  alt="Digital Comics"
                />
                <span>DIGITAL COMICS</span>
              </div>
              <div>
                <img
                  src="./img/buy-comics-merchandise.png"
                  className="icon"
                  alt="Merchandise"
                />
                <span>DC MERCHANDISE</span>
              </div>
              <div>
                <img
                  src="./img/buy-comics-subscriptions.png"
                  className="icon"
                  alt="Subscription"
                />
                <span>SUBSCRIPTION</span>
              </div>
              <div>
                <img
                  src="./img/buy-comics-shop-locator.png"
                  className="icon"
                  alt="Shop Locator"
                />
                <span>SHOP LOCATOR</span>
              </div>
              <div>
                <img
                  src="./img/buy-dc-power-visa.svg"
                  className="icon"
                  alt="Power Visa"
                />
                <span>DC POWER VISA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;

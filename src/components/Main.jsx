import comics from "../assets/comics";

const Main = () => {
  return (
    <main>
      <img
        src="../public/img/jumbotron.jpg"
        alt="Jumbotron"
        className="jumbotron"
      />
      <div className="container">
        <div className="row">
          <h2 className="main-title">CURRENT SERIES</h2>
          <div className="col lista-fumetti">
            {comics.map((comic) => (
              <div key={comic.id}>
                <img src={comic.thumb} alt={comic.title} />
                <h3>{comic.series}</h3>
              </div>
            ))}
            <button className="load-more">Load More</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

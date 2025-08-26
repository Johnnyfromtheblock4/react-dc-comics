import comics from "../assets/comics";

const Main = () => {
  return (
    <main>
      <img src="../public/img/jumbotron.jpg" alt="Jumbotron" className="jumbotron" />
      <div className="container">
        <div className="row">
          <div className="col lista-fumetti">
            {comics.map((comic) => (
              <div key={comic.id}>
                <img src={comic.thumb} alt={comic.title} />
                <h3>{comic.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

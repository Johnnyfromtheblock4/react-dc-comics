import comics from "../assets/comics";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
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

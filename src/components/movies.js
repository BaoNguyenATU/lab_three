import MovieItem from "./movieitem";
import { useState } from "react";
function Movies(props) {
    {/**State for moviess and posrtr URL */}
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      {/**Logging both years and poster into the console */}
      console.log(year);
      console.log(poster);
    }



return (
    <div>
      <h2>This is my Movies Component.</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

        <div className="form-group">
            <label>Add Movie Poster: </label>
            <input type="text"
                className="form-control"
                value={poster}
                onChange={(e) => { setPoster(e.target.value) }}
            />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
      {props.myMovies && props.myMovies.map(
        (movie) => {
          return <MovieItem mymovie={movie} key={movie.imdbID} />
        }
      )}
    </div>
  );
}
export default Movies;
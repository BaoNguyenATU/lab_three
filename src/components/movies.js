import MovieItem from "./movieitem";

function Movies() {
    const [year, setYear] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(year);
    }
}

const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie.imdbID} />
        }
    );
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
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );

export default Movies;
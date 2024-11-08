import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]);
  {/**Using useEffect to get API*/}
  useEffect(() => {

    {/**Doing it all in the background */}
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/**Displaying message on Read page */}
      <h2>This is my Read Component.</h2>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;
import { useState } from "react";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState('');
  {/**Creating event handle */}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);

    {/**Explain, movie added */}
    axios.post('http://localhost:4000/api/movies', movie)
    .then()
    .catch();
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          {/**Adding inputs */}
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
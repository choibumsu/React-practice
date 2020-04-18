import React from "react";
import PropTypes from "prop-types";

function Movie({ title, year, rating }) {
  console.log(title);
  console.log(year);
  return (
    <div>
      <h3>
        {title} : {year}
      </h3>
      <p>{rating}</p>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

const movies = [
  {
    id: 1,
    title: "Life of Pi",
    year: 2012,
    rating: 5,
  },
  {
    id: 2,
    title: "Avengers(End Game)",
    year: 2019,
    rating: 4.5,
  },
];

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {movies.map((movie) => {
        return (
          <Movie
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            key={movie.id}
          />
        );
      })}
    </div>
  );
}

export default App;

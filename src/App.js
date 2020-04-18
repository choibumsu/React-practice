import React from "react";

function Movie({ title, year }) {
  console.log(title);
  console.log(year);
  return (
    <h3>
      {title} : {year}
    </h3>
  );
}

const movies = [
  {
    id: 1,
    title: "Life of Pi",
    year: 2012,
  },
  {
    id: 2,
    title: "Avengers(End Game)",
    year: 2019,
  },
];

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {movies.map((movie) => {
        return <Movie title={movie.title} year={movie.year} key={movie.id} />;
      })}
    </div>
  );
}

export default App;

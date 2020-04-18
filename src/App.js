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

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Movie title="Life of Pi" year="2012" />
      <Movie title="Avengers(End Game)" year="2019" />
    </div>
  );
}

export default App;

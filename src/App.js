import "./App.css";
import React, { useState } from "react";

import data from "./components/data";
import ReviewCards from "./components/ReviewCards";
import ArrowComponent from "./components/ArrowComponent";

function App() {
  const [persons, setPersons] = useState(data);
  const [index, setIndex] = useState(0);

  const prevCard = () => {
    console.log("clicked");
    setIndex((prevIndex) => prevIndex - 1);
  };
  const nextCard = () => {
    console.log("clicked");
    setIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <>
      <main>
        <div className="heading">
          <h2>
            <span>/</span> Reviews
          </h2>
        </div>
        <section>
          <div className="cards-container">
            {persons.map((person, personIndex) => {
              let positionClass = "next";
              if (personIndex === index) {
                positionClass = "current";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === persons.length - 1)
              ) {
                positionClass = "previous";
              }
              return (
                <ReviewCards
                  positionClass={positionClass}
                  key={person.id}
                  person={person}
                />
              );
            })}
          </div>
          <ArrowComponent prevCard={prevCard} nextCard={nextCard} />
        </section>
      </main>
    </>
  );
}

export default App;

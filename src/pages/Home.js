import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [letters, setLetters] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  return (
    <main>
      <section className="d-flex" style={{ height: "300px" }}>
        <div className="container align-self-center">
          <h1 className="text-center">Welcome to TheCocktailDB</h1>
          <p className="text-center">
          An open, crowd-sourced database of drinks from around the world.
          </p>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h3 className="text-center">Your favourite drink starts with</h3>
          <div className="letters">
            {letters.map((letter) => (
              <Link to={`/drinks/${letter}`} className="card">
                {letter}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";

export default function About() {
  return (
    <section className="d-flex" style={{ height: "300px" }}>
      <div className="container align-self-center">
        <h1 className="text-center">Welcome to TheCocktailDB</h1>
        <p className="text-center">
          Welcome to TheCocktailDB:<br/> An open, crowd-sourced database of drinks from around the world.
          <br />
          We also offer a free JSON API for anyone wanting to use it, with
          additional features for subscribers.
        </p>
        <p className="mt-5 text-center" >For more informations please visit:</p>
        <a href="https://www.thecocktaildb.com/" target="_blank" >
          https://www.thecocktaildb.com
        </a>
      </div>
    </section>
  );
}

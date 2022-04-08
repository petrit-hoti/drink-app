import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Drink() {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`)
      .then((resp) => {
        setDrinks(resp.data.drinks);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 13:
        setSearch(e.target.value);
        setLoading(false);
        break;
    }
  };

  return (
    <div className="container my-5">
      {loading && "Loading your favourite drinks..."}
      <input
        type="search"
        className="form-control"
        onKeyUp={handleSearch}
        placeholder="Search for a Cocktail..."
      />
      <div className="drinks mt-5">
        {drinks &&
          drinks.map((drink) => (
            <div key={drink.idDrink} className="card">
              <img
                src={drink.strDrinkThumb}
                className="card-img-top"
                alt={drink.strDrink}
              />
              <div className="card-body">
                <h5 className="card-title">{drink.strDrink}</h5>
                <p className="card-text">
                  {drink.strInstructions.substring(0, 100)}...
                </p>
                <Link
                  to={`/drink/ingredients/${drink.idDrink}`}
                  className="btn btn-primary"
                >
                  Ingredients
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

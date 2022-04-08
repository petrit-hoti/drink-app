import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Cocktail() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { letter } = useParams();

  console.log(useParams());

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((resp) => {
        setDrinks(resp.data.drinks);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container drinks my-5">
      {loading && "Loading your favourite drinks..."}
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
  );
}

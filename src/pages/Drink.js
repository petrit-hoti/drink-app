import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Drink() {
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => {
        setDrink(resp.data.drinks[0]);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const addToFavourites = (e) => {
    const drinks =
      localStorage.getItem("drinks") !== null
        ? JSON.parse(localStorage.getItem("drinks"))
        : [];
    localStorage.setItem("drinks", JSON.stringify([...drinks, drink]));
    alert("Drink was added to your favourite list");
  };

  return (
    <div>
      {loading && "Please wait..."}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <figure>
              <img
                src={drink.strDrinkThumb}
                className="card-img-top"
                alt={drink.strDrink}
              />
              <figcaption>{drink.strDrink}</figcaption>
            </figure>
          </div>
          <div className="col-md-6 offset-md-1">
            <h2>{drink.strDrink}</h2>
            <h3 className="mt-3">Ingredients</h3>
            <div className="ingredients">
              <div className="card p-2 mb-1">
                <span>{drink.strIngredient1}</span>
                <span>{drink.strMeasure1}</span>
              </div>
              <div className="card p-2 mb-1">
                <span>{drink.strIngredient2}</span>
                <span>{drink.strMeasure2}</span>
              </div>
              <div className="card p-2 mb-1">
                <span>{drink.strIngredient3}</span>
                <span>{drink.strMeasure3}</span>
              </div>
              <div className="card p-2 mb-1">
                <span>{drink.strIngredient4}</span>
                <span>{drink.strMeasure4}</span>
              </div>
            </div>
            <h3 className="mt-3">Instructions</h3>
            <p className="my-2">{drink.strInstructions}</p>
            <button
              className="btn btn-sm btn-primary mt-4"
              data-target={drink.idDrink}
              onClick={addToFavourites}
            >
              Add to favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

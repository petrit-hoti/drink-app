import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getFavouritesFromLocalStorage = () => {
  return localStorage.getItem("drinks") !== null
    ? JSON.parse(localStorage.getItem("drinks"))
    : [];
};

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFavourites(getFavouritesFromLocalStorage());
    setLoading(false);
  }, []);

  const deleteFromFavourites = (e) => {
    const drink_id = e.target.getAttribute("data-target");
    const filtered_favourites = favourites.filter(
      (drink) => drink.idDrink !== drink_id
    );
    setFavourites(filtered_favourites);
    localStorage.setItem("drinks", JSON.stringify(filtered_favourites));
  };

  return (
    <div className="container">
      <div className="drinks mt-5 text-center">
        {favourites.length
          ? favourites.map((drink) => (
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
                    className="btn btn-sm btn-primary"
                  >
                    Ingredients
                  </Link>
                  <button
                    className="btn btn-sm btn-danger mx-2"
                    onClick={deleteFromFavourites}
                    data-target={drink.idDrink}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          : "Your favourite list is empty"}
      </div>
    </div>
  );
}

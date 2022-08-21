import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../FoodCard.css";

const DisplayAllFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/food")
      .then((res) => {
        console.log(res.data);
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          {foods.map((food) => (
            <div className="preview-card" key={food._id}>
              <div className="preview-card__wrp">
                <div className="preview-card__item">
                  <div className="preview-card__img">
                  <img src={food.imgPath} alt={food.name} />
                  </div>
                  <div className="preview-card__content">
                    <span className="preview-card__code">20 September 2022</span>
                    <div className="preview-card__title">{food.name}</div>
                    <div className="preview-card__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae voluptate repellendus magni illo ea animi?
                    </div>
                    <Link to={`/edit/${food._id}`} className="preview-card__button">Edit Order</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayAllFood;

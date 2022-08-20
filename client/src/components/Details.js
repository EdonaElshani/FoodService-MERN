import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "../form.css"

const Details = () => {
  const [food, setFood] = useState([]);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [imgPath, setImgPath] = useState('');
  const [price, setPrice] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/food/${id}`)
      .then((res) => {
        console.log("RES DATA", res.data);
        setName(res.data.name);
        setCategory(res.data.category);
        setDescription(res.data.description)
        setQuantity(res.data.quantity)
        setCalories(res.data.calories)
        setImgPath(res.data.imgPath)
        setPrice(res.data.price)
        // console.log(res.data.name)
        setFood(res.data);
      })
      .catch((err) => console.log('GET FOOD BY ID ERROR', err));
  }, []);

  const deleteFood = (id) => {
    axios
      .delete(`http://localhost:8000/api/food/${id}`)
      .then((res) => {
        console.log(res.data);
        // setFood(food.filter((food, index) => food._id !== id));
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    // <div>
    //   <h2>{name}</h2>
    //   <p>Category: {category}</p>
    //   <img src={imgPath} alt={name} />
    //   <p>Description: {description}</p>
    //   <p>Calories: {calories}</p>
    //   <p>Quantity: {quantity}</p>
    //   <p>Price: {price}</p>
    //   <button onClick={() => deleteFood(id) }>Order</button>
    // </div>
    <body>
    <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Registration Info</h2>
                    <form method="POST">
                        <div class="input-group">
                            <input class="input--style-2" type="text" placeholder="Name" name="name">
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-2 js-datepicker" type="text" placeholder="Birthdate" name="birthday">
                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <select name="gender">
                                            <option disabled="disabled" selected="selected">Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                                <select name="class">
                                    <option disabled="disabled" selected="selected">Class</option>
                                    <option>Class 1</option>
                                    <option>Class 2</option>
                                    <option>Class 3</option>
                                </select>
                                <div class="select-dropdown"></div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-2" type="text" placeholder="Registration Code" name="res_code">
                                </div>
                            </div>
                        </div>
                        <div class="p-t-30">
                            <button class="btn btn--radius btn--green" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
  )
}

export default Details
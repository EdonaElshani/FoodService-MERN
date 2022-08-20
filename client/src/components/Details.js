import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

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
  }, [id]);

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
    <div>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <img src={imgPath} alt={name} />
      <p>Description: {description}</p>
      <p>Calories: {calories}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <button onClick={() => deleteFood(id) }>Order</button>
    </div>
  )
}

export default Details
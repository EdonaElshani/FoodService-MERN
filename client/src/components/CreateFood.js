import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateFood = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [imgPath, setImgPath] = useState('');
  const [price, setPrice] = useState(0);
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/food', {
        name,
        category,
        description,
        quantity,
        calories,
        price,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => console.log("Error", err ));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Category</label>
      <select value={category} name="category" onChange={(e) => setCategory(e.target.value)}>
        <option>Select a Category</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>
      <label>Description</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Quantity</label>
      <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <label>Calories</label>
      <input type="text" value={calories} onChange={(e) => setCalories(e.target.value)} />
      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button>Add Food</button>
    </form>
  )
}

export default CreateFood;

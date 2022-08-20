import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import {FaPencilAlt} from "react-icons/fa"
// import './EditPet.css';

const EditPet = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [calories, setCalories] = useState('');
    const [imgPath, setImgPath] = useState('');
    const [price, setPrice] = useState(0);
    // const [errors, setErrors] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/food/${id}`)
          .then((res) => {
            setName(res.data.name);
            setCategory(res.data.category);
            setDescription(res.data.description)
            setQuantity(res.data.quantity)
            setCalories(res.data.calories)
            setImgPath(res.data.imgPath)
            setPrice(res.data.price)
          })
          .catch((err) =>{
            
        // console.log(err.response.data.errors.name.message);
       
          });
      }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/food/${id}`, {
        name,
        category,
        description,
        quantity,
        calories,
        price,
      })
      .then((res) => {
        navigate('/');
      })
      .catch((err) =>{
        console.log("ERROR", err.response.data.message)
      });
    }
  return (
    <div>
        <div className='header'>
            <h1>Food</h1>
        </div>
        <h3>Edit {name}</h3>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form1' >

            <label htmlFor='name'>Food Name:</label>
            <input type='text' id='name' value={name} onChange={ e => setName(e.target.value)} />
           
            <label htmlFor='category'>Food Category:</label>
            <input type='text' id='category' value={category} onChange={ e => setCategory(e.target.value)} />
           
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' value={description} onChange={ e => setDescription(e.target.value)} />

            <label htmlFor='quantity'>Quantity:</label>
            <input type='text' id='quantity' value={quantity} onChange={ e => setQuantity(e.target.value)} />

            <label htmlFor='calories'>Calories:</label>
            <input type='text' id='calories' value={calories} onChange={ e => setCalories(e.target.value)} />

            <label htmlFor='price'>Price:</label>
            <input type='number' id='price' value={price} onChange={ e => setPrice(e.target.value)} />
            <button>Update Movie</button>
          </div>
        </form>
    </div>
  )
}

export default EditPet
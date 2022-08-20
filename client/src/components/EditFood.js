import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../form.css"
// import {FaPencilAlt} from "react-icons/fa"
// import './EditPet.css';

const EditFood = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [calories, setCalories] = useState('');
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

        {/* <h3 classNameName="font-robo " >Edit {name}</h3>
        <form classNameName=' row'  onSubmit={handleSubmit}>
          <div classNameName='form1 row-space' >

            <label htmlFor='name' classNameName="col-2">Name:</label>
            <input type='text' id='name' value={name} onChange={ e => setName(e.target.value)} />
           
            <label htmlFor='category'>Food Category:</label>
            <input type='text' id='category' value={category} onChange={ e => setCategory(e.target.value)} />
           
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' value={description} onChange={ e => setDescription(e.target.value)} />

            <label htmlFor='quantity' >Quantity:</label>
            <input type='text' id='quantity' value={quantity} onChange={ e => setQuantity(e.target.value)} />

            <label htmlFor='calories' >Calories:</label>
            <input type='text' id='calories'  value={calories} onChange={ e => setCalories(e.target.value)} />

            <label htmlFor='price'>Price:</label>
            <input type='number' id='price' value={price} onChange={ e => setPrice(e.target.value)} />
            <button>Update Movie</button>
          </div>
        </form> */}
        <body>
    <div className="container page-wrapper bg-red p-t-180 p-b-100 mt-4 font-robo">
        <div className="wrapper wrapper--w960">
            <div className="card card-2">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Edit Order</h2>
                      <form method="POST" onSubmit={handleSubmit}>

                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Name" name="name" value={name} onChange={ e => setName(e.target.value)}/>
                        </div>

                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <div className="rs-select2 js-select-simple select--no-search">
                                        <select name="category"  value={category} onChange={ e => setCategory(e.target.value)}>
                                            <option disabled="disabled" selected="selected">Category</option>
                                            <option>Breakfast</option>
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                            <option>Dessert</option>
                                            <option>Vegetarian</option>
                                            <option>Vegan</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Description" name="description" value={description} onChange={ e => setDescription(e.target.value)}/>
                        </div>

                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Quantity" name="quantity" value={quantity} onChange={ e => setQuantity(e.target.value)}/>
                        </div>

                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Calories" name="calories" value={calories} onChange={ e => setCalories(e.target.value)}/>
                        </div>

                        <div className="input-group">
                            <input className="input--style-2" type="number" placeholder="Price" name="price" value={price} onChange={ e => setPrice(e.target.value)}/>
                        </div>

                        <div className="p-t-30">
                            <button className="btn btn--green btn--green:hover" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default EditFood
import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "../detailStyle.css"


const Details = () => {
  const [food, setFood] = useState({});

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
      {/* <h2>{name}</h2>
      <p>Category: {category}</p>
      <img src={imgPath} alt={name} />
      <p>Description: {description}</p>
      <p>Calories: {calories}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <button onClick={() => deleteFood(id) }>Order</button> */}
<body>
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
            <div className="card">
                <div className="card-body">
                    <h2 className="title">Order Details</h2>
                    <form>
                        <div className="row row-space">
                                <div className="col-2">


                                <div className="input-group">
                                <img src={imgPath} alt={name} />
                                </div>

                                <div className='details'>

                                <div className="input-group">
                                    <h2>{name}</h2>
                                </div>

                                
                                <div className="input-group">
                                    <p>Category: {category}</p>
                                </div>


                                <div className="input-group">
                                <p>Description: {description}</p>
                                </div>

                                <div className="input-group">
                                <p>Calories: {calories}</p>
                                </div>

                                <div className="input-group">
                                <p>Quantity: {quantity}</p>
                                </div>


                                <div className="input-group">
                                 <p>Price: {price}</p>
                                </div>

                                </ div>

                            </div>                     
                        </div>
                        <div className="p-t-30">
                            <button className="btn btn--radius btn--green" type="submit"
                            onClick={() => deleteFood(id) }>Order</button>
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

export default Details
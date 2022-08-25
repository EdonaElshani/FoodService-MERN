import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/food')
      .then((res) => {
        console.log(res.data);
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteFood = (id) => {
    axios
      .delete(`http://localhost:8000/api/food/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      {foods.map((food) => {
        return (
          <div key={food._id} className="card">
          <h2>{food.name}</h2>
          <img style={{width: "30px"}}  src={food.imgPath} alt={food.name} />
          <br />
          <Link to={`/details/${food._id}`}>Details</Link>
          <span> | </span>
          <Link to={`/edit/${food._id}`}>Update</Link>
          <span> | </span>
          <br />
          <button className="btn btn--radius btn--green" type="submit"
                            onClick={() => deleteFood(id) }>Order</button>
                            <h1>JSJSJSJ</h1>
        </div>
       
       )
      })}
    </div>
  )
}

export default DisplayAll
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

  return (
    <div className='container'>
      {foods.map((food) => (
        <div key={food._id} className="card">
          <h2>{food.name}</h2>
          <img src={food.imgPath} alt={food.name} />
          <br />
          <Link to={`/details/${food._id}`}>Details</Link>
          <span> | </span>
          <Link to={`/edit/${food._id}`}>Update</Link>
          <br />
        </div>
      ))}
    </div>
  )
}

export default DisplayAll
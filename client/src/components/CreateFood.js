import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateFood = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState("");
  
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
        navigate('/allFood');
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div>
    <body>
        <div className="container page-wrapper bg-red p-t-180 p-b-100 mt-4 font-robo">
          <div className="wrapper wrapper--w960">
            <div className="card card-2">
              <div className="card-heading"></div>
              <div className="card-body">
                <h2 className="title">Add Order</h2>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      className="input--style-2"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name ? (
                      <p className="text-danger fw-bold">
                        {errors.name.message}*
                      </p>
                    ) : null}
                  </div>

                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <select
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option disabled="disabled" selected="selected">
                              Category
                            </option>
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
                    <input
                      className="input--style-2"
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                       {errors.description ? (
                      <p className="text-danger fw-bold">
                        {errors.description.message}*
                      </p>
                    ) : null}
                  </div>

                  <div className="input-group">
                    <input
                      className="input--style-2"
                      type="number"
                      placeholder="Quantity"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                         {errors.quantity ? (
                      <p className="text-danger fw-bold">
                        {errors.quantity.message}*
                      </p>
                    ) : null}
                  </div>

                  <div className="input-group">
                    <input
                      className="input--style-2"
                      type="text"
                      placeholder="Calories"
                      name="calories"
                      value={calories}
                      onChange={(e) => setCalories(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <input
                      className="input--style-2"
                      type="number"
                      placeholder="Price"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                       {errors.price ? (
                      <p className="text-danger fw-bold">
                        {errors.price.message}*
                      </p>
                    ) : null}
                  </div>

                  <div className="p-t-30">
                    <button
                      className="btn btn--green btn--green:hover"
                      type="submit"
                    >
                      Create
                    </button>
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

export default CreateFood;

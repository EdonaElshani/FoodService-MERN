import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CreateFood = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calories, setCalories] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const onSubmitHandler = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8000/api/food",
      {
        name,
        category,
        description,
        quantity,
        calories,
        imgPath,
        price,
      })
      .then((response) => {
          console.log(response.data);
          navigate("/");
      }).catch((err) => {
          console.log(err);
          setErrors(err.response.data.errors);
      })
  };

  return (
    <Container>
    <Row>
        <Col lg={6} className="mx-auto my-2 text-start">
            <h1>Edit Food</h1>
        </Col>
    </Row>
    <Row>
        <Col lg={9} className="mx-auto my-2 text-start">
            <h3 className="my-2">Edit {name}</h3>
        </Col>
    </Row>
    
    <Col lg={9} className="mx-auto my-3">
    <Form className="bg-white rounded-3 p-3 text-light d-flex justify-content-center border" onSubmit={onSubmitHandler}>
        <Col lg={6} className="mx-auto">
            <Col lg={9}>
        <Form.Group className="my-2 py-2 text-start" controlId="formName">
            <Form.Label className="text-dark fs-4">Name</Form.Label>
            <Form.Control 
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                />
            {errors.name ? <span>{errors.name.message}</span> : null}
        </Form.Group>
        </Col>
        <Col lg={9}>
        <Form.Group className="my-2 py-2 text-start" controlId="formCategory">
            <Form.Label className="text-dark fs-4">Category</Form.Label>
            <Form.Control 
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                value={category}
            />
            {errors.category ? <span>{errors.category.message}</span> : null}
        </Form.Group>
        </Col>
        <Col lg={9} >
        <Form.Group className="my-2 py-2 text-start" controlId="formDescription">
            <Form.Label className="text-dark fs-4">Description</Form.Label>
            <Form.Control 
                type="textarea"
                style={{height: '4rem'}}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                value={description}
            />
            {errors.description ? <span>{errors.description.message}</span> : null}
        </Form.Group>
        </Col>
        <Col lg={9} >
        <Form.Group className="my-2 py-2 text-start" controlId="formQuantity">
            <Form.Label className="text-dark fs-4">Quantity</Form.Label>
            <Form.Control 
                type="textarea"
                style={{height: '4rem'}}
                onChange={(e) => setQuantity(e.target.value)}
                name="quantity"
                value={quantity}
            />
            {errors.quantity ? <span>{errors.quantity.message}</span> : null}
        </Form.Group>
        </Col>
        <Col lg={9} >
        <Form.Group className="my-2 py-2 text-start" controlId="formCalories">
            <Form.Label className="text-dark fs-4">Calories</Form.Label>
            <Form.Control 
                type="textarea"
                style={{height: '4rem'}}
                onChange={(e) => setCalories(e.target.value)}
                name="calories"
                value={calories}
            />
            {errors.calories ? <span>{errors.calories.message}</span> : null}
        </Form.Group>
        </Col>
        <Col lg={9} >
        <Form.Group className="my-2 py-2 text-start" controlId="formImgPath">
            <Form.Label className="text-dark fs-4">Image</Form.Label>
            <Form.Control 
                type="file"
                style={{height: '4rem'}}
                onChange={(e) => setImgPath(e.target.value)}
                name="imgPath"
                value={imgPath}
            />
            {errors.imgPath ? <span>{errors.imgPath.message}</span> : null}
        </Form.Group>
        </Col>
        <Col lg={9} >
        <Form.Group className="my-2 py-2 text-start" controlId="formPrice">
            <Form.Label className="text-dark fs-4">Price</Form.Label>
            <Form.Control 
                type="file"
                style={{height: '4rem'}}
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                value={price}
            />
            {errors.price ? <span>{errors.price.message}</span> : null}
        </Form.Group>
        </Col>
        <Button type="submit">Edit Food</Button>
            </Col>
    </Form>
    </Col>
</Container>
  )
}

export default CreateFood
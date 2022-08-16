import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
        <div className="alert alert-danger my-4">
        <h5>"This order does not exist in our menu"</h5>
        <br></br>
      <Link to="/new">Click here to add an order</Link>
      </div>
    </div>
  )
}

export default NotFound
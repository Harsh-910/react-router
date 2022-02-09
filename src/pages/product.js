import { Link } from "react-router-dom";

const product = () => {
  return (
    <>
      <h1>product Page</h1>
      <ul>
        <Link to="/products/p1">
          <li>product 1</li>
        </Link>
        <Link to="/products/p2">
          <li>product 2</li>
        </Link>
        <Link to="/products/p3">
          <li>product 3</li>
        </Link>
      </ul>
    </>
  );
};

export default product;

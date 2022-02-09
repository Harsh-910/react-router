import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <h5>{params.product_id}</h5>
    </>
  );
};

export default ProductDetails;

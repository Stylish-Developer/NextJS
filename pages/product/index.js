/* const ProductsPage = () => {
  return (
    <>
      <h3>Products:</h3>
      <p>Product 1</p>
      <p>Product 2</p>
      <p>Product 3</p>
      <p>Product 4</p>
      <p>Product 5</p>
    </>
  );
};

export default ProductsPage;
 */

import Link from "next/link";

const ProductsPage = ({ productId = 10 }) => {
  return (
    <>
      <Link href={"/"}>
        <p>Go to home</p>
      </Link>
      <h3>Products:</h3>
      <Link href="/product/1">
        <p>Product 1</p>
      </Link>
      <Link href="/product/2">
        <p>Product 2</p>
      </Link>
      <Link href="/product/3">
        <p>Product 3</p>
      </Link>
      <Link href="/product/4">
        <p>Product 4</p>
      </Link>
      <Link href="/product/5" replace>
        <p>Product 5</p>
      </Link>
    </>
  );
};

export default ProductsPage;

import { useRouter } from "next/router";

const ProductDetailPage = () => {
  const router = useRouter();

  const { productid, reviewid } = router.query;

  // console.log(router);

  return (
    <>
      <h3>Product Detail:</h3>
      <p>
        review id: {reviewid} for product id: {productid}{" "}
      </p>
    </>
  );
};

export default ProductDetailPage;

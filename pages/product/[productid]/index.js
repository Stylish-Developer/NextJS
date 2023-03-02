import { useRouter } from "next/router";

const ProductDetailPage = () => {

  const router = useRouter();

  // console.log(router);

  const handleNavigate = () => {
    console.log("your order is placed!");
    router.push('/product');
    // router.replace('/product');  this is same as this <Link href="/product/5" replace>
  };



  const productId = router.query.productid;

 

  return (
    <>
      <h3>Product Detail:</h3>
      <p>product id: {productId} </p>
      <div>
        <button type="button" onClick={handleNavigate}>
          place order
        </button>
      </div>
    </>
  );
};

export default ProductDetailPage;

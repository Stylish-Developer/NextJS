import { useRouter } from "next/router";

const FeaturePage = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  // console.log(params);

  if (params.length === 2) {
    return (
      <h3>
        nested path1 {params[0]} / nested path2 {params[1]}{" "}
      </h3>
    );
  } else if (params.length === 1) {
    return <h3>nested path1 {params[0]} </h3>;
  } else {
    return (
      <>
        <h3>Feature page -nested path1 {params[0]} / nested path2 {params[1]} / nested path 3 {params[2]}</h3>
      </>
    );
  }
};

export default FeaturePage;

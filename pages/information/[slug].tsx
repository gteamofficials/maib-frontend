import { useRouter } from "next/router";

const Information = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Post: {slug}</p>;
};

export default Information;

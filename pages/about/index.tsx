import Link from "next/link";
import { Button } from "../../components";
import AboutServices from "../../services/abouts";
import { AboutType } from "../../types/response";

const About = ({abouts}: {abouts: AboutType[]}) => {
  return (
    <div>
      <h1>Halaman About</h1>
      <Link href={`/about/create`}>About Create</Link>
      <p>Using Button Component</p>
      <Button />
    </div>
  );
};

export async function getStaticProps() {
  const res = await AboutServices.GetAll()
  const abouts: AboutType[] = res

  return {
    props: {
      abouts,
    },
  }
}

export default About;

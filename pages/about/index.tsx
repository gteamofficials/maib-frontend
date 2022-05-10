import Link from "next/link";
import { Button } from "../../components";

const About = () => {
  return (
    <div>
      <h1>Halaman About</h1>
      <Link href={`/about/create`}>About Create</Link>
      <p>Using Button Component</p>
      <Button />
    </div>
  );
};

export default About;

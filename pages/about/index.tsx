import Link from "next/link";
import { Button } from "../../components";
import Image from "next/image";
import AboutServices from "../../services/abouts";
import { AboutType } from "../../types/response";
import styles from "../../styles/about.module.scss";

const About = ({ abouts }: { abouts: AboutType[] }) => {
  console.log(abouts);
  
  const data = new Map(abouts.map(about => [about.attributes.category, about.attributes]))
  console.log(data);

  return (
    <div>
      <div className={styles.visionSection}>
        <h1>{abouts[0].attributes.title}</h1>
        <section>
          <p>{abouts[0].attributes.description}</p>
          {abouts[0].attributes.images.data.map((image)=>(
            <Image src={process.env.baseUrl+image.attributes.url} width={100} height={100}/>
          ))
          }

        </section>
      </div>

      <div className={styles.missionSection}>
        <h1>{abouts[1].attributes.title}</h1>
        <section>
          <p>{abouts[1].attributes.description}</p>
          {abouts[1].attributes.images.data.map((image)=>(
            <Image src={process.env.baseUrl+image.attributes.url} width={100} height={100}/>
          ))
          }
          
        </section>
      </div>
      
      <div className={styles.historySection}>
        <h1>{abouts[1].attributes.title}</h1>
        <section>
          <p>{abouts[1].attributes.description}</p>
          {abouts[1].attributes.images.data.map((image)=>(
            <Image src={process.env.baseUrl+image.attributes.url} width={100} height={100}/>
          ))
          }
          
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await AboutServices.GetAll();
  const abouts: AboutType[] = res;

  return {
    props: {
      abouts,
    },
  };
}

export default About;

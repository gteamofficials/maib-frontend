import Link from "next/link";
import { Button } from "../../components";
import Image from "next/image";
import AboutServices from "../../services/abouts";
import { AboutType } from "../../types/response";
import styles from "../../styles/about.module.scss";

interface MapAbout {
  [key: string]: AboutType[];
}

const About = ({ abouts }: { abouts: AboutType[] }) => {
  let data: MapAbout = {};
  abouts.forEach((about) => {
    if (!(about.attributes.category in data)) {
      data[about.attributes.category] = [];
    }
    data[about.attributes.category].push(about);
  });
  // console.log(data["visi"]);

  return (
    <div>
      <div className={styles.visionSection}>
        <h1>{data["visi"][0].attributes.title}</h1>
        <section>
          <p>{data["visi"][0].attributes.description}</p>
          {data["visi"][0].attributes.images.data.map((image) => (
            <Image
              src={process.env.baseUrl + image.attributes.url}
              width={100}
              height={100}
              key={image.attributes.name}
            />
          ))}
        </section>
      </div>

      {/* <div className={styles.missionSection}>
        <h1>{abouts[1].attributes.title}</h1>
        <section>
          <p>{abouts[1].attributes.description}</p>
          {abouts[1].attributes.images.data.map((image) => (
            <Image
              src={process.env.baseUrl + image.attributes.url}
              width={100}
              height={100}
            />
          ))}
        </section>
      </div>

      <div className={styles.historySection}>
        <section>
          <h1>{abouts[2].attributes.title}</h1>
        </section>

        <section></section>
      </div> */}
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

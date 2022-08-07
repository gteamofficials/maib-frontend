import Link from "next/link";
import { Button } from "../../components";
import Image from "next/image";
import AboutServices from "../../services/abouts";
import { AboutType } from "../../types/response";
import styles from "../../styles/about.module.scss";

const About = ({ abouts }: { abouts: AboutType[] }) => {
  
  const vision = abouts.filter(e=>e.attributes.category=='visi');
  const mission = abouts.filter(e=>e.attributes.category=='misi');
  const histories = abouts.filter(e=>e.attributes.category=='sejarah'); 

  return (
    <div className={styles.about}>

      <section className={styles.vision}>
        <div className={styles.container}>
          <h1 className={styles.vision__title}>{vision[0].attributes.title}</h1>
          <div className={styles.vision__body}>
            <p className={styles.vision__body__description}>{vision[0].attributes.description}</p>
            <div className={styles.vision__body__images}>
              <span className={styles.vision__body__images__first}>
                <Image src={vision[0].attributes.images.data[0].attributes.url} layout={`fill`} />
              </span>
              <span className={styles.vision__body__images__second}>
                <Image src={vision[0].attributes.images.data[1].attributes.url} layout={`fill`} />
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.mission}>
        <div className={styles.container}>
          <h1 className={styles.mission__title}>{mission[0].attributes.title}</h1>
          <div className={styles.mission__body}>
            <div className={styles.mission__body__images}>
              <span className={styles.mission__body__images__first}>
                <Image src={mission[0].attributes.images.data[0].attributes.url} layout={`fill`} />
              </span>
              <span className={styles.mission__body__images__second}>
                <Image src={mission[0].attributes.images.data[1].attributes.url} layout={`fill`} />
              </span>
            </div>
            <p className={styles.mission__body__description}>{mission[0].attributes.description}</p>
          </div>
        </div>
      </section>


      <section className={styles.history}>
          <div className={styles.history__title}>
              <h1>{histories[0].attributes.title}</h1>
          </div>
          <div className={styles.history__content}>
          {histories.map((history,i)=>
            <div>
              <Image
                src={history.attributes.images.data[0].attributes.url}
                width={100}
                height={100}
                key={i}
                />
              <p>{history.attributes.description}</p>
            </div>
          )}
        </div>
      </section>
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

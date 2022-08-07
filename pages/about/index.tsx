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
  console.log(vision[0]);

  return (
    <div className={styles.about}>
      <section className={styles.vision}>
        <div className={styles.container}>
          <h1 className={styles.vision__title}>{vision[0].attributes.title}</h1>
          <div className={styles.vision__content}>
            <p className={styles.vision__content__description}>{vision[0].attributes.description}</p>
            <div className={styles.vision__content__images}>
              {vision[0].attributes.images.data.map((image,i) => (
                <div className="images__wrapper">
                    <Image
                    src={image.attributes.url}
                    width={100}
                    height={100}
                    key={image.attributes.name}  
                    />
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.mission__images}>
            {mission[0].attributes.images.data.map((image,i) => (
              <Image
                src={image.attributes.url}
                width={100}
                height={100}
                key={i}
              />
            ))}
          </div>
          <div className={styles.mission__content}>
            <h1 className={styles.mission__content__title}>{mission[0].attributes.title}</h1>
            <p className={styles.mission__content__description}>{mission[0].attributes.description}</p>
          </div>
        </div>
      </section>


      <section className={styles.history}>
          <div className={styles.history__title}>
              <h1>{histories[0].attributes.title}</h1>
          </div>
          <div className={styles.history__content}>
          {histories.map(history=>
            <div>
              <Image
                src={history.attributes.images.data[0].attributes.url}
                width={100}
                height={100}
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

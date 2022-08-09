import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import InformationServices from "../../services/informations";
import { InformationType } from "../../types/response";
import styles from "../../styles/info.module.scss";
import ContentTitle from "../../components/ContentTitle";
import InfoCardRecent from "../../components/InfoCardRecent";

const Information = ({recent}: {recent: InformationType[]}) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <ContentTitle active={true}>{mapSlug[String(slug)]}</ContentTitle>
      </section>
      <section className={styles.recent}>
        <div className={styles.recentCards}>
          {/* {recent.map(rec => (
            <InfoCardRecent date={rec.attributes.date} title={rec.attributes.title} href={}></InfoCardRecent>
          ))} */}
        </div>
      </section>
    </main>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface mapSlug {
  [slug: string]: string
}

const mapSlug: mapSlug = {
  'news': 'Berita',
  'article': 'Artikel'
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ['news', 'article']
  const paths = arr.map((slug) => {
      return {
          params: { slug },
      }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const recent: InformationType[] = await InformationServices.GetAll({
    type: mapSlug[slug],
  })

  return {
    props: {
      recent
    }
  }
}

export default Information;

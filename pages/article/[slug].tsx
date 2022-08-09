import Image from "next/image";
import InformationServices from "../../services/informations";
import { InformationType } from "../../types/response";
import styles from "../../styles/article.module.scss";
import ContentTitle from "../../components/ContentTitle";
import InfoCardRecent from "../../components/InfoCardRecent";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";

const Article = ({
  articles,
  allArticles,
}: {
  articles: InformationType;
  allArticles: InformationType[];
}) => {
  const date = new Date(articles.attributes.date);
  const dateId = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <section className={styles.section1}>
        <Image
          src={articles.attributes.coverImage.data.attributes.url}
          layout="fill"
        ></Image>
      </section>
      <div className={styles.detailArticle}>
        <section className={styles.section2}>
          <div className={styles.left}>
            <h1 className={styles.title}>{articles.attributes.title}</h1>
            <h3 className={styles.date}>{dateId}</h3>
            <p className={styles.content}>{articles.attributes.description}</p>
          </div>
          <div className={styles.right}></div>
        </section>
        <section className={styles.section3}>
          <ContentTitle active>Artikel Terkini</ContentTitle>
          <div className={styles.artikelTerkini}>
            {allArticles.map((article) => (
              <InfoCardRecent
                media={{
                  src: article.attributes.coverImage.data.attributes.url,
                  alt: article.attributes.coverImage.data.attributes
                    .alternativeText,
                }}
                title={article.attributes.title}
                date={new Date(article.attributes.date).toLocaleDateString(
                  "id-ID",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
                href={`/article/${article.attributes.slug}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

interface AParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: InformationType[] = await InformationServices.GetAll({});
  const paths = arr.map((slug) => {
    return {
      params: { slug: slug.attributes.slug },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as AParams;

  const articles: InformationType[] = await InformationServices.GetBySlug(slug);
  const allArticles: InformationType[] = await InformationServices.GetAll({
    type: "Artikel",
    limit: "6",
  });

  return {
    props: {
      articles,
      allArticles,
    },
  };
};

export default Article;

import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import InformationServices from "../../services/informations";
import { DetailPage } from "../../templates";
import { InformationType } from "../../types/response";

const News = ({
  news,
  allNews,
}: {
  news: InformationType;
  allNews: InformationType[];
}) => {
  return (
    <DetailPage information={news} allInformations={allNews} type="news" />
  );
};

interface NParams extends ParsedUrlQuery {
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
  const { slug } = context.params as NParams;

  const news: InformationType[] = await InformationServices.GetBySlug(slug);
  const allNews: InformationType[] = await InformationServices.GetAll({
    type: "Berita",
    limit: "6",
  });

  return {
    props: {
      news,
      allNews,
    },
  };
};

export default News;

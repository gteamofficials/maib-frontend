import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useMount } from "react-use";
import { useAppContext } from "../../Layouts/Default";
import InformationServices from "../../services/informations";
import { DetailPage } from "../../templates";
import { InformationType } from "../../types/response";

const Article = ({
  articles,
  allArticles,
}: {
  articles: InformationType;
  allArticles: InformationType[];
}) => {
  const appCtx = useAppContext();

  useMount(() => {
    appCtx?.setActiveNav("information");
  });

  return (
    <DetailPage
      information={articles}
      allInformations={allArticles}
      type="article"
    />
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

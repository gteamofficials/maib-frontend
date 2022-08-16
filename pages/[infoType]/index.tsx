import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import InformationServices from "../../services/informations";
import { CategoryType, InformationType } from "../../types/response";
import styles from "../../styles/info.module.scss";
import ContentTitle from "../../components/ContentTitle";
import { CardPropsMedia } from "../../types/components";
import {
  AdditionalInfoCard,
  CategoryInfoCard,
  HeadTitle,
  MainInfoCard,
  SecondaryInfoCard,
} from "../../components";
import { Tab } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import CategoryServices from "../../services/categories";
import { useMount } from "react-use";
import { useNavigationContext } from "../../action/navigation";
import Link from "next/link";

const Information = ({
  infos,
  categories,
}: {
  infos: InformationType[];
  categories: CategoryType[];
}) => {
  const router = useRouter();
  const { infoType } = router.query;
  const [category, setCategory] = useState<string>("semua");
  const [infoCategories, setInfoCategories] =
    useState<InformationType[]>(infos);
  const listCategory = ["semua"];

  categories.forEach((cat) => {
    listCategory.push(cat.attributes.category);
  });

  const [_, dispatch] = useNavigationContext();
  useMount(() => {
    dispatch("information");
  });

  useEffect(() => {
    if (category !== "semua") {
      setInfoCategories(
        infos.filter(
          (v) => v.attributes.category.data.attributes.category == category
        )
      );
    } else {
      setInfoCategories(infos);
    }
  }, [category, infos]);

  const recent: InformationType[] = infos
    .filter((_, i) => i <= 3)
    .map((rec) => rec);

  const recentMedia: CardPropsMedia[] = recent.map((rec) => ({
    src: rec.attributes.coverImage.data.attributes.url,
    alt: rec.attributes.coverImage.data.attributes.alternativeText,
  }));

  const categoryMedia: CardPropsMedia[] = infoCategories.map((rec) => ({
    src: rec.attributes.coverImage.data.attributes.url,
    alt: rec.attributes.coverImage.data.attributes.alternativeText,
  }));

  return (
    <>
      <HeadTitle>{mapSlug[String(infoType)]}</HeadTitle>
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <ContentTitle active={true}>
              {mapSlug[String(infoType)]}
            </ContentTitle>
          </div>
        </section>
        <section className={styles.recent}>
          <div className={styles.recentMainCards}>
            {recent.length == 4 ? (
              <>
                <MainInfoCard
                  date={new Date(recent[0].attributes.date).toLocaleDateString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                  title={recent[0].attributes.title}
                  href={`/${
                    mapSlug[String(infoType)] === "Artikel" ? "article" : "news"
                  }/${recent[0].attributes.slug}`}
                  media={recentMedia[0]}
                ></MainInfoCard>
                <div className={styles.recentSecondCards}>
                  <SecondaryInfoCard
                    date={new Date(
                      recent[1].attributes.date
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    title={recent[1].attributes.title}
                    href={`/${
                      mapSlug[String(infoType)] === "Artikel"
                        ? "article"
                        : "news"
                    }/${recent[1].attributes.slug}`}
                    media={recentMedia[1]}
                  ></SecondaryInfoCard>
                  <div className={styles.recentAdditionalCards}>
                    <AdditionalInfoCard
                      date={new Date(
                        recent[2].attributes.date
                      ).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      title={recent[2].attributes.title}
                      href={`/${
                        mapSlug[String(infoType)] === "Artikel"
                          ? "article"
                          : "news"
                      }/${recent[2].attributes.slug}`}
                      media={recentMedia[2]}
                    ></AdditionalInfoCard>
                    <AdditionalInfoCard
                      date={new Date(
                        recent[3].attributes.date
                      ).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      title={recent[3].attributes.title}
                      href={`/${
                        mapSlug[String(infoType)] === "Artikel"
                          ? "article"
                          : "news"
                      }/${recent[3].attributes.slug}`}
                      media={recentMedia[3]}
                    ></AdditionalInfoCard>
                  </div>
                </div>
              </>
            ) : recent.length == 3 ? (
              <>
                <MainInfoCard
                  date={new Date(recent[0].attributes.date).toLocaleDateString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                  title={recent[0].attributes.title}
                  href={`/${
                    mapSlug[String(infoType)] === "Artikel" ? "article" : "news"
                  }/${recent[0].attributes.slug}`}
                  media={recentMedia[0]}
                ></MainInfoCard>
                <div className={styles.recentSecondCards}>
                  <SecondaryInfoCard
                    date={new Date(
                      recent[1].attributes.date
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    title={recent[1].attributes.title}
                    href={`/${
                      mapSlug[String(infoType)] === "Artikel"
                        ? "article"
                        : "news"
                    }/${recent[1].attributes.slug}`}
                    media={recentMedia[1]}
                  ></SecondaryInfoCard>
                  <SecondaryInfoCard
                    date={new Date(
                      recent[2].attributes.date
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    title={recent[2].attributes.title}
                    href={`/${
                      mapSlug[String(infoType)] === "Artikel"
                        ? "article"
                        : "news"
                    }/${recent[2].attributes.slug}`}
                    media={recentMedia[2]}
                  ></SecondaryInfoCard>
                </div>
              </>
            ) : recent.length == 2 ? (
              <>
                <MainInfoCard
                  date={new Date(recent[0].attributes.date).toLocaleDateString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                  title={recent[0].attributes.title}
                  href={`/${
                    mapSlug[String(infoType)] === "Artikel" ? "article" : "news"
                  }/${recent[0].attributes.slug}`}
                  media={recentMedia[0]}
                ></MainInfoCard>
                <MainInfoCard
                  date={new Date(recent[1].attributes.date).toLocaleDateString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                  title={recent[1].attributes.title}
                  href={`/${
                    mapSlug[String(infoType)] === "Artikel" ? "article" : "news"
                  }/${recent[1].attributes.slug}`}
                  media={recentMedia[1]}
                ></MainInfoCard>
              </>
            ) : (
              recent.length == 1 && (
                <>
                  <MainInfoCard
                    date={new Date(
                      recent[0].attributes.date
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    title={recent[0].attributes.title}
                    href={`/${
                      mapSlug[String(infoType)] === "Artikel"
                        ? "article"
                        : "news"
                    }/${recent[0].attributes.slug}`}
                    media={recentMedia[0]}
                  ></MainInfoCard>
                  <div className={styles.recentSecondCards}>
                    <SecondaryInfoCard
                      date={new Date(
                        recent[1].attributes.date
                      ).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      title={recent[1].attributes.title}
                      href={`/${
                        mapSlug[String(infoType)] === "Artikel"
                          ? "article"
                          : "news"
                      }/${recent[1].attributes.slug}`}
                      media={recentMedia[1]}
                    ></SecondaryInfoCard>
                    <div className={styles.recentAdditionalCards}>
                      <AdditionalInfoCard
                        date={new Date(
                          recent[2].attributes.date
                        ).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        title={recent[2].attributes.title}
                        href={`/${
                          mapSlug[String(infoType)] === "Artikel"
                            ? "article"
                            : "news"
                        }/${recent[2].attributes.slug}`}
                        media={recentMedia[2]}
                      ></AdditionalInfoCard>
                      <AdditionalInfoCard
                        date={new Date(
                          recent[3].attributes.date
                        ).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        title={recent[3].attributes.title}
                        href={`/${
                          mapSlug[String(infoType)] === "Artikel"
                            ? "article"
                            : "news"
                        }/${recent[3].attributes.slug}`}
                        media={recentMedia[3]}
                      ></AdditionalInfoCard>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </section>
        <section className={styles.list}>
          <div className={styles.listContent}>
            <div className={styles.category}>
              <Tab.Group as="div">
                <Tab.Group as="div" className={styles.listCategory}>
                  <Tab className={styles.heading}>Kategori</Tab>
                  <Tab.List className={styles.categoryTab}>
                    {[...listCategory].map((v, i) => (
                      <Tab as={Fragment} key={i}>
                        {({ selected }) => {
                          if (selected) setCategory(v);

                          return (
                            <button
                              className={cn(styles.label, {
                                [styles.selected]: selected,
                              })}
                            >
                              {v.charAt(0).toUpperCase() + v.slice(1)}
                            </button>
                          );
                        }}
                      </Tab>
                    ))}
                  </Tab.List>
                </Tab.Group>
              </Tab.Group>
              <div className={styles.categoryContent}>
                {infoCategories.length > 0 && (
                  <CategoryInfoCard
                    date={new Date(
                      infoCategories[0].attributes.date
                    ).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    title={infoCategories[0].attributes.title}
                    body={infoCategories[0].attributes.description}
                    media={categoryMedia[0]}
                    href={`/${
                      mapSlug[String(infoType)] === "Artikel"
                        ? "article"
                        : "news"
                    }/${infoCategories[0].attributes.slug}`}
                  />
                )}
                <div className={styles.listInfoCategories}>
                  {infoCategories
                    .filter((_, i) => i > 0)
                    .map((info, index) => (
                      <Link
                        key={index}
                        href={`/${
                          mapSlug[String(infoType)] === "Artikel"
                            ? "article"
                            : "news"
                        }/${info.attributes.slug}`}
                        passHref
                      >
                        <a>
                          <article className={styles.addCatInfoCard}>
                            <div className={styles.addCatInfo}>
                              <span className={styles.mediaAddCatInfo}>
                                <Image
                                  src={
                                    info.attributes.coverImage.data.attributes
                                      .url
                                  }
                                  alt={
                                    info.attributes.coverImage.data.attributes
                                      .alternativeText
                                  }
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </span>
                            </div>

                            <div className={styles.contentCatInfo}>
                              <h5 className={styles.headerCatInfo}>
                                {info.attributes.title}
                              </h5>
                              <time className={styles.dateCatInfo}>
                                {new Date(
                                  info.attributes.date
                                ).toLocaleDateString("id-ID", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </time>
                            </div>
                          </article>
                        </a>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.others}>
              <div className={styles.othersHeader}>
                <h3 className={styles.othersHeaderText}>
                  Baca Artikel Lainnya
                </h3>
              </div>
              <div className={styles.othersContent}>
                {infos
                  .filter((_, i) => i > 3)
                  .map((info, index) => (
                    <article className={styles.othersCard} key={index}>
                      <div className={styles.contentOthersInfo}>
                        <h5 className={styles.headerOthersInfo}>
                          {info.attributes.title}
                        </h5>
                        <p className={styles.catOthersInfo}>
                          {info.attributes.category.data.attributes.category}
                        </p>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  infoType: string;
}

interface mapSlug {
  [slug: string]: string;
}

const mapSlug: mapSlug = {
  news: "Berita",
  article: "Artikel",
};

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ["news", "article"];
  const paths = arr.map((infoType) => {
    return {
      params: { infoType },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { infoType } = context.params as IParams;

  const infos: InformationType[] = await InformationServices.GetAll({
    type: mapSlug[String(infoType)],
  });

  const categories: CategoryType[] = await CategoryServices.GetAll({});

  return {
    props: {
      infos,
      categories,
    },
  };
};

export default Information;

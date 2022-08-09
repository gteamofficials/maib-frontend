import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import InformationServices from "../../services/informations";
import { InformationType } from "../../types/response";
import styles from "../../styles/info.module.scss";
import ContentTitle from "../../components/ContentTitle";
import { CardPropsMedia } from "../../types/components";
import { AdditionalInfoCard, CategoryInfoCard, MainInfoCard, SecondaryInfoCard } from "../../components";
import { Tab } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import cn from "classnames";
import Image from "next/image";

const Information = ({infos}: {infos: InformationType[]}) => {
  const router = useRouter();
  const { infoType } = router.query;
  const [category, setCategory] = useState<string | undefined>()
  const [infoCategories, setInfoCategories] = useState<InformationType[]>([])

  useEffect(() => {
    InformationServices.GetAll({type: mapSlug[String(infoType)], category: category})
      .then(res => {
        setInfoCategories(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [category])

  const recent: InformationType[] = infos.filter((_, i) => i <= 3).map(rec => rec)
  
  const recentMedia: CardPropsMedia[] = recent.map(rec => (
    {
      src: rec.attributes.coverImage.data.attributes.url,
      alt: rec.attributes.coverImage.data.attributes.alternativeText
    }
  ))

  const categoryMedia: CardPropsMedia[] = infoCategories.map(rec => (
    {
      src: rec.attributes.coverImage.data.attributes.url,
      alt: rec.attributes.coverImage.data.attributes.alternativeText
    }
  ))

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <ContentTitle active={true}>{mapSlug[String(infoType)]}</ContentTitle>
        </div>
      </section>
      <section className={styles.recent}>
        <div className={styles.recentMainCards}>
          <MainInfoCard 
            date={recent[0].attributes.date} 
            title={recent[0].attributes.title} 
            href={`/information/${recent[0].attributes.slug}`} 
            media={recentMedia[0]}></MainInfoCard>
          <div className={styles.recentSecondCards}>
            <SecondaryInfoCard 
              date={recent[1].attributes.date} 
              title={recent[1].attributes.title} 
              href={`/information/${recent[1].attributes.slug}`} 
              media={recentMedia[1]}></SecondaryInfoCard>
            <div className={styles.recentAdditionalCards}>
              <AdditionalInfoCard 
                date={recent[2].attributes.date} 
                title={recent[2].attributes.title} 
                href={`/information/${recent[2].attributes.slug}`} 
                media={recentMedia[2]}></AdditionalInfoCard>
              <AdditionalInfoCard 
                date={recent[3].attributes.date} 
                title={recent[3].attributes.title} 
                href={`/information/${recent[3].attributes.slug}`} 
                media={recentMedia[3]}></AdditionalInfoCard>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.list}>
        <div className={styles.listContent}>
          <div className={styles.category}>
            <Tab.Group as="div">
              <Tab.List className={styles.categoryTab}>
                <Tab className={styles.heading}>Kategori</Tab>
                {[...Array(10)].map((_, i) => (
                  <Tab as={Fragment} key={i}>
                    {({ selected }) => (
                      <button
                        className={cn(styles.label, {
                          [styles.selected]: selected,
                        })}
                      >
                        Tab {i}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              {/* <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
              </Tab.Panels> */}
            </Tab.Group>
            <div className={styles.categoryContent}>
              {infoCategories.length > 0 &&
                <CategoryInfoCard 
                  date={infoCategories[0].attributes.date} 
                  title={infoCategories[0].attributes.title} 
                  body={infoCategories[0].attributes.description} 
                  media={categoryMedia[0]} 
                  href={`/information/${infoCategories[0].attributes.slug}`} />
              }
              <div className={styles.listInfoCategories}>
                {infoCategories.filter((_, i) => i > 0).map(info => (
                  <article className={styles.addCatInfoCard}>
                    <div className={styles.addCatInfo}>
                      <span className={styles.mediaAddCatInfo}>
                        <Image
                          src={info.attributes.coverImage.data.attributes.url}
                          alt={info.attributes.coverImage.data.attributes.alternativeText}
                          layout="fill"
                          objectFit="cover"
                        />
                      </span>
                    </div>
                    <div className={styles.contentCatInfo}>
                      <h5 className={styles.headerCatInfo}>{info.attributes.title}</h5>
                      <time className={styles.dateCatInfo}>{info.attributes.date}</time>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.others}>
            <div className={styles.othersHeader}></div>
            <div className={styles.othersContent}>
              {infos.filter((_, i) => i > 3).map(info => (
                <article className={styles.othersCard}>
                  <div className={styles.contentOthersInfo}>
                    <h5 className={styles.headerOthersInfo}>{info.attributes.title}</h5>
                    <p className={styles.catOthersInfo}>{info.attributes.category.data.attributes.category}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

interface IParams extends ParsedUrlQuery {
  infoType: string
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
  const paths = arr.map((infoType) => {
      return {
          params: { infoType },
      }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { infoType } = context.params as IParams

  const infos: InformationType[] = await InformationServices.GetAll({
    type: mapSlug[String(infoType)],
  })

  return {
    props: {
      infos
    }
  }
}

export default Information;

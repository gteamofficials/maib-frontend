import InformationServices from "../../services/informations";
import { AboutType, InformationType } from "../../types/response";
import styles from "../../styles/info.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import cn from "classnames";

const Info = ({ infos }: { infos: InformationType[] }) => {
  return (
    <>
      <h2>Heading</h2>
      <section className={styles.recent}>Cards</section>
      <section className={styles.list}>
        <Tab.Group as="div">
          <Tab.List className={styles.category}>
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
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div>Artikel Lainnya</div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const mapType = {
  //     "article": "Artikel",
  //     "news": "Berita",
  // }
  const res = await InformationServices.GetAll({
    type: params?.infoType!.toString(),
  });
  const infos: InformationType[] = res;

  return {
    props: {
      infos,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { infoType: "article" } },
      { params: { infoType: "news" } },
    ],
    fallback: false,
  };
};

export default Info;

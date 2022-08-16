import Head from "next/head";

const HeadTitle = ({ children }: { children: string }) => {
  return (
    <Head>
      <title>{`${children} | Masjid Al-Ikhlas`}</title>
    </Head>
  );
};

export default HeadTitle;

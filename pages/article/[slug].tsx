import Image from "next/image";
import { InformationType } from "../../types/response";
import styles from "../../styles/article.module.scss";
import ContentTitle from "../../components/ContentTitle";

const Article = ({ article }: { article: InformationType[] }) => {
  return (
    <div>
      <section className={styles.section1}>
        <Image src={"/article1.png"} layout="fill"></Image>
      </section>
      <section className={styles.section2}>
        <div className={styles.left}>
            <h1 className={styles.title}>TUNTUTAN AGAR MEMPERBAIKI SHOLAT LEBIH BAIK</h1>
            <h3 className={styles.date}>20 Mei 2022</h3>
            <p className={styles.content}>Sebagai ibadah yang wajib dikerjakan lima waktu dalam sehari, sholat merupakan bukti keimanan dan ketaatan seorang Muslim dalam menjalankan perintah Allah SWT. Sholat dianggap tidak sah apabila dikerjakan di luar waktu yang ditetapkan. Berikut keutamaan menjalankan sholat tepat waktu:

1. Allah lebih mencintai perbuatan sholat tepat waktu melebihi berbakti pada orang tua dan pergi berjihad

Dalam Hadist Riwayat Bukhari dan Muslim disebutkan bahwa “Amalan yang paling dicintai oleh Allah adalah sholat pada waktunya, berbakti kepada orang tua dan jihad di jalan Allah.” Dari hadist tersebut kita dapat mengetahui bahwa, melakukan ibadah sholat tepat pada waktu disebutkan terlebih dahulu jika dibandingkan dengan melakukan bakti pada orang tua dan jihad di jalan Allah. Hal ini membuktikan, bahwasanya Allah memang mencintai perbuatan sholat tepat waktu sebagai wujud cinta dari hamba-Nya kepada Tuhan yang telah menciptakan mereka. Karena ketika manusia sangat mencintai Tuhan-Nya, mereka akan terus mengingat dan mengutamakan panggilan dari Allah untuk beribadah dan serta merta mengesampingkan urusan-urusan lain di dunia.

2. Mendapatkan tempat di surga

Kecintaan Allah pada hamba-Nya yang sering melakukan sholat tepat waktu juga terbukti dengan janjinya untuk membalas mendapatkan ganjaran berupa surga. Diriwayatkan oleh Abu Daud dari Abu Qatadah bin Rib’iy mengabarkan kepadanya bahwa Rasulullah Shallallahu alaihi wasallam bersabda:

“Allah Ta’ala berfirman: “Sesungguhnya Aku mewajibkan umatmu sholat lima waktu, dan Aku berjanji bahwa barangsiapa yang menjaga waktu-waktunya pasti Aku akan memasukkannya ke dalam surga, dan barangsiapa yang tidak menjaganya maka dia tidak mendapatkan apa yang aku janjikan”.

Kebahagian berupa keindahan surga yang abadi di akhirat nanti. Telah disiapkan oleh Allah bagi hamba-hamba-nya yang senantiasa mengingat Allah dengan menyegerakan sholat di awal waktu. Sekali lagi, Allah tidak akan pernah mengingkari janji kepada hamba-hamba-Nya. Maka dari itu, menyegerakan sholat pada awal waktu adalah salah satu cara bagi kita sebagai hamba-Nya untuk mendapatkan balasan berupa surga.

3. Diampuni dosa-dosanya seperti daun yang berguguran

“Sesungguhnya seorang hamba yang muslim, jika menunaikan sholat dengan ikhlas karena Allah, maka dosa-dosanya akan berguguran seperti gugurnya daun-daun ini dari pohonnya” (HR. Ahmad).

Hadits di atas merupakan suatu bukti bahwa Allah akan mengampuni dosa-dosa hamba-Nya saat ikhlas melaksanakan sholat tepat waktu. Bagaimana Allah begitu mencintai orang yang mengesampingkan urusan-urusannya di dunia yang fana ini. Demi menghadap Tuhan-Nya di waktu yang terbaik yakni di awal waktu atau saat adzan pertama kali dikumandangkan.

4. Pahala kebaikan yang amat besar

Pada hadits lainnya juga disebutkan bahwa pahala melaksanakan sholat tepat waktu amatlah besar. Jika saja umat manusia mengetahui pahala yang diterima sangatlah besar. Niscaya mereka akan rela berlomba-lomba melaksanakannya sekalipun harus jalan merangkak dan diundi. Dari Abu Hurairah ra. bahwa Rasulullah SAW pernah bersabda: “…Seandainya orang-orang mengetahui pahala adzan dan barisan sholat (shaf) pertama, lalu mereka tidak akan memperolehnya kecuali dengan ikut undian, niscaya mereka akan berundi. Dan seandainya mereka mengetahui pahala menyegerakan sholat pada awal waktu, niscaya mereka akan berlomba-lomba melaksanakannya. Dan seandainya mereka mengetahui pahala sholat Isyak dan Subuh, niscaya mereka akan mendatanginya meskipun dengan jalan merangkak.” (HR. Bukhari)</p>
        </div>
        <div className={styles.right}>
            
        </div>
      </section>
      <section className={styles.section3}>
        <ContentTitle active>Artikel Terkini</ContentTitle>
        <div className={styles.artikelTerkini}>
          
        </div>
      </section>
    </div>
  );
};

export default Article;
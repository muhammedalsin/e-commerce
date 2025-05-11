import Image from "next/image";
import LiderImage from "../../../public/lider-bilgisayar.png";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.title}>
          <span className={styles.lider}>Lider</span>{" "}
          <span className={styles.biligi}>Bilgisayar</span>
        </h1>
        <p className={styles.desc}>
          Teknolojiye ve elektronik ürünlere tutkuyla bağlı bir ekibiz.
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            🖥️ Monitörler ve oyuncu aksesuarları
          </div>
          <div className={styles.serviceItem}>
            🖨️ Yazıcılar ve çevre birimleri
          </div>
          <div className={styles.serviceItem}>
            📱 Akıllı cihazlar ve çeşitli teknolojik ürünler
          </div>
        </div>
      </div>
      <div>
        <Image src={LiderImage} alt="cloud" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;

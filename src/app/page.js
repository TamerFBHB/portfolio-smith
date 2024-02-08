import Image from "next/image";
import styles from "./page.module.scss";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.inform}>
        <h1>HI,I'm Alex Smith</h1>
        <h2>Photographer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati et quibusdam. Eum ea consectetur, aperiam explicabo a omnis, odio excepturi sint iusto quia vitae. Voluptates, natus. Accusantium harum nobis, laudantium nam praesentium voluptatem pariatur porro suscipit iure, dolor amet?</p>
        <div className={styles.media}>
            <FaFacebookF className={styles.icon}/>
            <FaInstagramSquare className={styles.icon}/>
            <FaXTwitter className={styles.icon}/>
        </div>
        <div className={styles.btns}>
          <button className={styles.btn1}>Download C.V</button>
          <button className={styles.btn2}>let's talk</button>
        </div>
      </div>
      
      <div className={styles.avatar}>
          <Image src="/Untitled.png" alt="avatar" loading="lazy" width={350} height={550} className={styles.img} />
        </div>
    </main>
  );
}

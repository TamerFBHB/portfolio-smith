import Image from 'next/image'
import styles from './About.module.scss'

export default function page() {
    return (
        <div className={styles.about}>
            <div className={styles.inform}>
                <h1>Together let's discover the world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati et quibusdam. Eum ea consectetur, aperiam explicabo a omnis, odio excepturi sint iusto quia vitae. Voluptates, natus. Accusantium harum nobis, laudantium nam praesentium voluptatem pariatur porro suscipit iure, dolor amet?</p>
        
            </div>
            <div className={styles.ContainerAvatar}>
                <div className={styles.avatar}>
                    <Image src="/Untitled.png" alt="avatar" loading="lazy" fill className={styles.img} />
                </div>
            </div>
        </div>
    )
};

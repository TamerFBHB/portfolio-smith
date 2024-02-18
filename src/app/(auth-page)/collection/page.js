'use client'
import Image from 'next/image'
import styles from './collection.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion"


export default function Collection() {

    // to build a search
    const [query, setquery] = useState("natural");
    //to post data from api
    const [post, setPost] = useState([]);
    //to apeare error message if the loading is not done
    const [error, setError] = useState(null)
    // api from pexels site
    const API_KEY = 'PL4T8tXL53kgKi55zaurZpImX5s1UC0AyzFTqnoGXmuAI0wJvHxVOs13'
    // to change the layout 
    const [change, setChange] = useState(0)

    const getPhotos = async () => {

        try {
            const data = await axios.get(`https://api.pexels.com/v1/search?query=${query}&page=3&per_page=40 `,
                {
                    headers: {
                        Authorization: API_KEY,
                    },
                    next: {
                        revalidate: 120,
                    }
                }
            );
            setPost(data.data.photos);
        } catch (error) {
            setError('i canot Fetch Data ....')
        }
    }
    useEffect(() => {
        getPhotos();
    }, [])

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            getPhotos();
        }
    };

    return (
        <div className={styles.containerMain} >
            <div className={styles.containerInput} >
                <input
                    className={styles.inputSearch}
                    onKeyDown={onKeyDownHandler}
                    placeholder='Search for free photos'
                    onChange={(e) => setquery(e.target.value)}
                    value={query}
                />
                <div className={styles.butns}>
                    <button className={styles.btn2} onClick={() => setChange(1)} >Grid</button>
                    <button className={styles.btn2} onClick={() => setChange(0)} >normal</button>
                </div>
            </div>
            <div className={styles.main} >
                <div className={change === 1 ? styles.gallery : styles.containerImage}>
                    {error == null ? (post.map((item) => {
                        return (
                            <AnimatePresence>
                                <Link href={item.src.original} target='_blank' className={styles.btn1} >
                                    <motion.div
                                        layout
                                        transition={{ type: "spring", damping: 8, stiffness: 50 }}
                                        className={styles.boxImage} key={item}>
                                        <Image src={item.src.large} alt="Brown Rocks During Golden Hour"
                                            width={280} height={item.height / item.width * 280}
                                            className={styles.img} loading="lazy" />
                                    </motion.div>
                                </Link>

                            </AnimatePresence>
                        )
                    })) : <h1>{error}</h1>}
                </div>

            </div>
        </div >
    )
};
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); // تحديد مجلد الوجهة

// app.post('/upload', upload.single('file'), (req, res) => {
//   // القيام بالمعالجة اللازمة للملف المرفوع هنا
// });
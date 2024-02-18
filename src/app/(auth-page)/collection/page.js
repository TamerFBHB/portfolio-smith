'use client'
import Image from 'next/image'
import styles from './collection.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';


export default function Collection() {

    // to build a search
    const [query, setquery] = useState("natural");
    //to post data from api
    const [post, setPost] = useState([]);
    //to apeare error message if the loading is not done
    const [error, setError] = useState(null)
    // api from pexels site
    const API_KEY = 'PL4T8tXL53kgKi55zaurZpImX5s1UC0AyzFTqnoGXmuAI0wJvHxVOs13'

    const [change , setChange] = useState(0)

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
                <button className={styles.btn2} onClick={() => setChange(1)} >Grid</button>
                <button className={styles.btn2} onClick={() => setChange(0)} >normal</button>
            </div>
            <div className={styles.main} >

                <div className={change===1 ? styles.gallery : styles.containerImage}>
                    {error == null ? (post.map((item) => {
                        return (

                            <Link href={item.src.original} target='_blank' className={styles.btn1} >
                                <div className={styles.boxImage } key={item}>
                                    <Image src={item.src.large} alt="Brown Rocks During Golden Hour"
                                        width={280} height={item.height / item.width * 280}
                                        className={styles.img} loading="lazy" />
                                    {/* <Link href={item.src.original} className={styles.btn1}>Download</Link>
                                        <p>{item.photographer}</p> */}
                                </div>
                            </Link>
                        )
                    })) : <h1>{error}</h1>}
                </div>

            </div>
        </div >
    )
};

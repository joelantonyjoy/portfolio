import styles from "./Blogs.module.css"
export function Blog(){
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.blog}>
                    <p className={styles.blog__name}>
                        How to center anything with CSS !
                    </p>
                    <p className={styles.blog_publishedDate}>12 September 2021</p>
                    <p className={styles.blog_readTime}>3 min read</p>
                    <p className={styles.blog__tags}>TAGS : <span>HTML</span> , <span>CSS</span> , <span>Frontend</span></p>
                </div>

                <div className={styles.blog}>
                    <p className={styles.blog__name}>
                        How to center anything with CSS !
                    </p>
                    <p className={styles.blog_publishedDate}>12 September 2021</p>
                    <p className={styles.blog_readTime}>3 min read</p>
                    <p className={styles.blog__tags}>TAGS : <span>HTML</span> , <span>CSS</span> , <span>Frontend</span></p>
                </div>

                <div className={styles.blog}>
                    <p className={styles.blog__name}>
                        How to center anything with CSS !
                    </p>
                    <p className={styles.blog_publishedDate}>12 September 2021</p>
                    <p className={styles.blog_readTime}>3 min read</p>
                    <p className={styles.blog__tags}>TAGS : <span>HTML</span> , <span>CSS</span> , <span>Frontend</span></p>
                </div>

                <div className={styles.blog}>
                    <p className={styles.blog__name}>
                        How to center anything with CSS !
                    </p>
                    <p className={styles.blog_publishedDate}>12 September 2021</p>
                    <p className={styles.blog_readTime}>3 min read</p>
                    <p className={styles.blog__tags}>TAGS : <span>HTML</span> , <span>CSS</span> , <span>Frontend</span></p>
                </div>
            </div>
        </div>
    );
}
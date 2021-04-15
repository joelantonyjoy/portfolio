import styles from "./Blogs.module.css"
import blogs from './BlogData'
export function Blog(){
    return (
        <div>
            <div className={styles.container}>
            {
                blogs.map(blog => {

                    return(
                        <div className={styles.blog}>
                            <p className={styles.blog__name}>
                                {blog.blogName}
                            </p>
                            <p className={styles.blog_publishedDate}>{blog.blogPublishedDate}</p>
                            <p className={styles.blog_readTime}>{blog.blogReadTime}</p>
                            <p className={styles.blog__tags}>TAGS : {blog.blogTags.map(tag=>{return(<span>{tag} </span>)})}</p>
                        </div>)
                        })
            }
            </div>
        </div>
    );
}
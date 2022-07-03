import React from 'react'
import styles from "./index.module.css";

export default function YoutubeTags() {

    const tags = [
        "All",
        "Mixes",
        "Music",
        "Scene",
        "Wev Development",
        "JavaScript",
        "SSC CGL",
        "Comedies",
        "Jash Talks",
        "Thoughts",
        "Civil Services Exams",
        "Computers",
        "Tally Solutions",
        "K.G.F. Chapter 1",
        "NoCopyrightSounds",
        "Test drives",
        "Gadgets",
        "T-Series",
        "Recently uploaded"
    ]

    return (
        <div className={styles.navBar}>
            {tags.map((tag, index) => {

                if (index === 0) {
                    return <h1 key={index} className={styles.text}>{tag}</h1>;
                }

                // if (index === 3) {
                //     return <h1 key={index} style={{color:"red"}} className={styles.text}>{tag}</h1>;
                // }

                return <p key={index} className={styles.text}>{tag}</p>

            })}
        </div>
    )
}

import React from 'react'
import styles from "./index.module.css";
import Video from '../Video';
import YoutubeTags from '../YoutubeTags';
import SideHeader from '../SideHeader';

export default function Main() {

    return (
        <main>
            <SideHeader />
            <div className={styles.mainRight}>
                {/* Youtube Filter Tags */}
                <YoutubeTags />
                {/* rendering Video component */}
                <Video />
            </div>
        </main>
    )
}

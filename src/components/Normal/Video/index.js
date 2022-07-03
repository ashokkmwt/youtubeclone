import React, { useEffect } from 'react'
import styles from "./index.module.css";
// import axios from 'axios';
// import { API_KEY } from '../../../utils/helper';
import useStore from '../../../State';
import { useNavigate } from 'react-router-dom';

export default function Video() {

    const { videos, setCurrentVideo } = useStore(state => state);


    // const videos = [
    //     {
    //         img: typingImg,
    //         title: "increase typing speed in 30 days",
    //         channel: "RBE",
    //         views: "150k views",
    //         uploadtime: "2 month ago"
    //     },
    //     {
    //         img: typingImg,
    //         title: "C language Tutorial",
    //         channel: "Apna College",
    //         views: "2.8M views",
    //         uploadtime: "3 month ago"
    //     }
    // ]


    //  Function definition
    // const fetchVideos = () => {
    //     axios({
    //         method: "GET",
    //         url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${API_KEY}`
    //     }).then((response) => {
    //         console.log("Videos aa gayi backend se", JSON.stringify(response));

    //         _fetchVideo(response.data.items);

    //     }).catch((error) => {

    //         console.log("ERROR aa gaya", error);
    //     })
    // }

    const navigation = useNavigate();
    const watchVideo = (video) => {
        setCurrentVideo(video);
        navigation(`/watch/${video.id}`)           // remember it -- this is the way to send a parameter (one page to another page) by navigation.
    }

    useEffect(() => {
        // fetchVideos(); // functionn calling
    }, [])

    return (
        <div className={styles.mainContainer} >
            {videos.map((video, index) => {
                return (
                    <div onClick={() => watchVideo(video)} key={index} className={styles.videoBox}>
                        {/* remember onclick method */}
                        <div className={styles.videoThumbnails}>
                            <img src={video.snippet.thumbnails.high.url} alt="thumbnail" />
                        </div>
                        <div className={styles.titleContainer}>
                            <div className={styles.videologoContainer}>
                                <div className={styles.videoLogo}>
                                    <img src={video.snippet.thumbnails.high.url} alt="youtube logo" />
                                </div>
                            </div>
                            <div className={styles.videoDetail}>
                                <div>
                                    <p>{video.snippet.title}</p>
                                    <p>{video.channel}</p>
                                </div>
                                <div className={styles.performance}>
                                    <p>20K views .</p>
                                    <p>40 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

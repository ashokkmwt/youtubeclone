import React, { useEffect, useState } from 'react';
import styles from "./index.module.css";
import YoutubeTags from '../YoutubeTags';
import watchlaterIcon from "../../../assets/icons/watchLater-icon.svg";
import queueIcon from "../../../assets/icons/queue-icon.svg";
import useStore from '../../../State';
import axios from 'axios';
import { API_KEY } from '../../../utils/helper';
import { useParams } from 'react-router-dom';

export default function RcmdVideo() {


    const [errorScreen, setErrorScreen] = useState(false)
    const { id } = useParams();
    const { _fetchRcmdVideo, rcmdVideo, currentVideo } = useStore(state => state);
    console.log(_fetchRcmdVideo);


    const fetchRcmdVideo = () => {
        // alert("huaa kuch")
        axios({
            method: "GET",
            url: `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&type=video&relatedToVideoId=${id}`
            // url: `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&type=video&relatedToVideoId=&key=${API_KEY}`
        }).then((response) => {
            console.log("Videos aa gayi backend se", JSON.stringify(response));
            // console.log(response);

            // _fetchRcmdVideo(response.data.items);

        }).catch((error) => {

            // setErrorScreen(true);

            console.log("ERROR aa gaya", error);
        })
    }

    useEffect(() => {
        fetchRcmdVideo();
    }, [])


    // const recommendedVideos = [
    //     {
    //         title: "Title 1",
    //         description: "Description 1"
    //     },
    //     {
    //         title: "Title 2",
    //         description: "Description 2"
    //     }, {
    //         title: "Title 3",
    //         description: "Description 3"
    //     }, {
    //         title: "Title 4",
    //         description: "Description 4"
    //     }, {
    //         title: "Title 5",
    //         description: "Description 5"
    //     }, {
    //         title: "Title 6",
    //         description: "Description 6"
    //     }, {
    //         title: "Title 7",
    //         description: "Description 7"
    //     }
    // ];

    return (

        <div className={styles.recommendVideoContainer}>
                    <div className={styles.chatBar}>SHOW CHAT REPLAY</div>
                    <div className={styles.filterBar}>
                        <YoutubeTags />
                    </div>
                    {rcmdVideo.map((video, index) => {
                        return (
                            <div key={video} className={styles.recommendVideo}>
                                <div className={styles.rcmdThumbnail}>
                                    <div><img width={28} height={28} src={watchlaterIcon} alt="watchlater icon" /></div>
                                    <img className={styles.queueIcon} width={28} height={28} src={queueIcon} alt="queue icon" />
                                </div>
                                <div className={styles.rcmdTitleBar}>
                                    <h6>{video.title}</h6>
                                    <p>{video.description}</p>
                                    <div>
                                        <p>views</p>
                                        <p>upload time</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

        // <>
        //     {errorScreen ? <h1>Something went wrong please try after sometime</h1> :
        //         <div className={styles.recommendVideoContainer}>
        //             <div className={styles.chatBar}>SHOW CHAT REPLAY</div>
        //             <div className={styles.filterBar}>
        //                 <YoutubeTags />
        //             </div>
        //             {rcmdVideo.map((video, index) => {
        //                 return (
        //                     <div key={video} className={styles.recommendVideo}>
        //                         <div className={styles.rcmdThumbnail}>
        //                             <div><img width={28} height={28} src={watchlaterIcon} alt="watchlater icon" /></div>
        //                             <img className={styles.queueIcon} width={28} height={28} src={queueIcon} alt="queue icon" />
        //                         </div>
        //                         <div className={styles.rcmdTitleBar}>
        //                             <h6>{video.title}</h6>
        //                             <p>{video.description}</p>
        //                             <div>
        //                                 <p>views</p>
        //                                 <p>upload time</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 )
        //             })}
        //         </div>}
        // </>

    )
}

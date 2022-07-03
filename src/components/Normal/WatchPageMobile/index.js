import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../../State';
import styles from "./index.module.css";
import likeIcon from "../../../assets/icons/like-icon.svg";
import disLikeIcon from "../../../assets/icons/dislike-icon.svg";
import shareIcon from "../../../assets/icons/shr-icon.svg";
import clipIcon from "../../../assets/icons/c.svg";
import saveIcon from "../../../assets/icons/save-icon.svg";
import moreIcon from "../../../assets/icons/more-icon.svg";
import notificationIcon from "../../../assets/icons/notification-icon.svg";
import RcmdVideo from '../RcmdVideo';
import Comment from '../Comment';
import SideHeader from '../SideHeader';
// import { isCompositeComponent } from 'react-dom/test-utils';

export default function () {

    const likeBtnsIcon = [
        {
            img: likeIcon,
            text: "354k",
            alt: "like icon"
        },
        {
            img: disLikeIcon,
            text: "DISLIKE",
            alt: "dislike icon"
        },
        {
            img: shareIcon,
            text: "SHARE",
            alt: "share icon"
        },
        {
            img: clipIcon,
            text: "CLIP",
            alt: "clip icon"
        },
        {
            img: saveIcon,
            text: "SAVE",
            alt: "save icon"
        },
        {
            img: moreIcon,
            alt: "more icon"
        }
    ]

    const { id } = useParams();
    const { currentVideo, isSideBarVisible } = useStore(state => state);

    return (
        <>
            <div className={styles.currentVideoContainer}>
                <div className={styles.currentVideoLeft}>
                    <div className={styles.currentVideo}>
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        {/* to play any video -- play any youtube video. >share>embed>copy the link.>and paste here > change id using ${ } with `` */}
                    </div>
                    <div className={styles.titleContainer}>
                        <p>{currentVideo.snippet.title}</p><br /><br />
                        <div className={styles.likeBar}>
                            <p>7777777views. Premiered Mar 5, 2021</p>
                            <div className={styles.likeBtns}>
                                {likeBtnsIcon.map((icon, index) => {
                                    return (
                                        <div key={index} className={styles.iconDetail}>
                                            <img width={24} height={24} src={icon.img} />
                                            <p>{icon.text}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.channelContainer}>
                        <div className={styles.channelLogo}>
                            <img src={currentVideo.snippet.thumbnails.default.url} alt="thumbnail" />
                        </div>
                        <div className={styles.channelTitle}>
                            <h5>{currentVideo.snippet.channelTitle}</h5>
                            <p>{currentVideo.snippet.description}</p>
                            <span>SUBSCRIBED</span>
                            <img src={notificationIcon} alt="notification icon" />
                        </div>
                    </div>
                    <RcmdVideo />
                    <Comment />
                </div>
            </div>
        </>
    )
}



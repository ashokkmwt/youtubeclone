import React from 'react';
import useStore from '../../../State';
import styles from "./index.module.css";
import homeIcon from "../../../assets/icons/home-icon.svg";
import exploreIcon from "../../../assets/icons/explore-icon.svg";
import shortsIcon from "../../../assets/icons/shorts.svg";
import subscribeIcon from "../../../assets/icons/subscribe.svg";
import libraryIcon from "../../../assets/icons/library.svg";

export default function SideHeader() {

    const { toggleSideBar, isSideBarVisible } = useStore(state => state);

    const newLogos = [
        {
            img: homeIcon,
            text: "Home",
            alt: "home icon"
        },
        {
            img: exploreIcon,
            text: "Explore",
            alt: "explore icon"
        },
        {
            img: shortsIcon,
            text: "Shorts",
            alt: "shorts icon"
        },
        {
            img: subscribeIcon,
            text: "Subscriptions",
            alt: "subscribe icon"
        },
        {
            img: libraryIcon,
            text: "Library",
            alt: "library icon"
        },
        {
            img: libraryIcon,
            text: "History",
            alt: "history icon"
        },
        {
            img: libraryIcon,
            text: "Your videos",
            alt: "yourVideo icon"
        },
        {
            img: libraryIcon,
            text: "Watch later",
            alt: "watchLater icon"
        },
        {
            img: libraryIcon,
            text: "Liked videos",
            alt: "likedVideo icon"
        },
        {
            img: libraryIcon,
            text: "Show more",
            alt: "showMore icon"
        },
        {
            text: "SUBSCRIPTIONS"
        },
        {
            text: "MOREFROM YOUTYBE"
        },
        {
            img: libraryIcon,
            text: "YouTube Premium",
            alt: "premium icon"
        },
        {
            img: libraryIcon,
            text: "Movies",
            alt: "movies icon"
        },
        {
            img: libraryIcon,
            text: "Gaming",
            alt: "gaming icon"
        },
        {
            img: libraryIcon,
            text: "Live",
            alt: "live icon"
        },
        {
            img: libraryIcon,
            text: "Fashion & Beauty",
            alt: "fashion icon"
        },
        {
            img: libraryIcon,
            text: "Learning",
            alt: "learning icon"
        },
        {
            img: libraryIcon,
            text: "Sports",
            alt: "sports icon"
        },
        {
            img: libraryIcon,
            text: "Settings",
            alt: "setting icon"
        },
        {
            img: libraryIcon,
            text: "Report history",
            alt: "report icon"
        },
        {
            img: libraryIcon,
            text: "Help",
            alt: "help icon"
        },
        {
            img: libraryIcon,
            text: "Send feedback",
            alt: "feedback icon"
        }
        // {
        //     text: "About Press Copyright Contact us Creators Advertise Developers",
        // },
        // {
        //     text: "Terms Privact Policy & Safety How YouTube works Test new features",
        // }
    ];


    const logos = [
        {
            img: homeIcon,
            text: "Home",
            alt: "home icon"
        },
        {
            img: exploreIcon,
            text: "Explore",
            alt: "explore icon"
        },
        {
            img: shortsIcon,
            text: "Shorts",
            alt: "shorts icon"
        },
        {
            img: subscribeIcon,
            text: "Subscriptions",
            alt: "subscribe icon"
        },
        {
            img: libraryIcon,
            text: "Library",
            alt: "library icon"
        }
    ]

    return (


            <div onClick={toggleSideBar} className={styles.sideBarContainer}>
                {isSideBarVisible ?
                    newLogos.map((logo, index) => {
                        return (
                            <div style={{backgroundColor:"red !important"}} key={index} className={styles.newMainLeftIcon}>
                                <div className={styles.newHomeicon}>
                                    <img width={24} height={24} src={logo.img} alt={logo.alt} />
                                </div>
                                <p>{logo.text}</p>
                            </div>
                        )
                    }) : logos.map((logo, index) => {
                        return (
                            <div style={{backgroundColor:"red !important"}}  key={index} className={styles.mainLeftIcon}>
                                <div className={styles.homeicon}>
                                    <img width={24} height={24} src={logo.img} alt={logo.alt} />
                                </div>
                                <p>{logo.text}</p>
                            </div>
                        )
                    })
                }
            </div>

    )
}

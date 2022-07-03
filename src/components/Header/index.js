import React from 'react'
import styles from "./index.module.css"
import threelineLogo from "../../assets/icons/three-line.svg";
import ytlogo from "../../assets/icons/youtube-logo.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import micIcon from "../../assets/icons/mic-icon.svg";
import streamIcon from "../../assets/icons/stream-icon.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import notificationIcon from "../../assets/icons/notification-icon.svg";
import profileIcon from "../../assets/icons/profile-icon.jpg";
import useStore from '../../State';

export default function Header() {

    const { toggleSideBar } = useStore(state => state);

    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <div className={styles.threelinelogo}>
                        <img onClick={toggleSideBar} width={24} height={24} src={threelineLogo} alt="threeline logo" />
                    </div>
                    <div className={styles.ytlogo}>
                        <img width={100} height={100} src={ytlogo} alt="youtube logo" />
                    </div>
                    <p>IN</p>
                </div>
                <div className={styles.headerMiddle}>
                    <div className={styles.searchBar}>
                        <div className={styles.headerInput}>
                            <input type="search" placeholder='Search' />
                        </div>
                        <div className={styles.serchIcon}>
                            <img width={24} height={24} src={searchIcon} alt="search icon" />
                        </div>
                    </div>
                    <div className={styles.micContainer}>
                        <img width={24} height={24} src={micIcon} alt="mic icon" />
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.streameBox}>
                        <img width={24} height={24} src={streamIcon} alt="stream icon" />
                    </div>
                    <div className={styles.menuBox}>
                        <img width={24} height={24} src={menuIcon} alt="menu icon" />
                    </div>
                    <div className={styles.notificationBox}>
                        <img width={24} height={24} src={notificationIcon} alt="notification icon" />
                    </div>
                    <div className={styles.profileBox}>
                        <img width={24} height={24} src={profileIcon} alt="profile icon" />
                    </div>
                </div>
            </div>
        </header>
    )
}

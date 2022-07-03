import React, { useEffect } from 'react'
import styles from "./index.module.css";
import sortIcon from "../../../assets/icons/sort-icon.svg";
import profileIcon from "../../../assets/icons/profile-icon.jpg";
import useCommentsStore from '../../../State/comments';
// import { API_KEY } from '../../../utils/helper';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';


export default function Comments() {

  // const { id } = useParams();

  const { comments } = useCommentsStore(state => state);
  // console.log("yaha par dekho",comments);


  // const fetchComments = () => {
  //   axios({
  //     method: "GET",
  //     url: `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=90&videoId=${id}&key=${API_KEY}`
  //   }).then((response) => {
  //     _fetchComments(response.data.items);

  //   }).catch((error) => {

  //     console.log("ERROR aa gaya", error);
  //   })
  // }

  useEffect(() => {
    // fetchComments();
  }, [])


  return (
    <div className={styles.commentContainer}>
      <div className={styles.totalComment}>
        <p>{comments.length} Comments</p>
        {/* finding array length = arrayName.length */}
        <div>
          <img width={24} height={24} src={sortIcon} alt="sort icon" />
          <p>SORT BY</p>
        </div>
      </div>
      <div className={styles.mycomment}>
        <img src={profileIcon} alt="profile icon" />
        <input placeholder='Add a comment...' />
      </div>


      {/* .map always applies on array not on object or other data type */}
      {/* here I got error -- comments.map is not a function. look explanation in notion>coding>problems. */}

      {comments.map((comment, index) => {
        return (
          <div key={comment.id} className={styles.userComment}>
            <div className={styles.userLogo}>
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user logo" />
            </div>
            <div className={styles.commentBox}>
              <div>
                <h4>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                <h5> {comment.snippet.topLevelComment.snippet.publishedAt}</h5>
              </div>
              <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

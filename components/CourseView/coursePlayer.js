import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/modules/CoursePlayer.module.scss';
import PlyrComponent from '../Common/Plyr';
import testCourse from './testCourse.json';


export default () => {
  const [videoId, setVideoId] = useState("ZPt9dJw1Dbw");
  const [selectedItem, setSelectedItem] = useState("1");

  return (
    <div className={styles.CoursePlayer}>
      <h2>{testCourse.name}</h2>
      <div className={styles.PlayerGroup}>
        <PlyrComponent id="player" videoId={videoId}/>
        <div className={styles.playlistContainer}>
          <ul className={styles.playlist} style={{'color': '#ffffff'}}>
            {testCourse.items.map((item, i) => {
              return (
                <li
                  key={i+1}
                  onClick={() => {
                    setVideoId(item.videoId);
                    setSelectedItem(i+1);
                  }}
                  className={`${styles.playlistItem} ${selectedItem == i+1 ? styles.selected : ""}`}
                >
                  {`${i+1}. ${item.title}`}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

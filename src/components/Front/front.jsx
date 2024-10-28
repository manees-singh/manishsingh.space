import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './front.module.css';

export const Front = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Manish
            </h1>
            <p className={styles.description}>
                A Computer Engineering student at the University of Kansas. 
               
            </p>

            <a href="mailto:singmanish5208@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>

        <img 
        src={getImageUrl("front/profile.png")} 
        alt="profile" 
        className={styles.frontImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}
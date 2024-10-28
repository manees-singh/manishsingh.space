import React from 'react';
import { getImageUrl } from '../../utils';

import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id= "about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage1.png")} 
                alt="My image" 
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Undergraduate Research Assistant
                            </h3>
                            <p>
                                I am a programmer who creates more bugs than the code itself.
                            </p>
                        </div>
                    </li> */}
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" /> */}
                        <div className={styles.aboutItemText}>
                           
                            <p>
                                
                                A tech geek with experience in quantum computing research, AI-driven projects, and software development. 
                                I've built web applications, automated bots, and machine learning models, using diverse programming languages 
                                and frameworks. 
                                <br />
                                Besides, I love going on a hike and hit the pose as on the left picture.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}
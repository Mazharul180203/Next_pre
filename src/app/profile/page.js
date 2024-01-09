import React from 'react';
import styles from '../page.module.css'

const Page = () => {
    return (
        <div>
            <h1 className="global-text">My name is Profile</h1>
            <h1 className={styles.myText}>My name is Profile</h1>
        </div>
    );
};

export default Page;
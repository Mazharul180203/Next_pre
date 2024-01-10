import React from 'react';
import styles from '../page.module.css'
import Menu from "@/components/menu";

const Page = () => {
    return (
        <div>
            <h1 className="global-text">My name is Profile</h1>
            <h1 className={styles.myText}>My name is Profile</h1>

            <Menu/>
        </div>
    );
};

export default Page;
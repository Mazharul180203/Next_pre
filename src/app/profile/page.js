'use client'

import React from 'react';
import styles from '../page.module.css'
import Menu from "@/components/menu";

import {useRouter} from "next/navigation";

const Page = () => {

    const route = useRouter();
    const Goto = () =>{
        route.push('/pathdir?name=Mobile&&price=3000');
    }

    return (
        <div>
            <h1 className="global-text">My name is Profile</h1>
            <h1 className={styles.myText}>My name is Profile</h1>

            <Menu/>
            <br/>
            <button onClick={Goto}>Click Me</button>
        </div>
    );
};

export default Page;
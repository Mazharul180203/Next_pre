'use client'

import React, {useEffect, useState} from 'react';
import styles from './page.module.css'
const Page = () => {

    const [data, setData] = useState([])

    useEffect(() => {

       (async ()=>{

           let res = await fetch('http://localhost:3001/products')
           let json = await res.json()
           setData(json)

       })()

    }, []);

    return (
        <div>
            {/*<h1 className={styles.myText}>My name is home</h1>*/}
            {/*<img src="/image/Laptop.jpg" alt="image" width="900" height="600"/>*/}

            {data.map((item,index)=>{

                  return <div key={index}>
                      <h1>{item['id']}</h1>
                      <h1>{item['description']}</h1>
                  </div>
            })}

        </div>
    );
};

export default Page;




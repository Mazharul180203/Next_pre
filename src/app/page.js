'use client'

import React, {useEffect, useState} from 'react';
import styles from './page.module.css'
import Menu from "@/components/menu";
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


            {/*{data.map((item,index)=>{*/}

            {/*      return <div key={index}>*/}
            {/*          <h1>{item['id']}</h1>*/}
            {/*          <h1>{item['description']}</h1>*/}
            {/*      </div>*/}
            {/*})}*/}

            <Menu/>
        </div>
    );
};

export default Page;




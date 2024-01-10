'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Menu = () => {

    let currentPathName = usePathname();

    return (
        <div>

            <Link className={currentPathName === '/' ? 'active-link' : 'ending-link'} href={"/"} >Home</Link><br/>
            <Link className={currentPathName === '/pathdir' ? 'active-link' : 'ending-link'}
                  href={{pathname:"/pathdir",
                      query:{name:"sauarav", price: "200TK"}}} // very important
                  >Path Directory</Link><br/>
            <Link className={currentPathName === '/profile' ? 'active-link' : 'ending-link'} href={"/profile"} >Profile</Link><br/>
        </div>
    );
};

export default Menu;
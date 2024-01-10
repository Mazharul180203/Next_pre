'use client'

import React from 'react';
import Menu from "@/components/menu";
import {useSearchParams} from "next/navigation";

const Page = () => {

    const params = useSearchParams();

    return (
        <div>
            <Menu/>
            <h1>{params.get('name')}</h1>
        </div>
    );
};

export default Page;
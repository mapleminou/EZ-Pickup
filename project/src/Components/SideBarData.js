import React from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Browse',
        path: '/browse',
        icon: <FaShoppingCart />,
        cName: 'nav-text'
    },
]

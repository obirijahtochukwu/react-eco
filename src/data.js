import { FaCreditCard, FaBook, FaAddressBook,FaUser } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'phone accessories', icon: <FaCreditCard />, to: '/' },
      { label: 'sporting goods', icon: <FaCreditCard />, to: '/' },
      { label: 'shoes and canvas', icon: <FaCreditCard />, to: '/' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, to: '/products' },
      { label: 'libraries', icon: <FaBook />, to: '/products' },
      { label: 'help', icon: <FaBook />, to: '/cart' },
      { label: 'billing', icon: <FaBook />, to: '/cart' },
    ],
  },
  {
    page: 'login',
    links: [
      { label: 'sign in', icon: <FaUser />, to: '/signin' },
      { label: 'create account', icon: <FaAddressBook />, to: '/createaccount' },
    ],
  },
];


export default sublinks;

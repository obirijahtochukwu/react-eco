import { FaAngrycreative, FaAddressBook,FaUser, FaArtstation, FaBimobject, FaDocker, FaNeos, FaSkyatlas } from 'react-icons/fa';
import React from 'react';
export const sublinks = [
  {
    page: 'categories',
    links: [
      { label: 'Accessories', icon: <FaAngrycreative/> , to: '/accessories' },
      { label: 'anker store', icon: <FaArtstation/> , to: '/anker' },
      { label: 'brand festivals', icon: <FaBimobject />, to: '/brand' },
      { label: 'defacto store', icon: <FaDocker />, to: '/defacto' },
      { label: 'nike products', icon: <FaNeos />, to: '/nikeandaddidas' },
      { label: 'smartPhones', icon: <FaSkyatlas />, to: '/smartPhones' },
    ],
  },
  {
    page: 'account',
    links: [
      { label: 'sign in', icon: <FaUser />, to: '/signin' },
      { label: 'create account', icon: <FaAddressBook />, to: '/createaccount' },
    ],
  },
];

export const services = [
  {
    img: '../image/Official-Store_ICON_JBF21.png',
    title: 'brand festival deals'
  },
  {
    img: '../image/defacto.png',
    title: 'brand day'
  },
  {
    img: '../image/jumia-pay.png',
    title: 'borrow money'
  },
  {
    img: '../image/jumia-food.png',
    title: 'jumia food'
  },
  {
    img: '../image/millionaire-hunt.png',
    title: 'million hunt'
  },
  {
    img: '../image/flashsale.png',
    title: 'flash sale'
  },
  {
    img: '../image/three-for-fifty.png',
    title: '3 for 50'
  },
  {
    img: '../image/jumia-prime_v4.png',
    title: 'jumia prime'
  },
]

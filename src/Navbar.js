import React from 'react'
import {useState} from 'react';
import "./Navbar.css";


export default function Navbar() {

const [burger_class,setBurgerClass]=useState("burger-bar unclicked")
const [menu_class,setMenuClass]=useState("menu hidden")
const [isMenuClicked,setIsMenuClicked]=useState(false)

  return (
    <div style={{width:"100%",height:"100vh"}}>

    </div>
  )
}

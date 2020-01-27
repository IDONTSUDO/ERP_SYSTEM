import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import MobileMenu from '../components/core/MobileMenu.jsx'
import App from "./app.js"
const Home = () => (
  <div>
    <div class="container">
      <input id="toggle" type="checkbox" />

      <label class="toggle-container" for="toggle">
        <span class="button button-toggle"></span>
      </label>

      <nav class="nav">
        <a class="nav-item" href="">
          Dashboard
    </a>
        <a class="nav-item" href="">
          History
    </a>
        <a class="nav-item" href="">
          Statistics
    </a>
        <a class="nav-item" href="">
          Settings
    </a>
      </nav>

      <section class="dummy-content"><App/></section>
    </div>
    <style global jsx>{`
       /* Basic Styles */
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
}
body {
    font-family: sans-serif;
}
a {
    text-decoration: none;
}
.container {
    position: relative;
    /* margin: 35px auto 0; */
    /* width: 300px;
    height: 534px; */
    background-color: #533557;
    overflow: hidden;
}

#toggle {
    display: none;
}
#toggle:checked ~ .toggle-container .button-toggle {
    box-shadow: 0 0 0 550px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);
}
#toggle:checked ~ .toggle-container .button-toggle:before {
    transform: translateY(-50%) rotate(45deg) scale(1);
}
#toggle:checked ~ .toggle-container .button-toggle:after {
    transform: translateY(-50%) rotate(-45deg) scale(1);
}
#toggle:checked ~ .nav {
    margin-bottom: 100px;
    pointer-events: auto;
    transform: translate(50px, 50px);
}
#toggle:checked ~ .nav .nav-item {
    color: #ec7263;
    letter-spacing: 0;
    height: 40px;
    line-height: 40px;
    margin-top: 0;
    opacity: 1;
    transform: scaleY(1);
    transition: 0.5s, opacity 0.1s;
}
#toggle:checked ~ .nav .nav-item:nth-child(1) {
    transition-delay: 0.15s;
}
#toggle:checked ~ .nav .nav-item:nth-child(1):before {
    transition-delay: 0.15s;
}
#toggle:checked ~ .nav .nav-item:nth-child(2) {
    transition-delay: 0.1s;
}
#toggle:checked ~ .nav .nav-item:nth-child(2):before {
    transition-delay: 0.1s;
}
#toggle:checked ~ .nav .nav-item:nth-child(3) {
    transition-delay: 0.05s;
}
#toggle:checked ~ .nav .nav-item:nth-child(3):before {
    transition-delay: 0.05s;
}
#toggle:checked ~ .nav .nav-item:nth-child(4) {
    transition-delay: 0s;
}
#toggle:checked ~ .nav .nav-item:nth-child(4):before {
    transition-delay: 0s;
}
#toggle:checked ~ .nav .nav-item:before {
    opacity: 0;
}
#toggle:checked ~ .dummy-content {
    padding-top: 30px;
}
#toggle:checked ~ .dummy-content:before {
    background-color: rgba(0, 0, 0, 0.3);
}
/* Toggle Button */
.button-toggle {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 100%;
    transition: 0.6s;
}
.button-toggle:hover {
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);
}
.button-toggle:before, .button-toggle:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ec7263;
    border-radius: 5px;
    transition: 0.5s;
}
.button-toggle:before {
    transform: translateY(-50%) rotate(45deg) scale(0);
}
.button-toggle:after {
    transform: translateY(50%) rotate(-45deg) scale(0);
}
/* Menu */
.nav {
    display: inline-block;
    margin: 25px 25px 20px;
    pointer-events: none;
    transition: 0.5s;
}
.nav-item {
    position: relative;
    display: inline-block;
    float: left;
    clear: both;
    color: transparent;
    font-size: 14px;
    letter-spacing: -6.2px;
    height: 7px;
    line-height: 7px;
    text-transform: uppercase;
    white-space: nowrap;
    transform: scaleY(0.2);
    transition: 0.5s, opacity 1s;
}
.nav-item:nth-child(1) {
    transition-delay: 0s;
}
.nav-item:nth-child(1):before {
    transition-delay: 0s;
}
.nav-item:nth-child(2) {
    transition-delay: 0.05s;
}
.nav-item:nth-child(2):before {
    transition-delay: 0.05s;
}
.nav-item:nth-child(3) {
    transition-delay: 0.1s;
}
.nav-item:nth-child(3):before {
    transition-delay: 0.1s;
}
.nav-item:nth-child(4) {
    transition-delay: 0.15s;
}
.nav-item:nth-child(4):before {
    transition-delay: 0.15s;
}
.nav-item:nth-child(1) {
    letter-spacing: -8px;
}
.nav-item:nth-child(2) {
    letter-spacing: -7px;
}
.nav-item:nth-child(n + 4) {
    letter-spacing: -8px;
    margin-top: -7px;
    opacity: 0;
}
.nav-item:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ec7263;
    transform: translateY(-50%) scaleY(5);
    transition: 0.5s;
}
/* Dummy Content */
.dummy-content {
    position: relative;
    text-align: center;
    transition: 0.5s;
}
.dummy-content:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 2;
    transition: 0.5s;
}
.circle {
    display: inline-block;
    width: 75px;
    height: 75px;
    background-color: #ec7263;
    border-radius: 100%;
}
.text {
    margin: 15px 0 30px;
}
.text span {
    display: inline-block;
    height: 10px;
    margin: 0 5px;
    background-color: #c06162;
    border-radius: 5px;
}
.text span:first-child {
    width: 50px;
}
.text span:last-child {
    width: 80px;
}
.square-top {
    display: inline-block;
    position: relative;
    width: 200px;
    height: 300px;
    background-color: #febe7e;
    z-index: 1;
}
.square-behind {
    display: inline-block;
    position: relative;
    top: -256px;
    width: 250px;
    height: 210px;
    background-color: #c28683;
}
.square-behind:before, .square-behind:after {
    position: absolute;
    content: '';
    top: 0;
    width: 40%;
    height: 100%;
}
.square-behind:before {
    left: 0;
    background-color: #9d567c;
}
.square-behind:after {
    right: 0;
    background-color: #958c6b;
}

      `}</style>
  </div>

)

export default Home

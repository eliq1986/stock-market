import React from 'react';
import style from './Footer.module.css';
import  { webData } from './ExternalWebSiteData';
import WebSiteLink from '../WebSiteLink/WebSiteLink.js';

const Footer = () => {

  return (
     <footer className={style.footer}>
     {webData.map(website=> <WebSiteLink key={website} website={website}/>)}
    </footer>
  )
}


export default Footer;

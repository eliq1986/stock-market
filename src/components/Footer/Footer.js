import React from 'react';
import style from './Footer.module.css';
import  { webData } from './ExternalWebSiteData';

const Footer = () => {

  return (
     <footer className={style.footer}>
     {webData.map(website=> {
      return <a href={website} target="_blank">{website.toUpperCase()}</a>
     })}

    </footer>
  )
}


export default Footer;

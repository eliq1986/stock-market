import React from 'react';
import style from './Header.module.css';

import Form from '../Form/Form.js';


const Header = ({ searchStock }) => {
  return (
    <div className={style.header}>
      <h1><i className="chart line icon" style={{marginRight: "10px"}}></i>Stock Market</h1>
      <Form searchStock={searchStock}/>
    </div>
  )

}

export default Header;

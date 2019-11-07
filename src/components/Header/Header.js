import React from 'react';
import style from './Header.module.css';

import Form from '../Form/Form.js';

const styleIcon = {
  fontSize: "2em",
  marginRight: "10px"
}

const Header = () => {
  return (
    <div className={style.header}>


      <h1><i class="chart line icon" style={{marginRight: "10px"}}></i>Stock Market</h1>

      <Form />
    </div>
  )

}

export default Header;

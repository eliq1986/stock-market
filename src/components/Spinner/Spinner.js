import React from 'react';
import style from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={style.centerSpinner}>
      <div className="ui active centered inline loader" ></div>
    </div>
  )
}


export default Spinner;

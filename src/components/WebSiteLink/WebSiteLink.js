import React from 'react';

const WebSiteLink = ({ website }) => {
  return (
    <a href={website} key={website} target="_blank">{website.toUpperCase()}</a>
  )
}

export default WebSiteLink;

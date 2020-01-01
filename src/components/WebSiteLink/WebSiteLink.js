import React from 'react';

const WebSiteLink = ({ website }) => {
  return (
    <a href={website} key={website} rel="noopener noreferrer" target="_blank">{website.toUpperCase()}</a>
  )
}

export default WebSiteLink;

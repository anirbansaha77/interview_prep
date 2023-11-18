import React, { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleListItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    window.location.href='/';
  };
  return (
    <div className="layout">
      <div className="header">
        <a href="/" style={{"color": "lightblue"}} onClick={(e) => handleListItemClick(e)}>
          <h3>Front End Interview Project</h3>
        </a>
        <p>Anirban Saha</p>
        <a style={{color: "lightblue"}} href="https://www.linkedin.com/in/anirbansaha77/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/anirbansaha77/</a>
        <hr />
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;

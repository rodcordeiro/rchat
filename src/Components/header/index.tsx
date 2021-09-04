import React from 'react';
import './index.css';
export default function Header(props: any) {
  
  return (
    <header className="header">
        <img 
            src={props.picture}
            alt='User avatar'
        />
        <p
            id="username"
        >
        {props.name}
        </p>
        <p
            id="APP"
        >
          DarthChat  
        </p>
      </header>
  );
}



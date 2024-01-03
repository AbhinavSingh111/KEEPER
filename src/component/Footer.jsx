import React from 'react';
import ReactDom from 'react-dom';

const Footer = ()=>{
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    )
}

export default Footer;
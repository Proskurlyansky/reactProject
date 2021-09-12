import React from 'react';
import './headerTitle.css';

const Title = () => {
  const widthClient = document.body.clientWidth;
  if(widthClient > 575) {
    return <h1>Vyacheslav Tarakanov</h1>
  } else {
    return <h1>VT</h1>
  }
  
};

export default Title;
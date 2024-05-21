// Header.jsx
import React from 'react';
import Button from './Button';

const Header = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Header komponentas</h1>
      <Button onClick={handleClick}>Spauskite mane!</Button>
    </div>
  );
}

export default Header;

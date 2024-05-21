// Article.jsx
import React from 'react';
import Button from './Button';

const Article = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h2>Straipsnio komponentas</h2>
      <p>Šiame straipsnyje yra daug įdomių dalykų.</p>
      <Button onClick={handleClick}>Skaityti daugiau</Button>
    </div>
  );
}

export default Article;

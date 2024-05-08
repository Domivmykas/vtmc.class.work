import React from 'react';
import ReactDOM from 'react-dom';

// DeveloperCard component
const DeveloperCard = ({ developer }) => {
  const cardColor = developer.available? 'color' : 'black-and-white';

  return (
    <div className={cardColor}>
      <div className="avatar">
        <img src={developer.avatar} alt={developer.name} />
      </div>
      <div className="intro">
        <h2>{developer.name}</h2>
        <p>{developer.title}</p>
      </div>
      <div className="skills">
        <h3>Skills:</h3>
        <ul>
          {developer.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Sample developer data
const developer = {
  name: 'Jon Doe',
  title: 'Full-stack web developer',
  avatar: 'https://example.com/avatar.jpg',
  available: true,
  skills: ['JavaScript', 'Web Design', 'React', 'Git and GitHub', 'Svelte'],
};

// Render the DeveloperCard component
ReactDOM.render(<DeveloperCard developer={developer} />, document.getElementById('root'));
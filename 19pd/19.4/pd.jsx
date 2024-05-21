import React, { useState } from 'react';

const SearchList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtravimo funkcija
  const filterData = (items, query) => {
    return items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Atnaujinti paieškos lauką
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  // Filtruoti sąrašo elementus pagal paieškos sąlygą
  const filteredData = filterData(data, searchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Ieškoti..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;

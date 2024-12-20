import React, { useState } from 'react';
import "../../Styles/Filter/manifiest.css"
import { usePageContent } from '../../Context/page_content';
import Capitalizate from '../../Utils/capitalizate';

window.addEventListener('click', (e) => {
  if (typeof method_setSuggestions == "function") {

    if (!Array.isArray(e.target.classList)) {
      method_setSuggestions([])
    } else if (e.target.classList.indexOf('fdl') == -1) {
      method_setSuggestions([])
    }

  }
})

let method_setSuggestions

const SearchBar = ({ items, maxSuggestions = 5, action }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  method_setSuggestions = setSuggestions;
  const {pc} = usePageContent();
  
  const handleChange = (event) => {
    const value = event.target.value;
    
    setSearchTerm(value);

    // Filtrar las sugerencias
    if (value) {
      const filteredSuggestions = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      ).slice(0, maxSuggestions); // Limitar el número de sugerencias
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
console.log(Capitalizate(pc["search"]));

  const handleSuggestionClick = (suggestion) => {
    action(suggestion)
    setSearchTerm(suggestion);
    setSuggestions([]);
    setSearchTerm("")
  };

  return (
    <div className='filter-cont'>
      <input
        className='filter'
        type="text"
        placeholder={Capitalizate(pc["search"]) + "..."}
        value={searchTerm}
        onChange={handleChange}
      // style={{ padding: '8px',width: '100%',  }}
      />
      {suggestions.length > 0 && (

        <ul className='filter-dl fdl'>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className='fdl'
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: '#fff',
                borderBottom: '1px solid #ccc'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
            >
              {suggestion}
            </li>
          ))}
        </ul>

      )}
    </div>
  );
};

export default SearchBar;

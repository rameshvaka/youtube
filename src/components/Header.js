import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  useEffect(() => {
   
      const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions(searchQuery);
        }
      }, 200); 
     
      return () => clearTimeout(timer); 
  
  }, [searchQuery]);

  const getSearchSuggestions = async (searchQuery) => {
   
    if (!searchQuery) {
      setSuggestions([]);  // Clear suggestions if no query
      return;
    }
  
    const proxyUrl = 'https://api.allorigins.win/get';  // Use a different CORS proxy
    const apiUrl = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
   
    try {
     
      const response = await fetch(`${proxyUrl}?url=${encodeURIComponent(apiUrl)}`);
     
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      // Log response to check if data is coming in correctly
      const data = await response.json();
      console.log('API Response:', data);
  
      // Check if data contains suggestions and set the suggestions accordingly
      if (data.contents) {
        const suggestions = JSON.parse(data.contents)[1];  // Parse and extract suggestions
        setSuggestions(suggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Failed to fetch search suggestions:', error);
      setSuggestions([]);  // Ensure to clear suggestions if there's an error
    }
  };
  
  

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </a>
      </div>

      <div className="relative flex items-center w-full max-w-xl">
        <input
          className="w-full border p-2 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border px-5 py-2 bg-gray-100 rounded-r-full">
          🔍
        </button>

        {showSuggestions && searchQuery && (
          <div className="absolute bg-white py-2 px-5 w-full mt-1 shadow-lg rounded-lg max-h-60 overflow-y-auto top-full left-0 z-10 border border-gray-300">
            <ul>
              {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 py-1 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSearchQuery(item);
                      setShowSuggestions(false);
                    }}
                  >
                    <img
                      src="https://tse4.mm.bing.net/th?id=OIP.-nzuCSkUlDEaxBAgKrZuogHaGS&pid=Api&P=0&h=180"
                      alt="Search Icon"
                      className="w-4 h-4"
                    />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="py-2">No suggestions found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-end items-center ml-auto">
        <img
          className="h-8 rounded-full"
          alt="user"
          src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
};

export default Header;

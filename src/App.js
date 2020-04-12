import React, { useState, useEffect } from "react";
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components'
import "./App.css";


const App = () => {
  //states
  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery]= useState('');

  //const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

  //constants
  const url = "https://jsonplaceholder.typicode.com/users"

  var filteredMonsters = [];

  //fetch list of monstes
  const fetchMonsters = () => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => setMonsters(data))
      .catch((error) => console.log(error));
  };

  //executes any time the url is changed
  useEffect(() => { 
    fetchMonsters();
  },[url]);

  const handleChange = e => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }

  //filter monsters as per query string
  //useEffect(() => {   
  filteredMonsters = monsters.filter(monster => (
    monster.name.toLowerCase().includes(searchQuery.toLowerCase())
  ));
  //},[searchQuery]);  

  return (
    <div className="App">
    <h1> Monsters Rolodex </h1>
      <SearchBox 
        placeholder="Search Monster" 
        handleChange={handleChange} />
      <CardList 
        monsters={filteredMonsters} />
    </div>
  );
};

export default App;

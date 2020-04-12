import React, { useState, useEffect } from "react";
import { CardList } from './components/card-list/card-list.component';

import "./App.css";


const App = () => {
  //states
  const [monsters, setMonsters] = useState([]);
  //const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

  //constants
  const url = "https://jsonplaceholder.typicode.com/users"

  //fetch list of monstes
  const fetchMonsters = () => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => setMonsters(data))
      .catch((error) => console.log(error));
  };

  //executes any time a state is changed
  useEffect(() => {
    fetchMonsters();
  },[url]);

  return (
    <div className="App">
      <CardList monsters={monsters}  />
    </div>
  );
};

export default App;

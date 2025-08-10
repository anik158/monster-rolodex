import { useState,useEffect, use } from 'react'
import CardList from './components/card-list/card-list.component'
import './App.css'
import Search from './components/cards/search.component';



function App() {

  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json()
      .then(data => {
        setMonsters(data)
        setFilteredMonsters(data)
      }))
  }, []);


  return (
    <>
      <Search monsters={monsters} setFilteredMonsters={setFilteredMonsters}></Search>
    
      <CardList monsters={filteredMonsters}></CardList>
    </>
  )
}

export default App

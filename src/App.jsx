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

  const onChangeHandler = (event) => {
                const searchField = event.target.value.toLowerCase();
                const newFilteredMonsters = monsters.filter((monster) => {
                    return monster.name.toLowerCase().includes(searchField)
                });

                setFilteredMonsters(newFilteredMonsters);
      }


  return (
    <div className="app-container">
      <h1 className='app-title'>Monster Rolodex</h1>
      <Search onChangeHandler={onChangeHandler}></Search>
    
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  )
}

export default App

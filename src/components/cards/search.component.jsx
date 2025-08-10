

const Search = ({monsters,setFilteredMonsters}) => {
    return (
        <div>
            <input type="text" placeholder="search..." onChange={(event) => {
                const searchField = event.target.value.toLowerCase();
                const newFilteredMonsters = monsters.filter((monster) => {
                    return monster.name.toLowerCase().includes(searchField)
                });

                setFilteredMonsters(newFilteredMonsters);
      }}/>
        </div>
    )
}

export default Search;
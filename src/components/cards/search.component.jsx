import './search.style.css'

const Search = ({onChangeHandler}) => {
    return (
        
            <input className="search-box-container" type="text" placeholder="search..." onChange={onChangeHandler}/>

    )
}

export default Search;
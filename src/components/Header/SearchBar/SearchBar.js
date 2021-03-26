import SearchIcon from '@material-ui/icons/Search';


const SearchBar = () => {
    const search = (e) => {
        let searchInput = e.target.parentNode.firstChild;
        console.log(searchInput.value)
    }
    return (
        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" onClick={search} />
        </div>
    )
}

export default SearchBar

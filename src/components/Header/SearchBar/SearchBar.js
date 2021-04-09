import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../StateProvider';



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const history = useHistory();

    const searchItems = (e) => {

        history.replace(`/search/${searchQuery}`)
        setSearchQuery('');

    }

    return (
        <div className="header__search">
            <input className="header__searchInput" value={searchQuery} type="text" onChange={(e) => setSearchQuery(e.target.value)} />
            <SearchIcon className="header__searchIcon" onClick={searchItems} />
        </div>
    )
}

export default SearchBar



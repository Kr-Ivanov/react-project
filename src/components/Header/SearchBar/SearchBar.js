import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useStateValue } from '../../../StateProvider';



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [{ search }, dispatch] = useStateValue();
    const history = useHistory();

    const searchItems = (e) => {

        history.push(`/search/${searchQuery}`)

    }


    if (search != searchQuery) {
        dispatch({
            type: 'SEARCH_VALUE',
            search: searchQuery
        })
    }

    return (
        <div className="header__search">
            <input className="header__searchInput" type="text" onChange={(e) => setSearchQuery(e.target.value)} />
            <SearchIcon className="header__searchIcon" onClick={searchItems} />
        </div>
    )
}

export default SearchBar



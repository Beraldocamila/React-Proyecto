
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';




const Search =() => {

    const handleEvent = (e) => {
        if (e.keyCode === 65, 69, 73, 79, 85) e.preventDefault();
        console.log (e.keyCode);
    } 
    return(
        <>
        <input onKeyDown={handleEvent}></input>
        <SearchIcon style={{marginRight:"15px"}}/>
        </>
    )
    
}

export default Search;
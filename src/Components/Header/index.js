import React from "react";
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
  return (
    <div className="header-container row d-flex align-items-center mt-4 mb-4">
      <div className="col">
        <h1 className="header-logo" style={{color: 'tomato'}}>Wookie Movies</h1>
      </div>
      <div className="col col-sm-4">
        <SearchIcon/>
        <input value="" placeholder="Search Here"></input>
      </div>
    </div>
  );
};

export default Header;

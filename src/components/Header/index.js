import React from "react";
import Navigation from "../Nav";

function Header(props) {
    const {
        sectionSelected,
        setSectionSelected
    } = props;
    //set the navigation to be more sidebar style. liked the way of it a little better
    return (
        <header>
            <img src={require(`../../assets/images/me.jpg`)} width="60" alt="my profile" />
            
            <h1>Anthony Cattet</h1>
            
                 <Navigation sectionSelected={sectionSelected} setSectionSelected={setSectionSelected}></Navigation> 
           
        </header>
    );
}

export default Header;
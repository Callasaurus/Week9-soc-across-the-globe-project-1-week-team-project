import React from 'react'
import "./FilterBar.css"

// Filter bar for both english & non-English. Non-English will render an additional input for searching in English
// Functions for searching, displaying sorted & fave objects called on button clicks

export function FilterBar(props) {
    if (props.language === 'englishDefinitions'){
        return (
            <div>
                <div className="searchBar"> 
                    <input className="input" onChange={props.handleChange} value={props.input} placeholder="Enter search here"></input>
                </div> 
                <div className="buttonDiv">
                    <button className="searchButton" onClick={props.handleClickSearch}>Search</button>
                    <button className="getAllButton" onClick={props.handleClickGetAll}>Get All</button>
                    <button className="sortByWeekButton" onClick={props.handleSort}>Sort by week</button>
                    <button className="favouriteButton" onClick={props.displayFave}>Show favourites</button>
                </div>
            </div>
        )
    
    } else {
        
        return (
            <div className="languagesDiv">
                    <input className="input" onChange={props.handleTranslate} value={props.translateSearch} placeholder="Enter word in English to get translation"></input>
                <div className="translatorButtonDiv">
                    <button className="translatorButton" onClick={props.handleTranslationSearch}>Get translation</button>
                </div>      
                    <input className="input" onChange={props.handleChange} value={props.input} placeholder="Enter search here"></input>
                <div className="buttonDiv">
                    <button className="searchButton" onClick={props.handleClickSearch}>Search</button>
                    <button className="getAllButton" onClick={props.handleClickGetAll}>Get All</button>
                    <button className="sortByWeekButton" onClick={props.handleSort}>Sort by week</button>
                    <button className="favouriteButton" onClick={props.displayFave}>Show favourites</button>
                </div>
            </div>
        )
    }
}
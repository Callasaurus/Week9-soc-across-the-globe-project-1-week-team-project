import React from 'react'
import "./StartPage.css"
import logos from "../../images/Who are you gonna call (1).gif"
export function StartPage(props) {
    return (
        <div className="start-container">
            <div className="imageDivs">
                <img className="animation-logo" src={logos} alt="logo" />
            </div>

            <h3 id="title" className="chooseYourLanguage">Choose Your Language</h3>

            <div className="langButtonDiv">
                <button id="langButtonEnglish" className="langButtonEnglish" onClick={props.changeEnglish}></button>
                <button className="langButtonSpanish" onClick={props.changeSpanish}></button>
                <button className="langButtonFrench" onClick={props.changeFrench}></button>
                <button className="langButtonGerman" onClick={props.changeGerman}></button>
            </div>
        </div>
    )
}


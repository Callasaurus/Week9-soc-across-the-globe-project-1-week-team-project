import React from 'react'
import "./StartPage.css"
import logos from "../../images/Who are you gonna call (1).gif"
import {useState} from 'react';

export function StartPage(props) {

// const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(current => !current);
// }

    return (
        <div className="start-container">
       
    {/* //    style={{ */}
    {/* //       backgroundColor: isActive ? '#C2E7DA' : '',
        
    //     }}>

    //     <button onClick={handleClick} className="colourButton"></button> */}

            <div className="imageDivs">
                <img className="animation-logo" src={logos} alt="logo" />
            </div>

            <h3 id="title" className="chooseYourLanguage">

        {/* //          style={{
        //      color: isActive ? '#1A1B41' : '',
        // }}
        // onClick={handleClick} */}

        Choose Your Language</h3>

            <div className="langButtonDiv">
                <button id="langButtonEnglish" className="langButtonEnglish" onClick={props.changeEnglish}></button>
                <button className="langButtonSpanish" onClick={props.changeSpanish}></button>
                <button className="langButtonFrench" onClick={props.changeFrench}></button>
                <button className="langButtonGerman" onClick={props.changeGerman}></button>
            </div>
        </div>
    )
}


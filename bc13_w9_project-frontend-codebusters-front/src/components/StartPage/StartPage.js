import React from 'react'
import "./StartPage.css"
import logos from "../../images/Who are you gonna call (1).gif"

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
                <button id="langButtonEnglish" className="langButtonEnglish" name="englishDefinitions" onClick={props.handleLanguage}></button>
                <button className="langButtonSpanish" name="spanishDefinitions" onClick={props.handleLanguage}></button>
                <button className="langButtonFrench" name="frenchDefinitions" onClick={props.handleLanguage}></button>
                <button className="langButtonGerman" name="germanDefinitions" onClick={props.handleLanguage}></button>
            </div>
        </div>
    )
}


import React from 'react'
import logo from "../../images/logo.png"
import './Header.css'

export function Header(props) {

    return (
        <div className="headerDiv">

            <div className="headerButtons">
                <button id="ebutton" className={props.language === "englishDefinitions" ? "highlighted" : ""} name="englishDefinitions" onClick={props.handleLanguage}></button>
                <button id="sbutton" className={props.language === "spanishDefinitions" ? "highlighted" : ""} name="spanishDefinitions" onClick={props.handleLanguage}></button>
                <button id="fbutton" className={props.language === "frenchDefinitions" ? "highlighted" : ""} name="frenchDefinitions" onClick={props.handleLanguage}></button>
                <button id="gbutton" className={props.language === "germanDefinitions" ? "highlighted" : ""} name="germanDefinitions" onClick={props.handleLanguage}></button>
            </div>

            <div className="headerDiv">
                <div className="imageDiv">
                    <img className="image" src={logo} alt="logo"></img>
                </div>

                <div className="headerTitle">
                    <div className="titleDiv">
                        <h1 className="title">  School of Code{"\n"}Across the Globe</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import logo from "../../images/logo.png"
import './Header.css'

// Header buttons select the language prop and toggle the white border around flags

export function Header(props) {
    return (
        <div className="headerDiv">

            <div className="headerButtons">
                <button className={props.isActive ? "highlightedEN" : "englishButton"} onClick={props.handleEnglish}></button>
                <button className={props.isActiveES ? "highlightedES" : "spanishButton"} onClick={props.handleSpanish}></button>
                <button className={props.isActiveFR ? "highlightedFR" : "frenchButton"} onClick={props.handleFrench}></button>
                <button className={props.isActiveDE ? "highlightedDE" : "germanButton"} onClick={props.handleGerman}></button>
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
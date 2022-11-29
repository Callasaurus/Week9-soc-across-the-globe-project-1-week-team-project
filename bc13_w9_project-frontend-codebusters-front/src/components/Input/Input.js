import React from 'react'
import './Input.css'
import { useState } from 'react'

export function Input(props) {

const [title, setTitle] = useState()
const [englishTitle, setEnglishTitle] = useState()
const [definition, setDefinition] = useState()
const [example, setExample] = useState()
const [links, setLinks] = useState()
const [week, setWeek] = useState()

function createOrEditObject() {
    if (props.language === 'englishDefinitions') {

        props.handleNewObject({
            title: title,
            definition: definition,
            example: example,
            links: links,
            week: week
        })
    } else {
        props.handleNewObject({
            englishtitle: englishTitle,
            title: title,
            definition: definition,
            example: example,
            links: links,
            week: week
        })
    }
    props.visibility()
    setTitle('')
    setEnglishTitle('')
    setDefinition('')
    setExample('')
    setLinks('')
    setWeek('')
}

function handleEnglishTitle(e) {
    setEnglishTitle(e.target.value)
}

function handleTitle(e) {
    setTitle(e.target.value)
}

function handleDefinition(e) {
    setDefinition(e.target.value)
}

function handleExample(e) {
    setExample(e.target.value)
}

function handleLinks(e) {
    setLinks(e.target.value)
}

function handleWeek(e) {
    const value = e.target.value
    if (Validate(value)) {
        setWeek(value)
    } else {
        alert('week must be a number')
    }
}

function Validate(value) {
    if (value.match(/^[0-9]*$/)) {
        return true
    }
    return false
}

if (props.language === 'englishDefinitions') {
    return (
        <div className="form-items">

            <div className="exitButtonDiv">
                <button className="exitButton" onClick={props.visibility}>X</button>
            </div>
            
            <input placeholder="Title of the resource" onChange={handleTitle} value={title}></input>
            <input placeholder="Definition of the resouce topic" onChange={handleDefinition} value={definition}></input>
            <input placeholder="Example (image url)" onChange={handleExample} value={example}></input>
            <input placeholder="Links (url of helpful website(s))" onChange={handleLinks} value={links}></input>
            <input placeholder="Week content covered (enter a number)" onChange={handleWeek} value={week}></input>

            <button className="addButton" onClick={createOrEditObject}>Add</button>

        </div>
    )
} else {
    return (
        <div className="form-items">

            <div className="exitButtonDiv">
                <button className="exitButton" onClick={props.visibility}>X</button>
            </div>

            <input placeholder="Title of the resource in english" onChange={handleEnglishTitle} value={englishTitle}></input>
            <input placeholder="Title of the resource in local language" onChange={handleTitle} value={title}></input>
            <input placeholder="Definition of the resource topic" onChange={handleDefinition} value={definition}></input>
            <input placeholder="Example (image url)" onChange={handleExample} value={example}></input>
            <input placeholder="Links (url of helpful website(s))" onChange={handleLinks} value={links}></input>
            <input placeholder="Week content covered (enter a number)" onChange={handleWeek} value={week}></input>

            <button className="addButton" onClick={createOrEditObject}>Add</button>
            
        </div>
    )
}
}
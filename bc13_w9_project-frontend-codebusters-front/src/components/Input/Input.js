import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";

export function Input(props) {

// first form 

const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // second form (non-english)

  const {
    register: registerNonEnglish,
    handleSubmit: handleSubmitNonEnglish,
    reset: resetNonEnglish,
    formState: { errors: errorsNonEnglish }
  } = useForm();

  // onsubmit for both forms
  
  const onSubmit = (data) => {
    props.handleNewObject(data);
    props.visibility()
    reset()
    resetNonEnglish()
  };

if (props.language === 'englishDefinitions') {
    
    return (
    <div className="form-items">

        <div className="exitButtonDiv">
            <button className="exitButton" onClick={props.visibility}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label>
                <input 
                type="text" 
                name="title" 
                {...register("title", {
                    required: props.editOrAdd,
                    minLength: 3, 
                })} 
                defaultValue={props.wholeEditObject.title}>
                </input> 
                {errors.title && errors.title.type === "required" && (
                    <p className='error'>Title must not be blank</p>
                )}
                {errors.title && errors.title.type === "minLength" && (
                    <p className='error'>Title must have at least 4 characters</p>
                )}
                <label>Definition</label>
                <input 
                type="text" 
                name="definition" 
                {...register("definition", {
                    required: props.editOrAdd,
                    minLength: 20
                })} 
                defaultValue={props.wholeEditObject.definition}>
                </input>
                {errors.definition && errors.definition.type === "required" && (
                    <p className='error'>Definition must not be blank</p>
                )}
                {errors.definition && errors.definition.type === "minLength" && (
                    <p className='error'>Definition must have at least 20 characters</p>
                )}
                <label>Example</label>
                <input 
                type="text" 
                name="example" {...register("example", {
                    required: props.editOrAdd,
                    minLength: 10
                })} 
                defaultValue={props.wholeEditObject.example}>
                </input>
                {errors.example && errors.example.type === "required" && (
                    <p className='error'>Example must not be blank</p>
                )}
                {errors.example && errors.example.type === "minLength" && (
                    <p className='error'>Example must have at least 10 characters</p>
                )}
                <label>Links</label>
                <input 
                type="text" 
                name="links" {...register("links", {
                    required: props.editOrAdd,
                    minLength: 10
                })} 
                defaultValue={props.wholeEditObject.links}>
                </input>
                {errors.links && errors.links.type === "required" && (
                    <p className='error'>Link must not be blank</p>
                )}
                {errors.links && errors.links.type === "minLength" && (
                    <p className='error'>Link must have at least 10 characters</p>
                )}
                <label>Week</label>
                <input 
                type="number"
                min="0"
                max="16"
                name="week" {...register("week", {
                    required: props.editOrAdd
                })} 
                defaultValue={props.wholeEditObject.week}>
                </input>
                {errors.week && errors.week.type === "required" && (
                    <p className='error'>Week must not be blank</p>
                )}
            <div className="add-button-div">
            <button type="submit" className="addButton">Add</button>
            </div>
        </form>
    </div>
)

} else {
    
    return (
        <div className="form-items">

        <div className="exitButtonDiv">
            <button className="exitButton" onClick={props.visibility}>X</button>
        </div>
        <form onSubmit={handleSubmitNonEnglish(onSubmit)}>
                <label>English Title</label>
                <input 
                type="text" 
                name="englishtitle" 
                {...registerNonEnglish("englishtitle", {
                    required: props.editOrAdd,
                    minLength: 3
                })} 
                defaultValue={props.wholeEditObject.englishtitle}>
                </input>
                {errorsNonEnglish.englishtitle && errorsNonEnglish.englishtitle.type === "required" && (
                    <p className='error'>Title must not be blank</p>
                )}
                {errorsNonEnglish.englishtitle && errorsNonEnglish.englishtitle.type === "minLength" && (
                    <p className='error'>Title must have at least 4 characters</p>
                )}
                <label>Title</label>
                <input 
                type="text" 
                name="title" 
                {...registerNonEnglish("title", {
                    required: props.editOrAdd,
                    minLength: 3
                })} 
                defaultValue={props.wholeEditObject.title}>
                </input>
                {errorsNonEnglish.title && errorsNonEnglish.title.type === "required" && (
                    <p className='error'>Title must not be blank</p>
                )}
                {errorsNonEnglish.title && errorsNonEnglish.title.type === "minLength" && (
                    <p className='error'>Title must have at least 4 characters</p>
                )}
                <label>Definition</label>
                <input 
                type="text" 
                name="definition" 
                {...registerNonEnglish("definition", {
                    required: props.editOrAdd,
                    minLength: 20
                })} 
                defaultValue={props.wholeEditObject.definition}>
                </input>
                {errorsNonEnglish.definition && errorsNonEnglish.definition.type === "required" && (
                    <p className='error'>Definition must not be blank</p>
                )}
                {errorsNonEnglish.definition && errorsNonEnglish.definition.type === "minLength" && (
                    <p className='error'>Definition must have at least 20 characters</p>
                )}
                <label>Example</label>
                <input 
                type="text" 
                name="example" {...registerNonEnglish("example", {
                    required: props.editOrAdd,
                    minLength: 10
                })} 
                defaultValue={props.wholeEditObject.example}>
                </input>
                {errorsNonEnglish.example && errorsNonEnglish.example.type === "required" && (
                    <p className='error'>Example must not be blank</p>
                )}
                {errorsNonEnglish.example && errorsNonEnglish.example.type === "minLength" && (
                    <p className='error'>Example must have at least 10 characters</p>
                )}
                <label>Links</label>
                <input 
                type="text" 
                name="links" {...registerNonEnglish("links", {
                    required: props.editOrAdd,
                    minLength: 10
                })} 
                defaultValue={props.wholeEditObject.links}>
                </input>
                {errorsNonEnglish.links && errorsNonEnglish.links.type === "required" && (
                    <p className='error'>Link must not be blank</p>
                )}
                {errorsNonEnglish.links && errorsNonEnglish.links.type === "minLength" && (
                    <p className='error'>Link must have at least 10 characters</p>
                )}
                <label>Week</label>
                <input 
                type="number"
                min="0"
                max="16"
                name="week" {...registerNonEnglish("week", {
                    required: props.editOrAdd
                })} 
                defaultValue={props.wholeEditObject.week}>
                </input>
                {errorsNonEnglish.week && errorsNonEnglish.week.type === "required" && (
                    <p className='error'>Week must not be blank</p>
                )}
            <div className="add-button-div">
            <button type="submit" className="addButton">Add</button>
            </div>
        </form>
    </div>
    )
}
}

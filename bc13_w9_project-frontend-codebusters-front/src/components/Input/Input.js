import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";

export function Input(props) {
console.log(props.editOrAdd)
const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    props.handleNewObject(data);
    props.visibility()
    reset()
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
                    minLength: 3
                })} 
                placeholder="Title of the resource">
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
                placeholder="Definition of the resouce topic">
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
                placeholder="Example (image url)">
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
                placeholder="Links (url of helpful website(s))">
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
                placeholder="Week content covered (enter a number)">
                </input>
                {errors.week && errors.week.type === "required" && (
                    <p className='error'>Week must not be blank</p>
                )}
            <button type="submit" className="addButton">Add</button>
        </form>
    </div>
)

} else {
    
    return (
        <div className="form-items">

        <div className="exitButtonDiv">
            <button className="exitButton" onClick={props.visibility}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label>English Title</label>
                <input 
                type="text" 
                name="englishtitle" 
                {...register("englishtitle", {
                    required: props.editOrAdd,
                    minLength: 3
                })} 
                placeholder="Title of the resource">
                </input>
                {errors.englishtitle && errors.englishtitle.type === "required" && (
                    <p className='error'>Title must not be blank</p>
                )}
                {errors.englishtitle && errors.englishtitle.type === "minLength" && (
                    <p className='error'>Title must have at least 4 characters</p>
                )}
                <label>Title</label>
                <input 
                type="text" 
                name="title" 
                {...register("title", {
                    required: props.editOrAdd,
                    minLength: 3
                })} 
                placeholder="Title of the resource">
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
                placeholder="Definition of the resouce topic">
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
                placeholder="Example (image url)">
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
                placeholder="Links (url of helpful website(s))">
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
                placeholder="Week content covered (enter a number)">
                </input>
                {errors.week && errors.week.type === "required" && (
                    <p className='error'>Week must not be blank</p>
                )}
            <button type="submit" className="addButton">Add</button>
        </form>
    </div>
    )
}
}
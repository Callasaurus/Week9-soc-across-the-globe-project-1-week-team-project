import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";

export function Input(props) {

const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    props.handleNewObject(data);
    props.visibility()
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
                        required: true,
                        minLength: 3
                    })} 
                    placeholder="Title of the resource">
                    </input>
                    {errors.title && errors.title.type === "required" && (
                        <p>Title must not be blank</p>
                    )}
                    {errors.title && errors.title.type === "minLength" && (
                        <p>Title must have at least 4 characters</p>
                    )}
                    <label>Definition</label>
                    <input 
                    type="text" 
                    name="definition" 
                    {...register("definition", {
                        required: true,
                        minLength: 20
                    })} 
                    placeholder="Definition of the resouce topic">
                    </input>
                    {errors.definition && errors.definition.type === "required" && (
                        <p>Definition must not be blank</p>
                    )}
                    {errors.definition && errors.definition.type === "minLength" && (
                        <p>Definition must have at least 20 characters</p>
                    )}
                    <label>Example</label>
                    <input type="text" name="example" {...register("example")} placeholder="Example (image url)"></input>
                    <label>Links</label>
                    <input type="text" name="links" {...register("links")} placeholder="Links (url of helpful website(s))"></input>
                    <label>Week</label>
                    <input 
                    type="number"
                    min="0"
                    max="16"
                    name="week" {...register("week", {
                        required: true
                    })} 
                    placeholder="Week content covered (enter a number)">
                    </input>
                    {errors.week && errors.week.type === "required" && (
                        <p>Week must not be blank</p>
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
                    required: true,
                    minLength: 3
                })} 
                placeholder="Title of the resource">
                </input>
                {errors.englishtitle && errors.englishtitle.type === "required" && (
                    <p>Title must not be blank</p>
                )}
                {errors.englishtitle && errors.englishtitle.type === "minLength" && (
                    <p>Title must have at least 4 characters</p>
                )}
                <label>Title</label>
                <input 
                type="text" 
                name="title" 
                {...register("title", {
                    required: true,
                    minLength: 3
                })} 
                placeholder="Title of the resource">
                </input>
                {errors.title && errors.title.type === "required" && (
                    <p>Title must not be blank</p>
                )}
                {errors.title && errors.title.type === "minLength" && (
                    <p>Title must have at least 4 characters</p>
                )}
                <label>Definition</label>
                <input 
                type="text" 
                name="definition" 
                {...register("definition", {
                    required: true,
                    minLength: 20
                })} 
                placeholder="Definition of the resouce topic">
                </input>
                {errors.definition && errors.definition.type === "required" && (
                    <p>Definition must not be blank</p>
                )}
                {errors.definition && errors.definition.type === "minLength" && (
                    <p>Definition must have at least 20 characters</p>
                )}
                <label>Example</label>
                <input type="text" name="example" {...register("example")} placeholder="Example (image url)"></input>
                <label>Links</label>
                <input type="text" name="links" {...register("links")} placeholder="Links (url of helpful website(s))"></input>
                <label>Week</label>
                <input 
                type="number"
                min="0"
                max="16"
                name="week" {...register("week", {
                    required: true
                })} 
                placeholder="Week content covered (enter a number)">
                </input>
                {errors.week && errors.week.type === "required" && (
                    <p>Week must not be blank</p>
                )}
            <button type="submit" className="addButton">Add</button>
        </form>
    </div>
    )
}
}
import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";

// Input component creates a form using using react hook form and data is used in handleNewObjct function (from app component) -- no need for state
// editOrAdd props toggles from true to false depending on editing (no validation required) or adding (validation required)
// wholeEditObject props holds the object of the item which is being edited - so passed in as default values to pre-populate the input boxes (but not if adding)

export function Input(props) {

    // Form 

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    // onSubmit for form

    const onSubmit = (data) => {
        props.handleNewObject(data);
        props.visibility()
        reset()
    };

    return (
        <div className="form-items">

            <button className="exitButton" onClick={props.visibility}>X</button>

            <form onSubmit={handleSubmit(onSubmit)}>

                {props.language !== "englishDefinitions" && <div>
                    <label>English Title</label>
                    <input
                        type="text"
                        name="englishtitle"
                        {...register("englishtitle", {
                            required: props.editOrAdd,
                            minLength: 3
                        })}
                        defaultValue={props.wholeEditObject.englishtitle}>
                    </input></div>}
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
}


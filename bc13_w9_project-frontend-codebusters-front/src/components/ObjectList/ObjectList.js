import React from 'react'
import './ObjectList.css'
import { ObjectItem } from '../ObjectItem/ObjectItem.js'

export function ObjectList(props) {

    return (
        <div className="object-list-container">
            <ul className="object-list-container list-container">
                {props.object.map((item) => {
                    
                    if (item.englishtitle) {
                        return (<ObjectItem key={item.id} englishTitle={item.englishtitle} title={item.title} definition={item.definition} example={item.example} links={item.links} week={item.week} handleFavourite={() => props.handleFavourite(item.id)} handleDelete={() => props.handleDelete(item.id)} handleEdit={() => props.handleEdit(item.id)} editing={props.editing} holdEditObject={() => props.holdEditObject(item)} />)

                    } else {
                        return (<ObjectItem key={item.id} englishTitle={""} title={item.title} definition={item.definition} example={item.example} links={item.links} week={item.week} handleFavourite={() => props.handleFavourite(item.id)} handleDelete={() => props.handleDelete(item.id)} handleEdit={() => props.handleEdit(item.id)} editing={props.editing} holdEditObject={() => props.holdEditObject(item)} />)

                    }
                })}
            </ul>
        </div>
    )
}

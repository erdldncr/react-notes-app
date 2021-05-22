import React, { useState } from 'react'
import {useGlobalContext} from '../store/context'
export default function AddNote() {
    const [text,setText]=useState('')
    const {addNote} =useGlobalContext()
    const addToNoteList=()=>{
       if(text.trim().length>0){
        addNote(text)
        setText('')
       }
    }
    return (
        <div className='note new'>
            <textarea 
            disabled={200-text.length<0}
            rows='8' 
            cols='10'
            placeholder='Type to add a note'
            value={text}
            onChange={(e)=>setText(e.target.value)}
            >
            </textarea>
            <div className="note-footer">
                <small>{200-text.length} remaining</small>
                <button onClick={addToNoteList} className="save">Save</button>
            </div>
        </div>
    )
}

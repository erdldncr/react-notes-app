import React from 'react'
import Note from './Note'
import {useGlobalContext} from '../store/context'
import AddNote from './AddNote'
const NotesList = () => {
    const {state}=useGlobalContext()
    return (
        <div className='notes-list'>
           {state.map(note=>(
               <Note key={note.id} {...note}/>
           ))}
           <AddNote/>
        </div>
    )
}

export default NotesList

import React from 'react'
import Note from './Note'
import {useGlobalContext} from '../store/context'
const NotesList = () => {
    const {state}=useGlobalContext()
    return (
        <div className='notes-list'>
           {state.map(note=>(
               <Note key={note.id} {...note}/>
           ))}
        </div>
    )
}

export default NotesList

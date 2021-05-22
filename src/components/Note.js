import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import { useGlobalContext } from '../store/context'
const Note = ({text,date,id}) => {
    const {deleteNote}=useGlobalContext()
    return (
        <div className='note'>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=>deleteNote(id)} className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
}

export default Note

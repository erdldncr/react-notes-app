import React, { useState } from 'react'

export default function Header({darkMode,setDarkMode}) {
     
    return (
        <div className="header">
            <h1>Notes</h1>
            <button  onClick={()=>{setDarkMode(!darkMode)}} className='save'>Toggle Moddle</button>
        </div>
    )
}

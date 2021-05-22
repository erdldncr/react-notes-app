import React, { useState } from 'react'
import {MdSearch} from 'react-icons/md'
import { useGlobalContext } from '../store/context'
const Search = () => {
    const{search}=useGlobalContext()
    const [searchTerm,setSearchTerm]=useState('')
    
    const changeHandler=(e)=>{
        setSearchTerm(e.target.value)
            if(searchTerm){
                search(searchTerm)
            }
    }

    return (
        <div className="search">
            <MdSearch className='search-icons' size='1.3em'/>
            <input 
            value={searchTerm}
            onChange={changeHandler}
            type="text" placeholder='type to search'/>
        </div>
    )
}

export default Search

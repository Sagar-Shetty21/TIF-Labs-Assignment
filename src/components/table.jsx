import React,{useState} from 'react'


const table = ({entries}) => {
   
    return entries.map(entry => (
        <tr>
            <td>{entry.name}</td>
            <td>{entry.age}</td>
            <td>{entry.gender}</td>
        </tr>
    )) 
}

export default table

import React, { useState } from 'react';


export default function Score({ score }){

    return(
    <>

<ul className='Score'>
        {students.map((student, index) => (
        <li key={index}>
        <h2>{student.data}</h2>
        <p>{student.score}</p>
        </li>
        
    ))}
</ul>

    </>
 )
}
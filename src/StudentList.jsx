
import React, { useState } from 'react';
// import Score from './Score'


export default function StudentList({ students }) {
    
return(
    <>
    <ul className='StudentList'>
        {students.map((student, index) => (
            <li key={index}>
                <h2>{student.name}</h2>
                <p>{student.bio}</p>
            </li>    
))}
    </ul>
    {/* <Score score={s} key={idx}/> */}

    </>

)}


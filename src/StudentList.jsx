
import React, { useState } from 'react';
import Score from './Score'


export default function StudentList({ students }) {
    console.log(students);
return(
    <>
    <ul className='StudentList'>
        {students.map((student, index) => (
            <li key={index}>
                <h2>{student.name}</h2>
                <p>{student.bio}</p>
                <ul className='score'>
                {student.scores.map( score => <Score score={score}/>)}                </ul>
            </li>    
))}
    </ul>

    </>

)}


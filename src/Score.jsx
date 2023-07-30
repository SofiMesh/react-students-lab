
import React, { useState } from 'react';


export default function Score({ score }){
console.log(score);
    return(
    <>

        <li>
        <h2>{score.score} {score.date}</h2>
        </li>
        

    </>
 )
}
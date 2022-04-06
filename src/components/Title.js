import React, { useState } from "react";
import Quiz from "./Quiz";

export default function Title()
{
    let [start, setStart] = useState(false);


    function handleClick()
    {
        setStart(true);   
    }

    
    let ifFalse =  ( <div className="title"><h1>WELCOME TO MY QUIZ!</h1>
        <button className="pinkBtn" onClick={handleClick}> Start </button> </div>);
    
    let ifTrue = <Quiz />
        

    


    return(

        <div className="parent">
        {start ? ifTrue  : ifFalse}
        
        
        </div>

    )
}
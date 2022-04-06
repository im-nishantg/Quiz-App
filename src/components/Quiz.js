import React, { useState } from "react";
import questions from "./questions";

export default function Quiz() {

    let [currQues, setCurrQues] = useState(0);
    let allow = false;
    let [score, setScore] = useState(0);
    let [showResult, setShowRes] = useState(false);
    


    function checkAnswer() {

        let rad = document.querySelectorAll(".options");

        rad.forEach((item) => {
            if (item.checked) {
        
                if (item.id === questions[currQues].correct) {
                    setScore(score + 1);
                }
                allow = true;
                item.checked = false;
            }
        })

    }


    function handleClick() {
    
        if (currQues === questions.length - 1) {

            setShowRes(true);
            checkAnswer();
            
        }

        else {

            checkAnswer();
            if (allow && currQues < questions.length) {
                setCurrQues(currQues + 1);
            }
            allow = false;
        }
    }

    let ifFalse = 
    (<div className="quiz">
        <div className="container">
            <h4>Q. {questions[currQues].question}</h4>
            <ul>
                <li><input type="radio" name="ans" id="a" className="options" /> {questions[currQues].a}</li>
                <li><input type="radio" name="ans" id="b" className="options" /> {questions[currQues].b}</li>
                <li><input type="radio" name="ans" id="c" className="options" /> {questions[currQues].c}</li>
                <li><input type="radio" name="ans" id="d" className="options" /> {questions[currQues].d}</li>

            </ul>
        </div>

        <div className="btnc">
            <button className="sbtn" onClick={handleClick}> Submit </button>
        </div>
    </div>)

    let iftrue = (
     
    <div className="result ">
    
    <img src="https://i.pinimg.com/564x/7d/11/63/7d1163968102e1e00d2a4cb1abbce50b.jpg" height="350px" />
    <h2>Quiz Completed!</h2>
    <h5> Your score is {" " + score + "/5" }</h5>
    <button className="pinkBtn" onClick={()=>(window.location.reload())}> Try Again</button>
    </div>)

    return (
        <div className="parent">
            {showResult ? iftrue : ifFalse}
        </div>
    )
}
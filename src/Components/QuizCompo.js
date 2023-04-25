import React from 'react'
import  { useState } from 'react'
import  './quizstyle.css'
const QuizComp=()=>{
    var Questionbank=[
        {
            Question:"Who Created React.js ?",
            Answers:[
                {Answer:"Jordan Mike",isCorrect:false},
                {Answer:"Jordan Walke",isCorrect:true},
                {Answer:"Tim Lee",isCorrect:false},
                {Answer:"Jordan Lee",isCorrect:false},
            ]
        },
         {
            Question:"What is Babel ?",     //Babel is the javaScript Compiler,which helps to understand and transfrom the code into understandable code for different browsers.
            Answers:[
                {Answer:"JavaScript Compiler",isCorrect:true},
                {Answer:"JavaScript Interpreter",isCorrect:false},
                {Answer:"JavaScript Transpiler",isCorrect:false},
                {Answer:"None of the above",isCorrect:false},
            ]
        },
         {
            Question:"Identify the command used to create a react app ?",  
            Answers:[
                {Answer:"npx create-react-app",isCorrect:false},
                {Answer:"npm install -g create-react-app",isCorrect:false},
                {Answer:"Both of the above",isCorrect:true},
                {Answer:"None of the above",isCorrect:false},
            ]
        },
         {
            Question:"How many elements can a valid react component return ?",
            Answers:[
                {Answer:"1",isCorrect:true},
                {Answer:"2",isCorrect:false},
                {Answer:"3",isCorrect:false},
                {Answer:"4",isCorrect:false},
            ]
        },
         {
            Question:"A state in React.js is also known as  ?",
            Answers:[
                {Answer:"The internal Storage of the component",isCorrect:true},
                {Answer:"External Storage of the component",isCorrect:false},
                {Answer:"Permanent Storage",isCorrect:false},
                {Answer:"All of the above",isCorrect:false},
            ]
        }
    ]
 
    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit"  className='btn' onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;
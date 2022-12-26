import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetailes from '../QuizDetailes/QuizDetailes';

const Quiz = () => {
    const quiz  =useLoaderData();
    console.log(quiz)
    const {question}=quiz.data.questions;

    console.log(quiz.data.questions)
   
    return (
        <div>
            <h1 style={{color:'orange'}}>Let's Start Quiz: {question}</h1>
           <ol>
           {
                quiz.data.questions.map(qu=> <QuizDetailes
                key={qu.id}
                qu={qu}
                > </QuizDetailes>)
            }
           </ol>
        </div>
    );
};

export default Quiz;
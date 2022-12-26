import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import './QuizDetailes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'


const QuizDetailes = ({qu}) => {
    const [open, setOpen]= useState(true);

   
    const {options,question,correctAnswer}=qu

    const handleAnswer = (correct)=>{
        if(correct===correctAnswer){
            toast.success('Very Good.Correct Answer', {autoClose:500})
        }
        else{
            toast.warning('Bad Luck.Incorrect Answer', {autoClose:500})
        }

    }


    return (
        <div className='quiz-div'>
           
            <div>
           <h3>{question} </h3>
           {
            options.map(option=> <Option
            key={option.id}
            option={option}
            handleAnswer= {handleAnswer}
            ></Option>)
           }
        </div>
            <div onClick={()=> setOpen(!open) } >
       {
        open?  <FontAwesomeIcon style={{fontSize: '20px'}} icon={faEye} />:  <FontAwesomeIcon style={{fontSize: '20px'}} icon={faEyeSlash} />
       }
            </div>

            <div >
                <h4 className= {open?'hidden':'block'}>
                    Ans: {correctAnswer}
                </h4>

            </div>

        </div>
    );
};

export default QuizDetailes;
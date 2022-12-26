import React from 'react';

const Option = ({option,handleAnswer}) => {
    return (
        <div style={{border:'2px solid red', width:'300px', borderRadius:'10px', marginLeft:'40px'}} >
           <button onClick={()=> handleAnswer(option)} style={{width:'100%'}}>
           <p style={{textAlign:'center', backgroundColor: 'gray', color:'white', }}> {option} </p>
           </button>
        </div>
    );
};

export default Option;
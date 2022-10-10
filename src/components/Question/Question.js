import React from 'react';

const Question = ({quiz}) => {
    // console.log(quiz);
    const {correctAnswer, options, question} = quiz;
    return (
        <div className='border-2 m-4'>
            <h3>question: {question}</h3>
            {
                options.map(op => <li>{op}</li>)
            }
            <h2>currect ans: {correctAnswer}</h2>

            

        </div>
    );
};

export default Question;
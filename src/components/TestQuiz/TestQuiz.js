import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TestQuiz = () => {
    const allQuestion = useLoaderData();
    // console.log(allQuestion);
    const {questions, name} = allQuestion.data;
    // console.log(total);
    
    return (
        <div>
            <h3 className='text-center text-3xl'>Quiz of {name}</h3>
            {
                questions.map( (quiz,inx) => <Question
                key={quiz.id}
                quiz= {quiz}
                inx = {inx}
                
                ></Question>)
            }
        </div>
    );
};

export default TestQuiz;
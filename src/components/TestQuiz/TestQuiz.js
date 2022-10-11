import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TestQuiz = () => {
    const allQuestion = useLoaderData();
    // console.log(allQuestion);
    const {questions, name, total} = allQuestion.data;
    // console.log(total);
    
    return (
        <div>
            <h3 className='text-center text-3xl'>Quiz of {name}</h3>
            {
                questions.map(quiz =><Question
                    key={quiz.id}
                    quiz= {quiz}
                    total = {total}
                    
                    ></Question>)
            }
        </div>
    );
};

export default TestQuiz;
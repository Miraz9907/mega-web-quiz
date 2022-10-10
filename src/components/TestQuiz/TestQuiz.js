import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TestQuiz = () => {
    const allQuestion = useLoaderData();
    const {questions} =allQuestion.data;
    console.log(questions)
    
    return (
        <div>
            
        </div>
    );
};

export default TestQuiz;
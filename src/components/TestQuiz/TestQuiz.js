import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TestQuiz = () => {
    const allQuestion = useLoaderData();
    const {questions} =allQuestion.data;
    // console.log(questions)
    
    return (
        <div>
            {
                questions.map(quiz =><Question
                    key={quiz.id}
                    quiz= {quiz}
                    ></Question>)
            }
        </div>
    );
};

export default TestQuiz;
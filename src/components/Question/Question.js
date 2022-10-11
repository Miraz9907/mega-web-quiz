import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({quiz,total}) => {
    const {correctAnswer, options, question} = quiz;
    // console.log(total);
    let count = 0;
    for(let i = 1; i<= total; i++){
         count = count + 1;
        console.log(count, question);
        
    }
    

    const handleBtn = ()=>{
        const rightAns = JSON.stringify(correctAnswer);
       alert("Correct ans is: " + rightAns);
    }
    const [notice , setNotice] = useState('');
    const handleChange = event =>{
        setNotice(event.target.value);
    }
    const handleClick = event =>{
        event.preventDefault();
        console.log( event.target.value);
        if(event.target.value === correctAnswer){
            alert('Yes! Your Answer is Right ');
        }
        else{
            alert('Sorry! Your Answer is Wrong ');
        }
    }
    return (
        
      
        
        <div className="my-4 mx-8 border-2 bg-slate-500">
        <div className="flex justify-between">
          <h1 className="mb-10 mt-5 font-bold text-xl text-white">Question no. {question}</h1>
          <button type="btn" className="" onClick={handleBtn}>
            <EyeIcon className="w-7 h-7 text-black"></EyeIcon>
          </button>
        </div>

        <h3> question:{count} {question}</h3>
        
        <div>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:grid grid-cols-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b  sm:border-b-0 sm:border-r dark:border-gray-600 bg-zinc-500 ">
              <div className="flex items-center pl-3">
                <input onChange={handleChange} onClick={handleClick}
                  id="horizontal-list-radio-license"
                  type="radio"
                  value={options[0]}
                  name="list-radio"
                  className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                {options[0]}
                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                  {/* {options[0]} */}{" "}
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 bg-zinc-500">
              <div className="flex items-center pl-3">
                <input onChange={handleChange} onClick={handleClick}
                  id="horizontal-list-radio-id"
                  type="radio"
                  value={options[1]}
                  name="list-radio"
                  className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />{options[1]}
                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                  {/* {options[1]} */}
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 bg-zinc-500 ">
              <div className="flex items-center pl-3">
                <input onChange={handleChange} onClick={handleClick}
                  id="horizontal-list-radio-millitary"
                  type="radio"
                  value={options[2]}
                  name="list-radio"
                  className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                /> {options[2]}
                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                  {/* {options[2]} */}
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 bg-zinc-500">
              <div className="flex items-center pl-3">
                <input onChange={handleChange} onClick={handleClick}
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value={options[3]}
                  name="list-radio"
                  className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />{options[3]}
                <label
                  //   for="horizontal-list-radio-passport"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {/* {options[3]} */}
                </label>
              </div>
            </li>
          </ul>
        </div>
       
      </div>
      
    );
};

export default Question;
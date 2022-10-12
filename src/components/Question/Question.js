import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({quiz,inx}) => {
  console.log(inx)
    const {correctAnswer, options, question} = quiz;

    const handleBtn = ()=>{
        const rightAns = JSON.stringify(correctAnswer);
      toast.info('The correct answes is '+ rightAns, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    const [notice , setNotice] = useState('');
    const handleChange = event =>{
        setNotice(event.target.value);
    }
    
    const handleClick = event =>{
        event.preventDefault();
        if(event.target.value === correctAnswer){
            toast.success('Yes! Your Answer is Right', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        }
        else{
            toast.error('Sorry! Your Answer is Wrong!', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        }
       
    }
    return (
      <div>
        <div className="my-16 mx-24 border-2 bg-sky-900 p-5 rounded-lg">
          <div className="flex justify-between">
            <h1 className="mb-10 mt-5 font-bold text-xl text-white">
              Question no {inx + 1}. {question.slice(3, -4)}
            </h1>
            <button type="btn" className="" onClick={handleBtn}>
              <EyeIcon className="w-7 h-7 text-black"></EyeIcon>
            </button>
          </div>
          <div>
            <ul className="items-center w-full text-sm font-medium text-gray-900  border border-gray-200 sm:grid grid-cols-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-sky-600 rounded">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600  ">
                <div className="flex items-center pl-3">
                  <input
                    onChange={handleChange}
                    onClick={handleClick}
                    id="horizontal-list-radio-license"
                    type="radio"
                    value={options[0]}
                    name="list-radio"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                    {options[0]}
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 ">
                <div className="flex items-center pl-3">
                  <input
                    onChange={handleChange}
                    onClick={handleClick}
                    id="horizontal-list-radio-id"
                    type="radio"
                    value={options[1]}
                    name="list-radi"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                    {options[1]}
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 ">
                <div className="flex items-center pl-3">
                  <input
                    onChange={handleChange}
                    onClick={handleClick}
                    id="horizontal-list-radio-millitary"
                    type="radio"
                    value={options[2]}
                    name="list-rad"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                    {options[2]}
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 ">
                <div className="flex items-center pl-3">
                  <input
                    onChange={handleChange}
                    onClick={handleClick}
                    id="horizontal-list-radio-passport"
                    type="radio"
                    value={options[3]}
                    name="list-ra"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                    {options[3]}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Question;
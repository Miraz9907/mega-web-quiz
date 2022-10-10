import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { logo, name, total, id } = topic;

  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate(`/topic/${id}`)

  }


 
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-white">
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-black"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <div className="flex justify-between items-center">
            <p className="text-white">Questions: {total}</p>
            <button onClick={handleNavigate}
              type="button"
              className="flex items-center justify-center w-50 px-3 py-2 font-semibold hover:bg-pink-600 hover:text-white rounded-md bg-white text-gray-900"
            >
              Start Quiz
              <ArrowRightIcon className="h-6 w-6 m-1 text-gray-900  " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;

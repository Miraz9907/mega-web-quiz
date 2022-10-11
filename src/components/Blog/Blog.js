import React from 'react';


const Blog = () => {
    return (

        <div>
            <div>
                <h2 className='text-center text-4xl my-4'>Basic Question about react router</h2>

            </div>
            <div className='grid md:grid-cols-2 mx-10 sm:grid-cols-1 rounded lg:grid-cols-3 gap-4 bg-gray-900 '>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="text-red-900">
                    <span className="block font-bold  ">What is the purpose of react router?</span>
                </div>
                <p className="">Purpose of react.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="text-cyan-500">
                    <span className="block font-bold  ">How does the context API work?</span>
                </div>
                <p className="dark:text-gray-10">Context API work</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="text-cyan-500">
                    <span className="block font-bold ">What is the uses useRef in reactjs?</span>
                </div>
                <p className="">Uses of useRef.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;
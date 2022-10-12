import React from 'react';


const Blog = () => {
    return (

        <div>
            <div>
                <h2 className='text-center text-4xl my-4'>Basic Question about react router</h2>

            </div>
            <div className='grid md:grid-cols-2 mx-10 sm:grid-cols-1 rounded lg:grid-cols-3 gap-4 bg-gray-900 '>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="text-cyan-500">
                    <span className="block font-bold  ">What is the purpose of react router?</span>
                </div>
                <p className=""><strong>Purpose of react,</strong> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="text-cyan-500">
                    <span className="block font-bold  ">How does the context API work?</span>
                </div>
                <p className="dark:text-gray-10"><strong>Context API work, </strong> React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it. usually you are only able to pass data from parent to child via props</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="text-cyan-500">
                    <span className="block font-bold ">What is the uses useRef in reactjs?</span>
                </div>
                <p className=""><strong>Uses of useRef.</strong> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.useRef can be used to store local mutable value in a component. It doesn't participate in rerendering (unline state data). useMemo is used to memoize (like we do in Dynamic Programming, concept wise) and skip recalculation.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;
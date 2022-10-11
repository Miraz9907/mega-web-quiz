import React from 'react';


const Blog = () => {
    return (

        <div>
            <div>
                <h2 className='text-center text-4xl my-4'>Basic Question about react router</h2>

            </div>
            <div className='grid md:grid-cols-2 mx-10 sm:grid-cols-1 rounded lg:grid-cols-3 gap-4 bg-gray-900 '>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="">
                    <span className="block font-bold  ">What is the purpose of react router?</span>
                </div>
                <p className="">Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum quasi velit a quo porro aliquam provident dolore alias. Tempora, odio in ex accusamus ad magnam ab neque qui quia! et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="">
                    <span className="block font-bold  ">How does the context API work?</span>
                </div>
                <p className="dark:text-gray-10">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-white m-3 text-gray-900">
                <div className="">
                    <span className="block font-bold ">What is the uses useRef in reactjs?</span>
                </div>
                <p className="">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;
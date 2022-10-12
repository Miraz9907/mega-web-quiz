import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import Topic from '../Topic/Topic';


const Topics = () => {

    const topics = useLoaderData();
    const {data} =topics;
    // console.log(topics)
    
    return (
        <div>
            <div>
                <Home></Home>
                <h2 className='text-center font-semibold text-3xl my-6'>Choose your subject</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3  m-4 justify-center'>
            {
                data.map(topic => <Topic
                     key={topic.id}
                     topic ={topic}
                ></Topic>)
            }
            
           
        </div>

            </div>

            

        </div>
        
    );
}
export default Topics;
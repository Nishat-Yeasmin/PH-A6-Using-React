import React from 'react';

const Stats = () => {
    return (
        <div className='flex gap-20 bg-gradient-to-r from-blue-700 to-purple-800 text-white px-80 py-14 my-6'>
            <div>
                <h2 className='font-bold text-2xl '>50K+</h2>
                <p className=' opacity-80'>Active User</p>
            </div>
                 <div className="w-[2px] h-10 bg-gray-300 opacity-40"></div>
                
            <div>
                <h2 className='font-bold text-2xl '>200+</h2>
                <p  className=' opacity-80'>Premium Tools</p>
            </div>
             <div className="w-[2px] h-10 bg-gray-300 opacity-40"></div>

            <div>
                <h2 className='font-bold text-2xl '>4.9</h2>
                <p  className=' opacity-80'>Rating</p>
            </div>
            
        </div>
    );
};

export default Stats;
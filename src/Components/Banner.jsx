import React from 'react';

const Banner = () => {
    return (
        <div className=' flex flex-col md:flex-row gap-10 mt-8 w-11/12 mx-auto'>
            <div className='mt-30'>
                <div className='inline-flex items-center  px-4 bg-[#E1E7FF] rounded-full py-2  gap-1.5 w-fit' >
                    <img src="/src/assets/Group 5.png" alt="" />
                    <p className='text-[16px] bg-gradient-to-r to-blue-700 from-purple-700 bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <div>
                <h1 className='font-bold text-[#101727] text-7xl'>Supercharge Your <br />Digital Workflow</h1>

                <p className='text-[18px] text-[#627382] mt-4 '>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>

                </div>
                <div className='flex gap-3 mt-5'>
                    <button className="btn bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-4xl">Explore Products</button>
                    <button className="btn btn-outline btn-primary rounded-full"><img src="/src/assets/Play.png" alt="" />Watch Demo</button>
                </div>
            </div>
            <div>
                <img src="/src/assets/banner.png" alt="" />
            </div>
        </div>

        
    );
};

export default Banner;
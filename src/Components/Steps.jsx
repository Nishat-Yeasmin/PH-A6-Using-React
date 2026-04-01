import React from 'react';
import stepsUser from '../assets/user.png';
import stepsPackage from '../assets/package.png';
import stepsRocket from '../assets/rocket.png';

const Steps = () => {
    return (
        <div className=' text-center mx-auto my-3'>
            <div className='text-center'><h2 className='font-bold text-3xl'>Get Started in 3 Steps</h2>
            <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p></div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto w-11/12 my-7'>
                <div className='border border-gray-300 rounded-2xl p-6'>
                   <div className='flex justify-end'>
                     <button className='bg-gradient-to-r from-blue-700 to-purple-700 rounded-full text-white font-bold w-12'>01</button>
                   </div>
                    <img className='mx-auto' src={stepsUser} alt="" />
                    <h2 className='font-bold text-2xl'>Create Account</h2>
                    <p className='font-bold text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='border border-gray-300 rounded-2xl p-6'>
                   <div className='flex justify-end'>
                     <button className='bg-gradient-to-r from-blue-700 to-purple-700 rounded-full text-white font-bold w-12'>02</button>
                   </div>
                    <img className='mx-auto' src={stepsPackage} alt="" />
                    <h2 className='font-bold text-2xl'>Choose Products</h2>
                    <p className='font-bold text-gray-500'>Browse our catalog and select the tools <br />that fit your needs.</p>
                </div>

                <div className='border border-gray-300 rounded-2xl p-6'>
                    <div className='flex justify-end'>
                        <button className='bg-gradient-to-r from-blue-700 to-purple-700 rounded-full text-white font-bold w-12'>03</button>
                    </div>
                    <img className='mx-auto' src={stepsRocket} alt="" />
                    <h2 className='font-bold text-2xl'>Start Creating</h2>
                    <p className='font-bold text-gray-500'>Download and start using your premium <br />tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;
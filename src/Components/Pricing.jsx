import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div className='w-11/12 mx-auto my-19 '>

            <div className='text-center my-4 mb-7'>
                <h2 className='font-bold text-2xl'>Simple, Transparent Pricing</h2>
                <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>

                <div className='px-6 py-7  bg-gray-100 rounded-lg'>
                    <h2 className='font-bold text-2xl mb-1.5'>Starter</h2>
                    <p className='text-gray-500 mb-5'>Perfect for getting started</p>

                    <div className='mb-5'>
                        <h2><span className='font-bold text-2xl'>$0</span><span className='text-gray-500'>/Month</span></h2>
                    </div>

                    <div>
                        <ul class="space-y-2 text-gray-700">

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Access to 10 free tools</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Basic Templates</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Community Support</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>1 project per month</span>
                            </li>

                        </ul>
                    </div>

                    <button className='text-white bg-gradient-to-r from-blue-800 to-purple-800 rounded-full px-4 py-3 mt-23 w-full'>Get Started Free</button>
                </div>


                <div className='relative px-6 py-7  bg-gradient-to-r from-blue-700 to-purple-800 rounded-lg text-white'>
                    <p className='bg-amber-200 text-amber-600 font-semibold rounded-full px-2.5 py-1.5 absolute -top-3 left-1/2 -translate-x-1/2'>Most Popular</p>
                    <h2 className='font-bold text-2xl mb-1.5'>Pro</h2>
                    <p className='text-gray-100 mb-5'>Best for Professionals</p>

                    <div className='mb-5'>
                        <h2><span className='font-bold text-2xl'>$29</span><span >/Month</span></h2>
                    </div>

                    <div>
                        <ul class="space-y-2 text-white">

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-white" />
                                <span>Access to all premium tools</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-white" />
                                <span>Unlimited Templates</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-white" />
                                <span>Priority Support</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-white" />
                                <span>Unlimited Projects</span>
                            </li>


                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-white" />
                                <span>Cloud sync</span>
                            </li>


                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-white" />
                                <span>Advanced analytics</span>
                            </li>

                        </ul>
                    </div>

                    <button className='bg-white rounded-full px-4 py-3 mt-5 w-full '><span className='bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent font-semibold '>Start Pro Trial</span></button>
                </div>



                <div className='px-6 py-7  bg-gray-100 rounded-lg'>
                    <h2 className='font-bold text-2xl mb-1.5'>Enterprise</h2>
                    <p className='text-gray-500 mb-5'>For teams and businesses</p>

                    <div className='mb-5'>
                        <h2><span className='font-bold text-2xl'>$99</span><span className='text-gray-500'>/Month</span></h2>
                    </div>

                    <div>
                        <ul class="space-y-2 text-gray-700">

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Everything in Pro</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Team Collaboration</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Custom integrations</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Dedicated support</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>SLA guarantee</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Custom Branding</span>
                            </li>

                        </ul>
                    </div>

                    <button className='text-white bg-gradient-to-r from-blue-800 to-purple-800 rounded-full px-4 py-3 mt-5 w-full'>Contact Sales</button>
                </div>

            </div>

            

                

            </div>

        
    );
};

export default Pricing;
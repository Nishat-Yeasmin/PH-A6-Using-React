import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>

              <div className=' w-11/12 mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 py-15'>

            <div>
                <h2 className='font-bold text-2xl text-white mb-2'>DigiTools</h2>
                <p className='text-gray-400'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>

            <div className='space-y-2.5'>
                <h3 className='font-semibold text-white'>Product</h3>
                <div className='text-gray-400 space-y-2.5'>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Templates</p>
                    <p>Integrations</p>
                </div>
            </div>


            <div className='space-y-2.5'>
                <h3 className='font-semibold text-white'>Company</h3>
                <div className='text-gray-400 space-y-2.5'>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>
            </div>


            <div className='space-y-2.5'>
                <h3 className='font-semibold text-white'>Resources</h3>
                <div className='text-gray-400 space-y-2.5'>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Contact</p>
                </div>
            </div>

            <div>
                <h3 className='font-semibold text-white mb-3'>Social Links</h3>

                <div className='flex gap-2.5'>
                    <img src="/src/assets/Instagram.png" alt="" />

                    <img src="/src/assets/Facebook.png" alt="" />

                    <img src="/src/assets/Twitter (2).png" alt="" />
                </div>
            </div>

            </div>

            <hr className='text-gray-400 my-6' />

            <div className='flex justify-between pb-6'>
                <div>
                <p className='text-gray-400'>© 2026 Digitools. All rights reserved.</p>
                </div>

                <div className='text-gray-400 flex gap-6'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>

            </div>

              </div>

           
            
        </div>
    );
};

export default Footer;
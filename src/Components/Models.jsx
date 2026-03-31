import React, { use } from 'react';
import { Check } from 'lucide-react';

const Models = ({modelPromise }) => {
    const models = use(modelPromise )
    console.log(models)

    const tagStyles = {
  popular: "bg-blue-100 text-blue-600",
  new: "bg-green-100 text-green-600",
  best: "bg-yellow-100 text-yellow-700"
};
    return (
        <div className='py-18'>
           <div className='text-center'>
            
             <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
            <p className='text-[#627382] opacity-100'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                models.map(model => <div className='relative px-6 py-7 rounded-2xl shadow-sm '>
                    <p className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full w-fit ${tagStyles[model.tagType]}`}>{model.tagType}</p>
                    <img className='mt-5' src={model.icon} alt={model.name} />
                    <h3 className='mt-5 text-2xl font-bold'>{model.name}</h3>
                    <p className='mt-5 text-[#627382] text-[16px]'>{model.description}</p>
                    <h3 className='mt-5 text-2xl'><span className='font-bold'>${model.price}</span><span className='text-[#627382] text-sm ml-1'>/{model.period}</span></h3>
           <ul className="mt-5 space-y-2">
  {model.features.map((feature, index) => (
    <li key={index} className="flex items-center gap-2 text-gray-700">
      <Check className="text-green-500 w-4 h-4" />
      <span>{feature}</span>
    </li>
  ))}
</ul>

<button className='mt-5 rounded-full bg-gradient-to-r from-blue-800 to-purple-700 w-full text-white py-3 '>Buy Now</button>
         
                </div>
                    )
            }
           </div>
            
        </div>
    );
};

export default Models;
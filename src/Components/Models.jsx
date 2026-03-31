
import { use } from 'react';
import ModelsCard from './ModelsCard';

const Models = ({modelPromise,carts,setCarts }) => {
    const models = use(modelPromise)
    console.log(models)

   

    return (
        <div className='py-18'>
           <div className='text-center'>
            
             <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
            <p className='text-[#627382] opacity-100'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                models.map((model) =>(<ModelsCard key={model.key} model={model} carts={carts} setCarts={setCarts}/> ))
            }
           </div>
            
        </div>
    );
};

export default Models;
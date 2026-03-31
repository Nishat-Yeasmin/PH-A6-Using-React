import React from 'react';

const Cart = ({carts,setCarts}) => {
    const totalPrice = carts.reduce((sum,item)=>sum+item.price,0)

    const handlePayment = ()=>{
        setCarts([])
    }
    const handleDelete = (item)=>{
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)

    }
    return (
        <div className='border-gray-400 rounded-2xl p-10'>
            <h3 className='font-bold text-2xl p-10'>Your Cart</h3>

            {
                carts.length === 0? <p className='font-semibold text-center text-2xl p-5'>Cart is an Empty</p>: <>
                 <div className='p-10 space-y-5' >
            {
                carts.map(item=> <div className='bg-sky-50 p-3 rounded-lg' key={item.id}>
                   <div className='flex gap-5 items-center'>
                    <div>
                <img className='mt-5' src={item.icon} alt={item.name} />
                </div>

                <div>
                    <h3 className='mt-5 text-2xl font-bold'>{item.name}</h3>
                    <p>${item.price}</p>

                   
                </div>
                
                <div className='text-end'> <button onClick ={()=>handleDelete(item)} className='text-red-500 font-semibold text-2xl'>Remove</button></div>
                   </div>
                </div>)
            }
        </div>

        <div className='flex justify-between p-10  rounded-lg font-bold text-2xl'>
            <div>Total</div>
            <div>{totalPrice}</div>

        </div>
        <button onClick={handlePayment} className='mt-5 rounded-full bg-gradient-to-r from-blue-800 to-purple-700 w-full text-white py-3 font-bold text-2xl '>Proceed To Checkout</button></>
            }
           
        </div>
    );
};

export default Cart;
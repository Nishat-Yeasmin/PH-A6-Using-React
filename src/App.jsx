
import './App.css'
import Banner from './Components/Banner'
import Models from './Components/Models'
import NavBar from './Components/NavBar'
import Stats from './Components/Stats'
import Cart from './Components/Cart'
import { useState } from 'react'
import Steps from './Components/Steps'


const getModels = async ()=>{
  const res = await fetch("/Models.json")
  return res.json();
}

const modelPromise = getModels();
function App() {

  const [activeTab, setActiveTab] = useState("products")

  const [carts,setCarts] = useState([])

  console.log(activeTab)
  

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Stats></Stats>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center py-10 gap-4">
  <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Products" defaultChecked onClick={()=>setActiveTab("products")}/>
  <input type="radio" name="my_tabs_1" className="tab rounded-full " aria-label={`Cart (${carts.length})`} onClick={()=>setActiveTab("cart")} />
  
</div>
    {activeTab==="products" &&<Models modelPromise ={modelPromise } carts={carts} setCarts={setCarts}></Models>}
    {activeTab==="cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    <Steps></Steps>
    </>
  )
}

export default App

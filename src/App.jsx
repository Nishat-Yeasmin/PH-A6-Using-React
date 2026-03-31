
import './App.css'
import Banner from './Components/Banner'
import Models from './Components/Models'
import NavBar from './Components/NavBar'
import Stats from './Components/Stats'


const getModels = async ()=>{
  const res = await fetch("/Models.json")
  return res.json();
}

const modelPromise = getModels();
function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Stats></Stats>
    <Models modelPromise ={modelPromise }></Models>
    
    </>
  )
}

export default App
